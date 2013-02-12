Ext.define('Sencha.store.Cities', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Sencha.model.City',
        data: [
            { name: "London" },
            { name: "Toronto" },
            { name: "Sydney" }
        ]
    }
});
