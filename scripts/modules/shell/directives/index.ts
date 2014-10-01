/// <reference path="../../../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />

var directives = angular.module('shell.directives', ['core.services']);

import CurrentTime = require('./currentTime/currentTime');
directives.directive(CurrentTime.directiveName, [CurrentTime.create])

export = directives;