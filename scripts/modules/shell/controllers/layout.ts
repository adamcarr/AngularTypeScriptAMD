/// <reference path="../../../../typings/tsd.d.ts" />

export interface ILayoutControllerScope extends ng.IScope {
    title?: string;
}

export function init(module: ng.IModule) {
    module.controller('layoutCtrl', ['$scope', function ($scope: ILayoutControllerScope) {
        $scope.title = 'Layout Controller';
    }]);
}