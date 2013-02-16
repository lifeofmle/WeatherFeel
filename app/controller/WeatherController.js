Ext.define('WeatherFeel.controller.WeatherController', {
    extend: 'Ext.app.Controller',
    requires:['Ext.data.proxy.JsonP'],
    config: {
        refs: {
            refreshBtn: "#refresh-btn"
        },
        control: {
            refreshBtn: {
                updateWeatherCommand: "onUpdateWeather"
            }
        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    onUpdateWeather: function(){
        console.log('Updating weather...');

        Ext.getStore('Cities').load({
            scope: this,
            callback: function(cities, operation, success){

                Ext.each(cities, function(city, index) {

                    // TODO: Get city weather

                    var currentTemp = index + 5;
                    var feelsLikeTemp = index + 4;
                    var popValue = index * 10 +'%';
                    var currentIcon = 'http://icons.wxug.com/i/c/i/partlysunny.gif';
                    var yesterdayCond = 'It was a cloudy day yesterday <br /> It was a high of 5';
                    var hourlyData = [
                        { hour: '8am', temp: 2},
                        { hour: '9am', temp: 1},
                        { hour: '10am', temp: 3}
                    ];
                    var forecastData = [
                        { day: 'Monday', low: 2, high: 2, description: 'Party cloudy'},
                        { day: 'Tuesday', low: 1, high: 2, description: 'Chances of rain 20%'},
                        { day: 'Wednesday', low: 3, high: 5, description: 'Sunny during the day'}
                    ];

                    var viewName = 'ext-weatherView-'+ (index+1);
                    var weatherView = Ext.getCmp(viewName);

                    if (weatherView)
                    {
                        // Top Panel
                        var currentWeatherPanel = weatherView.getComponent('topPanel').getComponent('topArea').getComponent('currentWeatherPanel');

                        if (currentWeatherPanel)
                        {
                            var weatherIconPanel = currentWeatherPanel.getComponent('weatherIconPanel');

                            if (weatherIconPanel)
                            {
                                var html = '<div><img src"'+ currentIcon +'"/></div>';

                                weatherIconPanel.setSrc(currentIcon);
                            }

                            var weatherTempLabel = currentWeatherPanel.getComponent('weatherTempPanel').getComponent('weatherTempLabel');

                            if (weatherTempLabel)
                            {
                                var html = '<div style="background-color: rgba(222,222,222,0.3); padding: 10"><div style="color: #f8fbfe; font-size: xx-large; margin:20px">'+ currentTemp +'&#176;C</div></div>';

                                weatherTempLabel.setHtml(html);
                            }
                        }

                        // Now
                        var nowPanel = weatherView.getComponent('bottomPanel').getComponent('nowPanel');

                        if (nowPanel)
                        {
                            var currentPanel = nowPanel.getComponent('currentPanel');

                            if (currentPanel)
                            {
                                // Now - Feels Like
                                var feelsLikeLabel = currentPanel.getComponent('feelsLikePanel').getComponent('feelsLikeLabel');
                                if (feelsLikeLabel)
                                {
                                    feelsLikeLabel.setHtml('<p style="font-size: xx-large; margin-left: 10px">'+ feelsLikeTemp +'&#176;C</p>');
                                }

                                // Now - POP
                                var popLabel = currentPanel.getComponent('popPanel').getComponent('popLabel');
                                if (popLabel)
                                {
                                    popLabel.setHtml('<p style="font-size: xx-large">'+ popValue +'</p>');
                                }
                            }

                            // Yesterday
                            var yesterdayPanel = nowPanel.getComponent('yesterdayPanel');
                            if (yesterdayPanel)
                            {
                                var yesterdayLabel = yesterdayPanel.getComponent('yesterdayLabel');
                                if (yesterdayLabel)
                                {
                                    yesterdayLabel.setHtml(yesterdayCond);
                                }
                            }
                        }

                        // Later
                        var laterPanel = weatherView.getComponent('bottomPanel').getComponent('laterPanel');

                        if (laterPanel)
                        {
                            var chart = laterPanel.getComponent('hourlyChart');

                            if (chart)
                            {
                                chart.getStore().removeAll();
                                chart.getStore().setData(hourlyData);
                            }
                        }

                        // Future
                        var futurePanel = weatherView.getComponent('bottomPanel').getComponent('futurePanel');
                        if (futurePanel)
                        {
                            var forecastList = futurePanel.getComponent('forecastList');

                            if (forecastList)
                            {
                                forecastList.getStore().removeAll();
                                forecastList.setData(forecastData);
                            }

                        }
                    }

                });
            }
        });
    },

    onUpdateTimer: function(){

        var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

        Ext.getStore('Cities').load({
           scope: this,
           callback: function(cities, operation, success){

               var date = new Date();

               Ext.each(cities, function(city, index) {

                   // Get city offset
                   var utcOffset = city.get('utcOffset');

                   // convert to msec
                   // add local time zone offset
                   // get UTC time in msec
                   var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

                   // create new Date object for different city
                   // using supplied offset
                   var localDate = new Date(utc + (3600000*utcOffset));

                   var hour = localDate.getHours();
                   var minute = localDate.getMinutes();
                   var second = localDate.getSeconds();

                   var timeOfDay = 'am';
                   if (hour >= 12)
                       timeOfDay = 'pm';

                   var viewName = 'ext-weatherView-'+ (index+1);
                   var weatherView = Ext.getCmp(viewName);

                   var timezoneOffset = '';
                   if (utcOffset != 0)
                   {
                       if (utcOffset > 0)
                            timezoneOffset = '+'+ utcOffset;
                       else
                            timezoneOffset = utcOffset;
                   }

                   var time = monthNames[localDate.getMonth()] + ' '+ localDate.getDay() +', '+ localDate.getFullYear() +' '+ hour.pad(2) +':'+ minute.pad(2) +' '+ timeOfDay;

                   if (weatherView)
                   {
                       var topPanel = weatherView.getComponent('topPanel');

                       var timePanel = topPanel.getComponent('topArea').getComponent('localTimePanel');

                       if (timePanel)
                       {
                           timePanel.setHtml('<p style="color: #fff; margin:10px 0px 0px 5px">'+ time +'</p><span style="color: #fff; font-size: small; float: left; margin: -1px 0px 0px 5px; ">local time (UTC'+ timezoneOffset +')</span>');
                       }

                       var cityName = city.get('name');
                       cityName = cityName.replace(" ", "_").toLowerCase();

                       // Check background image
                       // If between 6am -> 6pm: day image
                       // If between 6pm -> 6am: night image
                       var currentHour = localDate.getHours();
                       if (currentHour >= 6 && currentHour <= 18)
                       {
                           // day
                           topPanel.setCls('dayPanelBackground-'+cityName);
                       }
                       else
                       {
                           // night
                           topPanel.setCls('nightPanelBackground-'+cityName);
                       }
                   }

               });

               setInterval(this.onUpdateTimer, 5000);
           }
        });
    },

    // Base classes
    launch: function () {
        this.callParent(arguments);
        console.log("launch");

        console.log('load data...');
        Ext.getStore("Forecast").load();
        Ext.getStore("Hourly").load();

        Number.prototype.pad = function (len) {
            return (new Array(len+1).join("0") + this).slice(-len);
        };

        this.onUpdateTimer();
        this.onUpdateWeather();
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});