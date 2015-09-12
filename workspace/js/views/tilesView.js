/*global WEO, Backbone, _, globalCount*/
WEO.Views.Tiles = Backbone.View.extend({
    collection: WEO.Collections.Tiles,
    
    tagName: "div",
    
    template: _.template("Hello World!"),
    
    initialize: function() {      
      console.log(++globalCount +"  6");
      this.listenTo(this.collection, "reset", this.render()); 
    },
    
    render: function() {
        this.$el.append(this.template());
        return this;
    }
    
});