Ext.define('WeatherFeel.view.Weather', {
    extend: 'Ext.Container',
    xtype: 'weatherView',
    requires:[
        'Ext.data.proxy.JsonP',
        'Ext.tab.Panel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],
    config: {
        city: null,
        layout: {
            type: 'vbox'
        },
        items: [
            {
                name: 'topPanel',
                xtype: 'panel',
                flex: 1
            },
            {
                xtype: 'tabpanel',
                flex: 1.5,
                items: [
                    {
                        xtype: 'container',
                        title: 'Now',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                flex: 1,
                                html: 'Feels like'
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                border: 1,
                                html: 'Yesterday'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Later',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'chart',
                                flex: 1,
                                margin: 5,
                                store: {
                                    fields: ['hour', 'temp'],
                                    data: [
                                        { hour: '8am', temp: 2},
                                        { hour: '9am', temp: 1},
                                        { hour: '10am', temp: 3},
                                        { hour: '11am', temp: 4},
                                        { hour: '12pm', temp: 5},
                                        { hour: '1pm', temp: 5},
                                        { hour: '2pm', temp: 6},
                                        { hour: '3pm', temp: 5},
                                        { hour: '4pm', temp: 4},
                                        { hour: '5pm', temp: 3},
                                        { hour: '6pm', temp: 2},
                                        { hour: '7pm', temp: 2}
                                    ]
                                },

                                series: [
                                    {
                                        type: 'line',
                                        style: {
                                            stroke: 'rgb(0,0,200)',
                                            lineWidth: 2
                                        },
                                        xField: 'hour',
                                        yField: 'temp'
                                    }
                                ],
                                axes: [
                                    {
                                        type: 'numeric',
                                        position: 'left',
                                        field: 'temp',
                                        title: 'Temperature (C)',
                                        grid: {
                                            fill: '#efefef',
                                            odd: {
                                                fill: '#cdcdcd'
                                            },
                                            even: {
                                                lineWidth: 3
                                            }
                                        }
                                    },
                                    {
                                        type: 'category',
                                        position: 'bottom',
                                        title: 'Hour of Day',
                                        field: 'hour',
                                        grid: true,
                                        style: {
                                            estStepSize: 1
                                        }
                                    }
                                ],
                                interactions: [
                                    {
                                        type: 'panzoom'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        title: 'Future',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'list',
                                flex: 1,
                                itemTpl: [
                                    '<div>List Item {string}</div>'
                                ]
                            }
                        ]
                    }
                ],
                tabBar: {
                    docked: 'top',
                    layout: {
                        align: 'center',
                        pack: 'center',
                        type: 'hbox'
                    }
                }
            }
        ]
    },

    updateCity: function(city) {
        this.onPopulateCity(city);
    },

    onPopulateCity: function(city){
        var cityName = city.get('name');
        var area = city.get('area');

        this.setHtml(cityName);

        this.onUpdateClock(city);
        this.onUpdateWeather(city);
    },

    onUpdateClock: function(city){
        // Calculate the time based on the timezone

        // Refresh clock every second
        setTimeout(this.onUpdateClock, 1000);
    },

    onUpdateWeather: function(city){
        //        Ext.util.JSONP.request({
//            url: 'http://api.wunderground.com/api/98eae93fbe9acf44/conditions/q/'+ area +'/'+ cityName +'.json',
//            callbackKey: 'callback',
//            scope: this,
//            callback: function(successful, data) {
//                console.log( data );
//            }
//        });

        // TODO: Update with current observations, yesterday observations and tweets
        if (city)
            this.onUpdateNow(city);

        // TODO: Update with hourly stats
        if (city)
            this.onUpdateLater(city);

        // TODO: Update with 5-day forecast
        if (city)
            this.onUpdateFuture(city);

        // Refresh weather info every hour
        setTimeout(this.onUpdateWeather, 3600000);
    },

    onUpdateNow: function(){

    },

    onUpdateLater: function(data){

    },

    onUpdateFuture: function(data){

    }
});