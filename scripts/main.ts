/// <reference path="../typings/tsd.d.ts" />

declare var requirejs: any;

requirejs.config({
    baseUrl: 'js',
    paths: {
        'angular': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular',
        'angular-resource': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-resource',
        'angular-route': '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular-route'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-route': ['angular'],
        'angular-resource': ['angular']
    },
    priority: [
        'angular'
    ]
});

requirejs(['angular', 'angular-route', 'angular-resource', 'app'], function(){
});