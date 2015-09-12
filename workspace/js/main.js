/*global WEO, Backbone, globalCount*/
(function() {
  
  globalCount = 0;
  
  //create global variable `WEO` for namespacing
  WEO = {
    Models: {},
    Collections: {},
    Views: {},
    Controllers: {},
    Routers: {},
    Templates: {}
  };

  console.log(++globalCount+"  1");
  
}) ();