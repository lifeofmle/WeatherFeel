Ext.define('WeatherFeel.store.Forecast', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherFeel.model.Forecast',
        data: [
            { day: 'Friday', low: 2, high: 2, description: 'Party cloudy'},
            { day: 'Saturday', low: 1, high: 2, description: 'Chances of rain 20%'},
            { day: 'Sunday', low: 3, high: 5, description: 'Sunny during the day'}
        ]
    }
});