/// <reference path="../../../../typings/tsd.d.ts" />
/// <amd-dependency path="angular" />

var services = angular.module('core.services', []);

import logger = require('./logger');
services.service('core.services.logger', ['$window', logger]);

export = services;