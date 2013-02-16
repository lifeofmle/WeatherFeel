//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'WeatherFeel': 'app'
});
//</debug>

Ext.application({
    name: 'WeatherFeel',

    requires: [
        'Ext.MessageBox',
        'Ext.List',
        'Ext.Img',
        'Ext.Panel',
        'Ext.Label',
        'Ext.carousel.Carousel',
        'Ext.data.proxy.JsonP',
        'Ext.tab.Panel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],
    controllers: ['WeatherController'],
    models: ['City', 'Forecast', 'Hourly'],
    stores: ['Cities', 'Forecast', 'Hourly'],
    views: ['Main','Weather'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    viewport : {
        autoMaximize : true
    },

    launch: function() {
        console.log('App launched');

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Create carousel
        var carousel = Ext.create('Ext.Carousel', {
            store: 'Cities',
            direction: 'horizontal'
        });

        // Create main list at start
        var mainPanel = Ext.create('Ext.Panel',{
            fullscreen: true,
            layout: 'vbox',
            items:[
                {
                    xtype: 'toolbar',
                    title: 'WeatherFeel',
                    docked: 'top',
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            id: 'refresh-btn',
                            xtype: 'button',
                            iconCls: 'refresh',
                            iconMask: true,
                            text: '',
                            listeners:{
                                tap: function(){
                                    console.log('Tapped refresh...');
                                    this.fireEvent("updateWeatherCommand", this);
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    title: 'Future',
                    flex: 1,
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        {
                            xtype: 'list',
                            store: Ext.getStore('Cities').load(),
                            itemTpl: '{name}',
                            scrollable: false,
                            flex: 1,
                            style: 'background-color: white',
                            listeners:{
                                itemtap: function(item, index){
                                    carousel.setActiveItem(index+1);
                                }
                            }
                        },
                        {
                            xtype: 'image',
                            height: 30,
                            docked: 'bottom',
                            margin: '0 0 30 0',
                            style: 'background-color: white',
                            src: 'resources/images/wunderground.png'
                        }
                    ]
                }
            ]
        });

        Ext.Viewport.add(carousel);

        var items = [];
        items.push(mainPanel);

        Ext.getStore('Cities').load(function(cities) {
            Ext.each(cities, function(city) {
                items.push({
                    xtype: 'weatherView',
                    itemId: 'weatherViewId',
                    city: city
                });
            });
        });

        carousel.setItems(items);

        carousel.setActiveItem(0);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
