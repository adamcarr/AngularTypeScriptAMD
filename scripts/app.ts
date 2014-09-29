/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-resource" />
/// <amd-dependency path="angular-route" />

import shell = require('./modules/shell/index'); shell;
import contracts = require('./contracts');

var app: contracts.IAngularApp = angular.module('app', ['ngResource', 'ngRoute', 'shell']);

angular.bootstrap(document, ['app']);
