Ext.define('WeatherFeel.controller.WeatherController', {
    extend: 'Ext.app.Controller',
    requires:['Ext.data.proxy.JsonP'],
    config: {
        refs: {
            mainView: "mainView",
            settingsView: {
                selector: 'settingsView',
                xtype: "settingsView",
                autoCreate: true
            }
        },
        
        control: {
            mainView: {
                openSettingsCommand: "onSettingsCommand"
            }
        }
    },
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },

    onSettingsCommand: function() {
        console.log("Opening settings...");

        var settingsView = this.getSettingsView();

        this.onRefreshData();

        Ext.Viewport.animateActiveItem(settingsView, this.slideRightTransition);
    },
    onRefreshData: function(){

        Ext.util.JSONP.request({
            url: 'http://api.wunderground.com/api/98eae93fbe9acf44/conditions/q/UK/London.json',
            callbackKey: 'callback',
            scope: this,
            callback: function(successful, data) {
                console.log( data );
            }
        });

        // This is temporarily because this won't work in March 2013
        Ext.util.JSONP.request({
            url: 'https://search.twitter.com/search.json?q=Weather%20Toronto',
            callbackKey: 'callback',
            scope: this,
            callback: function(successful, data) {
                console.log(data);
            }

        });
    },

    // Base classes
    launch: function () {
        this.callParent(arguments);
        console.log("launch");
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});