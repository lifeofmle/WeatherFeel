Ext.define('WeatherFeel.view.Main', {
    extend: "Ext.navigation.View",
    xtype: "mainView",
    requires: [
        'WeatherFeel.view.Weather',
        'WeatherFeel.view.Settings'
    ],
    config:{
        fullscreen: true,
        navigationBar:{
          hidden: true
        },
        items:
          {
              xtype: "settingsView"
          },
      listeners: [{
          delegate: "#btnSettings",
          event: "tap",
          fn: "onBtnSettingsTap"
      }]
    },
    onBtnSettingsTap: function(){
        this.fireEvent("openSettingsCommand", this);
    }
});