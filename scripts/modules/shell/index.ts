/// <reference path="../../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />
/// <amd-dependency path="./controllers/index" />
/// <amd-dependency path="./directives/index" />

var shell = angular.module('shell', ['core', 'shell.controllers', 'shell.directives']);

export = shell;

