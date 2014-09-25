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
                    mainConfigFile: ['scripts/main.js'],
                    //                    mainConfigFile: "path/to/config.js",
                    //                    name: "path/to/almond", // assumes a production build using almond
                    name: 'main',
                    paths: {
                        requireLib: '../bower_components/requirejs/require'
                    },
                    include: [
                        'requireLib'
//                        'json'
                    ],
                    optimize: 'uglify2',
                    out: "dist/main.js"
                }
            }
        },

        ts: {
            // A specific target
            build: {
                // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
                src: ["scripts/**/*.ts"],
                // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support
                //html: ["test/work/**/*.tpl.html"],
                // If specified, generate this file that to can use for reference management
                //reference: "./test/reference.ts",
                //// If specified, generate an out.js file which is the merged js file
                //out: 'test/out.js',
                //// If specified, the generate JavaScript files are placed here. Only works if out is not specified
                //outDir: 'test/outputdirectory',
                // If specified, watches this directory for changes, and re-runs the current target
                //watch: 'test',
                // Use to override the default options, http://gruntjs.com/configuring-tasks#options
                options: {
                    // 'es3' (default) | 'es5'
                    target: 'es3',
                    // 'amd' (default) | 'commonjs'
                    module: 'amd',
                    // true (default) | false
                    sourceMap: true,
                    // true | false (default)
                    declaration: false,
                    // true (default) | false
                    removeComments: true
                },
            }
            // Another target
            //dist: {
            //    src: ["test/work/**/*.ts"],
            //    // Override the main options for this target
            //    options: {
            //        sourceMap: false,
            //    }
            //},
        }
    });

    grunt.registerTask('default', ['ts', 'requirejs']);
};