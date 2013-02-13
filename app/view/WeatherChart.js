Ext.define('WeatherFeel.view.WeatherChart', {
    extend: 'Ext.Container',
    xtype: 'weatherChart',
    config: {
        city: null
    },
    fullscreen: true,
    layout: 'vbox',

    updateCity: function(city) {
        console.log('WeatherChart');
    }
});