Ext.define('WeatherFeel.view.Main', {
    extend: "Ext.navigation.View",
    xtype: "mainView",
    requires: [
        'WeatherFeel.view.Weather',
        'WeatherFeel.view.Settings'
    ],
    config:{
        fullscreen: true,
        navigationBar: {
            items: [
                {
                    itemId: "btnSettings",
                    xtype: 'button',
                    iconCls: 'settings',
                    iconMask: true,
                    align: 'right',
                    ui: 'action'
                }
            ]
        },
        items:
          {
              xtype: "weatherView"
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