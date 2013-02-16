Ext.define('WeatherFeel.model.City', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'name',
        fields: [
            { name: 'name', type: 'string' },
            { name: 'area', type: 'string' },
            { name: 'timezone', type: 'string' },
            { name: 'utcOffset', type: 'int' }
        ]
//        proxy: {
//            type: 'jsonp',
//            url : 'http://api.wunderground.com/api/98eae93fbe9acf44/conditions/q/{area}/{name}.json',
//            reader: {
//                type: 'json'
//            }
//        }
    }
});
