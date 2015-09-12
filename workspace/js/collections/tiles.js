/*global WEO, Backbone, globalCount*/
WEO.Collections.Tiles = Backbone.Collection.extend( {
    model: WEO.Models.Tile,
    
    initialize: function() {
      console.log(++globalCount+"  4");
    },

});