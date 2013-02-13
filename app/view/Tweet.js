Ext.define('WeatherFeel.view.Weather', {
    extend: 'Ext.Panel',
    xtype: 'tweetView',
    requires:['Ext.data.proxy.JsonP'],
    config: {
        tweet: null
    },

    updateTweet: function(item) {

        this.setHtml();
    }
});