Ext.define('WeatherFeel.model.Forecast', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'day', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'low', type: 'double' },
            { name: 'high', type: 'double' }
        ]
    }
});