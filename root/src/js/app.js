define(["marionette", "backbone", "jquery"], function(Marionette, Backbone, $) {
  "use strict";

  var App = new Marionette.Application();

  App.addRegions({
    header: "#header",
    main: "#main",
    sidebar: "#sidebar"
  });

  App.on("initialize:after", function() {
    Backbone.history.start();
    console.log(" --> App ready");
  });

  $(App.start.bind(App));

  return App;
});
