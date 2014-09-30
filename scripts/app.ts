/// <reference path="../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />
/// <amd-dependency path="angular-resource" />
/// <amd-dependency path="angular-route" />
/// <amd-dependency path="./modules/core/index" />
/// <amd-dependency path="./modules/shell/index" />

import contracts = require('./contracts');

var app: contracts.IAngularApp = angular.module('app', ['ngResource', 'ngRoute', 'core', 'shell']);

angular.bootstrap(document, ['app']);
