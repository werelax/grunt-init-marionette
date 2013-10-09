"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON("package.json"),
    banner: "/* */",
    // Task configuration.
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        ignores: ["src/js/templates.js"]
      },
      all: ["Gruntfile.js", "src/js/**/*.js"]
    },
    bower: {
      target: {
        rjsConfig: "src/config.js",
        options: {
          baseUrl: "src/js",
          exclude: ["almond"]
        }
      },
    },
    handlebars: {
      compile: {
        options: {
          namespace: "JST",
          amd: true,
          processName: function(filePath) {
            return filePath.split("/templates/")[1].replace(".hbc", "");
          }
        },
        files: {
          "src/js/templates.js": "src/js/templates/**/*.hbc"
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          name: "app",
          mainConfigFile: "src/config.js",
          insertRequire: ["app"],
          out: "dist/js/app.js",
          optimize: "none"
        }
      }
    },
    concat: {
      options: {
        separator: ";",
      },
      ugly: {
        src: ["bower_components/almond/almond.js", "dist/js/dist.js"],
        dest: "dist/js/final.js"
      },
      plain: {
        src: ["bower_components/almond/almond.js", "dist/js/app.js"],
        dest: "dist/js/final.js"
      }
    },
    uglify: {
      all: {
        files: {
          "dist/js/final.js": ["dist/js/dist.js"]
        }
      }
    },
    clean: ["dist/js/dist.js", "dist/js/app.js"],
    watch: {
      templates: {
        files: ["src/js/templates/**/*.hbc"],
        tasks: ["handlebars"],
        options: {
          spawn: false
        }
      },
      jshint: {
        files: ["src/js/**/*.js"],
        tasks: ["jshint"],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-bower-requirejs");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["jshint", "bower", "handlebars", "requirejs", "concat:plain", "clean"]);
  grunt.registerTask("build", ["jshint", "bower", "handlebars", "requirejs", "concat:ugly", "uglify", "clean"]);

};
