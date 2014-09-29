/// <reference path="../../../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />

var controllers = angular.module('shell.controllers', []);

import layoutController = require('./layout');
layoutController.init(controllers);

export = controllers;