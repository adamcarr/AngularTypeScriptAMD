/// <reference path="../../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />
/// <amd-dependency path="./controllers/index" />

var shell = angular.module('shell', ['shell.controllers']);

export = shell;

