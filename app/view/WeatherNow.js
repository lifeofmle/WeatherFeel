Ext.define('WeatherFeel.view.WeatherNow', {
    extend: 'Ext.Container',
    xtype: 'weatherNow',
    config: {
        city: null
    },
    fullscreen: true,
    layout: 'vbox',

    updateCity: function(city) {
        console.log('WeatherNow');
    }
});