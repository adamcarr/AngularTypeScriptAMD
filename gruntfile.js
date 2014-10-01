module.exports = function (grunt) {
    // load tasks
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-requirejs']
    });


    var watchPort = 35729;

    // Configure grunt here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: watchPort
            },
            typescript: {
                files: ['scripts/**/*.ts'],
                tasks: ['ts:build']
            },
            ejs: {
                files: ['./*.ejs'],
                tasks: ['ejs:watch']
            }
        },

        requirejs: {
            compile: {
                options: {
                    baseUrl: "dist/js",
                    mainConfigFile: ['dist/js/main.js'],
                    //                    mainConfigFile: "path/to/config.js",
                    //                    name: "path/to/almond", // assumes a production build using almond
                    name: 'main',
                    paths: {
                        requireLib: '../../lib/requirejs/require',
                        'angular': 'empty:',
                        'angular-route': 'empty:',
                        'angular-resource': 'empty:'
                    },
                    include: [
                        'requireLib'
                    ],
                    optimize: 'uglify2',
                    out: "bin/main.js"
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
                outDir: 'dist/js/',
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
                }
            },
            test: {
                // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
                src: ["tests/**/*.ts"],
                // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support
                //html: ["test/work/**/*.tpl.html"],
                // If specified, generate this file that to can use for reference management
                //reference: "./test/reference.ts",
                //// If specified, generate an out.js file which is the merged js file
                //out: 'test/out.js',
                //// If specified, the generate JavaScript files are placed here. Only works if out is not specified
                outDir: 'testOut/',
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
                }
            }
        },
        ejs: {
            watch: {
                expand: true,
                flatten: true,
                src: './*.ejs',
                dest: './dist/',
                ext: '.html',
                options: {
                    watch: watchPort,
                    prod: false
                }
            },
            prod: {
                expand: true,
                flatten: true,
                src: './*.ejs',
                dest: './bin/',
                ext: '.html',
                options: {
                    watch: false,
                    prod: true
                }
            },
            nowatch: {
                expand: true,
                flatten: true,
                src: './*.ejs',
                dest: './dist/',
                ext: '.html',
                options: {
                    watch: false,
                    prod: false
                }
            }
        },


        bower: {
            install: {
                options: {
                    cleanup: true,
                    targetDir: './lib'
                }
            }
        },


        copy: {
            libjs: {
                expand: true,
                flatten: false,
                cwd: './lib',
                src: [
                    '**'
                ],
                dest: './dist/js/lib/'
            }
        },


        jasmine: {
            tests: {
                options: {
                    specs: 'testOut/**/*Spec.js',
                    outfile: 'testOut/_SpecRunner.html',
                    keepRunner: true,
                    vendor: 'lib/*',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: ''
                        }
                   }
                }
            }
        }
    });

    grunt.registerTask('default', ['ts:build', 'copy', 'ejs:watch', 'watch']);
    grunt.registerTask('dist:nowatch', ['ts:build', 'copy', 'ejs:nowatch'])
    grunt.registerTask('prod', ['ts:build', 'copy', 'requirejs', 'ejs:prod']);
    grunt.registerTask('install', ['bower']);
    grunt.registerTask('test', ['ts:test', 'jasmine']);
};