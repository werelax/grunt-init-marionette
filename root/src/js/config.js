require.config({
  paths: {
  },
  shim: {
    jquery: {
      exports: "jQuery"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: [
        "jquery",
        "underscore"
      ],
      exports: "Backbone"
    },
    marionette: {
      deps: [
        "jquery",
        "underscore",
        "backbone"
      ],
      exports: "Marionette"
    },
    handlebars: {
      exports: "Handlebars"
    }
  }
});

/* Require the initial module */
require(["app"], function() {
  "use strict";
});
