Ext.define('WeatherFeel.store.Cities', {
    extend: 'Ext.data.Store',

    config: {
        model: 'WeatherFeel.model.City',
        data: [
            { name: "Toronto", area: 'Canada' },
            { name: "San Francisco", area: 'CA' },
            { name: "New York", area: 'NY' },
            { name: "London", area: 'UK' },
            { name: "Hong Kong", area: 'China' },
            { name: "Sydney", area: 'Australia' }
        ]
    }
});
