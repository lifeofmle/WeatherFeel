Ext.define('WeatherFeel.view.Weather', {
    extend: 'Ext.Container',
    xtype: 'weatherView',
    config: {
        city: null,
        localTime: null,
        cityName: null,
        currentTemp: null,
        currentFeelsLikeTemp: null,
        currentPop: null,
        currentWeatherIcon: null,
        yesterdayHighTemp: null,
        yesterdayLowTemp: null,
        yesterdayAtTimeTemp: null,
        yesterdayAtTimeCond: null,
        layout: {
            type: 'vbox'
        }
    },

    initialize: function(){
        this.callParent(arguments);

        this.add([
            {
                itemId: 'topPanel',
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox'
                },
                items: [
                    {
                        itemId: 'topArea',
                        xtype: 'panel',
                        flex: 1,
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                xtype: 'panel',
                                flex: 1,
                                cls: 'cityTitle',
                               html: '<p style="color: #FFFFFF; font-size: xx-large; margin:5px">'+ this.cityName +'</p>'
                            },
                            {
                                itemId: 'localTimePanel',
                                xtype: 'panel',
                                flex: 1
                            },
                            {
                                itemId: 'currentWeatherPanel',
                                xtype: 'container',
                                flex: 3,
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        itemId: 'weatherIconPanel',
                                        xtype: 'image',

                                        flex: 1
                                    },

                                    {
                                        itemId: 'weatherTempPanel',
                                        xtype: 'panel',
                                        flex: 1,
                                        items:[
                                            {
                                                itemId: 'weatherTempLabel',
                                                xtype: 'label',
                                                centered: true,
                                                html: '6°C'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                itemId: 'bottomPanel',
                xtype: 'tabpanel',
                flex: 1.5,
                items: [
                    {
                        itemId: 'nowPanel',
                        xtype: 'container',
                        title: 'Now',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                itemId: 'currentPanel',
                                xtype: 'container',
                                flex: 1,
                                layout: {
                                    type: 'hbox'
                                },
                                items: [
                                    {
                                        itemId: 'feelsLikePanel',
                                        xtype: 'panel',
                                        flex: 1,
                                        html: '<p style="color: #2F6284; font: x-large;">Feels Like</p>',
                                        items: [
                                            {
                                                itemId: 'feelsLikeLabel',
                                                xtype: 'label',
                                                centered: true,
                                                html: '6C'
                                            }
                                        ]
                                    },
                                    {
                                        itemId: 'popPanel',
                                        xtype: 'panel',
                                        flex: 1,
                                        html: '<p style="color: #2F6284; font: x-large;">POP</p>',
                                        items: [
                                            {
                                                itemId: 'popLabel',
                                                xtype: 'label',
                                                centered: true,
                                                html: '10%'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                itemId: 'yesterdayPanel',
                                xtype: 'panel',
                                flex: 2,
                                html: '<p style="color: #2F6284; font: x-large;">Yesterday</p>',
                                items: [
                                    {
                                        itemId: 'yesterdayLabel',
                                        xtype: 'label',
                                        centered: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        itemId: 'laterPanel',
                        xtype: 'container',
                        title: 'Later',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                itemId: 'hourlyChart',
                                xtype: 'chart',
                                flex: 1,
                                margin: '0 0 12 0',
                                innerPadding: {
                                    top: 2,
                                    left: 5,
                                    right: 5,
                                    bottom: 5
                                },
                                store: Ext.getStore("Hourly"),
                                series: [
                                    {
                                        type: 'line',
                                        style: {
                                            stroke: 'rgb(0,0,200)',
                                            lineWidth: 2
                                        },
                                        marker: {
                                            type: 'circle',
                                            stroke: '#0d1f96',
                                            fill: '#115fa6',
                                            lineWidth: 2,
                                            radius: 4,
                                            shadowColor: 'rgba(0,0,0,0.7)',
                                            shadowBlur: 10,
                                            shadowOffsetX: 3,
                                            shadowOffsetY: 3,
                                            fx: {
                                                duration: 300
                                            }
                                        },
                                        xField: 'hour',
                                        yField: 'temp',
                                        labelField: 'temp'
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
                        itemId: 'futurePanel',
                        xtype: 'container',
                        title: 'Future',
                        layout: {
                            type: 'vbox'
                        },
                        items: [
                            {
                                itemId: 'forecastList',
                                xtype: 'list',
                                flex: 1,
                                emptyText: 'Forecast not loaded',
                                store: { fields: ['day', 'low', 'high', 'description'] },
                                scrollable: true,
                                itemTpl: [
                                    '<div>{day} <span style=\'float:right\'>Low:{low}&#176;C High:{high}&#176;C</span><br/>' +
                                        '{description}' +
                                        '</div>'
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
        ]);

    },

    updateCity: function(city) {
        this.onPopulateCity(city);
    },

    updateLocalTime: function(localTime){
        this.localTime = localTime;
    },

    onPopulateCity: function(city){
        var cityName = city.get('name');
        var area = city.get('area');

        this.cityName = cityName;
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

        // Refresh weather info every hour
        setTimeout(this.onUpdateWeather, 3600000);
    }
});