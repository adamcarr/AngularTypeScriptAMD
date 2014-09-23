/// <reference path="../../../../typings/tsd.d.ts" />

declare var angular : ng.IAngularStatic;

var controllers = angular.module('shell.controllers', []);

import layoutController = require('./layout');
layoutController.init(controllers);

export = controllers;