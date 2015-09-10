WEO.Routers.App = Backbone.Router.extend({
    
    routes: {
      "" : "home"    
    },
    
    home : function () {

      this.Tiles = new WEO.Collections.Tiles(); //localize reference for perf
      this.TilesView = new WEO.Views.Tiles({collection: this.Tiles});
      
      
    }
});