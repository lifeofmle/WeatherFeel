//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'WeatherFeel': 'app'
});
//</debug>

Ext.application({
    name: 'WeatherFeel',

    requires: ['Ext.MessageBox','Ext.List', 'Ext.carousel.Carousel'],

    controllers: ['WeatherController'],
    models: ['City'],
    stores: ['Cities'],
    views: ['Main','Weather'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        console.log('App launched');

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Create carousel
        var carousel = Ext.create('Ext.Carousel', {
            store: 'Cities',
            direction: 'horizontal'
        });

        Ext.Viewport.add(carousel);

        // Create main list at start
        var list = Ext.create('Ext.List',{
            store: 'Cities',
            itemTpl: '{name}, {area}',
            store: 'Cities',
            scrollable: true,
            listeners:{
                itemtap: function(item, index){
                    console.log('tapped'+ index);
                    carousel.setActiveItem(index+1);
                }
            }
        });

        Ext.getStore('Cities').load(function(cities) {
            var items = [];

            items.push(list);

            Ext.each(cities, function(city) {
                items.push({
                    xtype: 'weatherView',
                    city: city
                });
            });

            carousel.setItems(items);

            carousel.setActiveItem(0);
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
