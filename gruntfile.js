module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-template-jasmine-requirejs'] // do not load grunt-template-jasmine-requirejs by default
    });

    var watchPort = 35729;

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
                    out: "bin/main.js",
                    preserveLicenseComments: false,
                    generateSourceMaps: true
                }
            }
        },


        ts: {
            // A specific target
            build: {
                src: ["scripts/**/*.ts"],
                outDir: 'dist/js/',
                html: 'scripts/**/*.html',
                options: {
                    target: 'es3',          // 'es3' (default) | 'es5'
                    module: 'amd',          // 'amd' (default) | 'commonjs'
                    sourceMap: true,        // true (default) | false
                    declaration: false,     // true | false (default)
                    removeComments: true    // true (default) | false
                }
            },
            test: {
                src: ["tests/**/*.ts"],
                outDir: 'testOutput/',
                options: {
                    target: 'es3',          // 'es3' (default) | 'es5'
                    module: 'amd',          // 'amd' (default) | 'commonjs'
                    sourceMap: true,        // true (default) | false
                    declaration: false,     // true | false (default)
                    removeComments: true    // true (default) | false
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
                    specs: 'testOutput/**/*Spec.js',
                    outfile: 'testOutput/_SpecRunner.html',
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