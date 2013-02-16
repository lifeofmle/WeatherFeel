Ext.define('WeatherFeel.store.Hourly', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherFeel.model.Hourly',
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
            { hour: '6pm', temp: 2}
        ]
    }
});