Ext.define('WeatherFeel.view.WeatherForecast', {
    extend: 'Ext.Container',
    xtype: 'weatherForecast',
    config: {
        city: null
    },
    fullscreen: true,
    layout: 'vbox',

    updateCity: function(city) {
        console.log('WeatherForecast');
    }
});