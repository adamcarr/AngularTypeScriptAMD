/// <reference path="../typings/tsd.d.ts" />

declare var angular : ng.IAngularStatic;

export interface IAngularApp extends ng.IModule {
    init?: () => void;
}