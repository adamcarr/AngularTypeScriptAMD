/// <reference path="../typings/tsd.d.ts" />

declare var requirejs: any;

requirejs.config({
    baseUrl: 'scripts',
    paths: {
    },
    shim: {
    }
});

requirejs(['app'], function(){

});