/// <reference path="../../../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />

var controllers = angular.module('shell.controllers', ['core.services']);

import layout = require('./layout');
controllers.controller('layoutCtrl', ['$scope', 'core.services.logger', layout.controller]);

export = controllers;