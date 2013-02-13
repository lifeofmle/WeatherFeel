Ext.define('WeatherFeel.view.Weather', {
    extend: 'Ext.Panel',
    xtype: 'weatherView',
    requires:['Ext.data.proxy.JsonP'],
    config: {
        city: null
    },


    updateCity: function(city) {
        this.onPopulateCity(city);
    },

    onPopulateCity: function(city){

        var cityName = city.get('name');
        var area = city.get('area');

//        Ext.util.JSONP.request({
//            url: 'http://api.wunderground.com/api/98eae93fbe9acf44/conditions/q/'+ area +'/'+ cityName +'.json',
//            callbackKey: 'callback',
//            scope: this,
//            callback: function(successful, data) {
//                console.log( data );
//            }
//        });

        // This is temporarily because this won't work in March 2013
//        Ext.util.JSONP.request({
//            url: 'https://search.twitter.com/search.json?q=Weather%20'+ cityName,
//            callbackKey: 'callback',
//            scope: this,
//            callback: function(successful, data) {
//                console.log(data);
//            }
//        });

        this.setHtml(city.get('name'));
    }
});