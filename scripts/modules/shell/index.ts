/// <reference path="../../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />

import controllers = require('./controllers/index'); controllers;

var shell = angular.module('shell', ['shell.controllers']);

export = shell;

