WEO.Views.Page = Backbone.View.extend({
   tagName: "div",
   model: WEO.Models.Page,
   
   template: _.template("hello Page"),
   
   initialize: function() {
       this.listenTo(this.model, "reset", this.render);
   },
   
   render: function() {
       this.$el.append(this.template());
   }
});