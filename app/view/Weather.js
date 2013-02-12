Ext.define('WeatherFeel.view.Weather', {
    extend: 'Ext.Panel',
    id: 'weather',
    xtype: 'weatherView',
    requires: ['Ext.Carousel'],
    config: {
        layout: 'vbox', //defines layout inside config
        items: [
            {
                xtype: 'carousel',
                flex: 1,
                items: [
                    {
                        xtype: 'panel',
                        html: 'Toronto'
                    },
                    {
                        xtype: 'panel',
                        html: 'New York'
                    },
                    {
                        xtype: 'container',
                        html: 'London'
                    },
                    {
                        xtype: 'panel',
                        html: 'Sydney'
                    }
                ]
            }
        ]

    }
});