/*global WEO, Backbone, globalCount*/
WEO.Views.Header = Backbone.View.extend({
   tagname: "header",
   
   events: {
     "click .icon": "home",
     "click .hamburger": "dropdown"
   },
   
   home: function() {
     Backbone.history.navigate("", true);
   },
   
   dropdown: function() {
     //TODO
   }
});