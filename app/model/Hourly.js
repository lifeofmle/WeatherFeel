Ext.define('WeatherFeel.model.Hourly', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'temp', type: 'double' },
            { name: 'hour', type: 'string' }
        ]
    }
});