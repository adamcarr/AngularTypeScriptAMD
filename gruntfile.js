module.exports = function (grunt) {
    // load tasks
    require('load-grunt-tasks')(grunt);

    // Configure grunt here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        BASE_PATH: './',
        DIST_PATH: './dist/',

        requirejs: {
            compile: {
                options: {
                    baseUrl: "scripts",
                    mainConfigFile : ['scripts/main.js'],
//                    mainConfigFile: "path/to/config.js",
//                    name: "path/to/almond", // assumes a production build using almond
                    name: 'main',
                    paths : {
                        requireLib : '../bower_components/requirejs/require'
                    },
                    include : [
                        'requireLib'
//                        'json'
                    ],
                    optimize : 'uglify2',
                    out: "dist/main.js"
                }
            }
        }
    });

    grunt.registerTask('default', ['requirejs']);
};