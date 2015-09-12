/*global WEO, Backbone, globalCount*/
WEO.Routers.App = Backbone.Router.extend({
    
    routes : {
      "" : "home"    
    },
    
    home : function() {
      // alert();
      console.log(++globalCount +"  3");
      this.Tile = new WEO.Models.Tile();
      this.Tiles = new WEO.Collections.Tiles(
        [{id: "Fishing"},
        {id: "Hunting"},
        {id: "Ammenities"},
        {id: "Attractions"},
        {id: "ParkInfo"},
        {id: "Comments"}]
      );
      console.log(++globalCount +"  5");
      console.log(WEO.Views);
      this.TilesView = new WEO.Views.Tiles({collection: this.Tiles});
      $(".container").html(this.TilesView.el);
    },
    
    getTiles : function() {
      return this.Tiles;
    }
});


      (function () {
        // alert();
        console.log(++globalCount+"  2");
        new WEO.Routers.App();
        Backbone.history.start();
      }) ();