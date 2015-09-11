WEO.Routers.App = Backbone.Router.extend({
    
    routes: {
      "" : "home"    
    },
    
    Tiles: WEO.Collections.Tiles,
    
    home : function () {
      // alert();
      console.log(++globalCount +"  3");
      this.Tiles = new WEO.Collections.Tiles(); //localize reference for perf
      console.log(++globalCount +"  5");
      this.TilesView = new WEO.Views.Tiles({collection: this.Tiles});
    }
});