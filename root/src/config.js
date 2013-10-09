require.config({
  baseUrl: "js",
  paths: {
    backbone: "../../bower_components/backbone/backbone",
    jquery: "../../bower_components/jquery/jquery",
    marionette: "../../bower_components/marionette/lib/backbone.marionette",
    requirejs: "../../bower_components/requirejs/require",
    underscore: "../../bower_components/underscore/underscore",
    handlebars: "../../bower_components/handlebars/handlebars",
    "handlebars.runtime": "../../bower_components/handlebars/handlebars.runtime"
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
})
