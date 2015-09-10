WEO.Views.Tiles = Backbone.View.extend({
    collection: WEO.Collections.Tiles,
    
    tagname: "div",
    
    template: _.template(this.collection.toJSON()),
    
    initialize: function() {
      this.listenTo(this.collection, "reset", this.render()); 
    },
    
    render: function() {
        this.$el.append(this.template());
        return this;
    }
    
});