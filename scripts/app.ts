/// <reference path="../typings/tsd.d.ts" />

declare var angular : ng.IAngularStatic;

import shell = require('./modules/shell/index'); shell;
import contracts = require('./contracts');

var app: contracts.IAngularApp = angular.module('app', ['ngResource', 'ngRoute', 'shell']);

angular.bootstrap(document, ['app']);
