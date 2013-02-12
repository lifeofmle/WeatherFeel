Ext.define('WeatherFeel.view.Settings', {
    xtype: 'settingsView',
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    config: {
        scrollable: 'vertical',
        items: [
            { xtype: "fieldset",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        label: 'Title',
                        required: true
                    },
                    {
                        xtype: 'textareafield',
                        name: 'narrative',
                        label: 'Narrative'
                    }
                ]
            }
        ]
    }
});