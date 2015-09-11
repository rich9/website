WEO.Routers.App = Backbone.Router.extend({
    
    routes: {
      "" : "home"    
    },
    
    home : function() {
      // alert();
      console.log(++globalCount +"  3");
      this.Tile = new WEO.Models.Tile();
      this.Tiles = new WEO.Collections.Tiles({model: this.Tile}); //localize reference for perf
      
      console.log(++globalCount +"  5");
      this.TilesView = new WEO.Views.Tiles({collection: this.Tiles});
    },
    
    getTiles : function() {
      return Tiles;
    }
});


      (function () {
        // alert();
        console.log(++globalCount+"  2");
        new WEO.Routers.App();
        Backbone.history.start();
      }) ();