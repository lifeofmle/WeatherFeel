Ext.define('WeatherFeel.view.WeatherCity', {
    extend: 'Ext.Panel',
    xtype: 'weatherCity',
    config: {
        city: null
    },
    fullscreen: true,

    updateCity: function(city) {
        console.log('WeatherCity');
    }
});