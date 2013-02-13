Ext.define('WeatherFeel.model.City', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'area', 'timezone', 'local_epoch']
    }
});
