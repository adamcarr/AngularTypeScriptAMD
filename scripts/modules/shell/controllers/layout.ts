/// <reference path="../../../../typings/tsd.d.ts" />

export interface ILayoutControllerScope extends ng.IScope {
    title?: string;
}

import coreServicesContracts = require('../../core/services/contracts');

export function controller($scope: ILayoutControllerScope, logger: coreServicesContracts.ILoggerService) {
    logger.log(() => {
        return 'Rendering layout controller';
    });
    $scope.title = 'Layout Controller!!';
};