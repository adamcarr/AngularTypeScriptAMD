/// <reference path="../../../../../typings/tsd.d.ts" />

declare var currentTime: any;

import coreServicesContracts = require('../../../core/services/contracts');

import ICurrentTimeScope = require('./ICurrentTimeScope');

class CurrentTime {
    public static directiveName = 'currentTime';

    public static create(): ng.IDirective {
        return {
            restrict: "A",
            template: '<span>{{currentTime | date:\'medium\'}}</span>',
            replace: true,
            controller: ['$scope', '$element', '$attrs', 'core.services.logger', '$interval', CurrentTime]
        };
    }

    constructor($scope: ICurrentTimeScope, $element: ng.IRootElementService, $attrs: ng.IAttributes, loggerService: coreServicesContracts.ILoggerService, $interval: ng.IIntervalService) {
        loggerService.log(() => 'Creating new shell.directives.currentTime directive controller.');

        $interval(() => {
            $scope.currentTime = new Date();
        }, 500);
    }
}

export = CurrentTime;