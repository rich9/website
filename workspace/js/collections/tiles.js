WEO.Collections.Tiles = new Backbone.Collection.extend( {
    model: WEO.Models.Tile,
    
    initialize: function() {
      this.models.add([
        {id: "Fishing"},
        {id: "Hunting"},
        {id: "Ammenities"},
        {id: "Attractions"},
        {id: "ParkInfo"},
        {id: "Comments"}
      ]);
    },
});