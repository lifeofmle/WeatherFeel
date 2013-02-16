Ext.define('WeatherFeel.store.Cities', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherFeel.model.City',
        data: [
            { name: "Toronto", area: 'Canada', utcOffset: -5 },
            { name: "San Francisco", area: 'CA', utcOffset: -8 },
            { name: "New York", area: 'NY', utcOffset: -5 },
            { name: "London", area: 'UK', utcOffset: 0 },
            { name: "Sydney", area: 'Australia', utcOffset: 10 }
        ]
    }
});
