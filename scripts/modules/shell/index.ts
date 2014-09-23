/// <reference path="../../../typings/tsd.d.ts" />

declare var angular : ng.IAngularStatic;

import controllers = require('./controllers/index'); controllers;

var shell = angular.module('shell', ['shell.controllers']);

export = shell;

