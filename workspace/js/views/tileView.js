WEO.Views.Tile = Backbone.View.extend({
    tagname: "article",
    model: WEO.Models.Tile,
    
    template: _.template("hello world"),
    
    initialize: function() {
        this.listenTo(this.model, "reset", this.render);
    },
    
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});