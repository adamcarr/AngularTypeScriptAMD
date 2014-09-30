/// <reference path="../typings/tsd.d.ts" />

export interface IAngularApp extends ng.IModule {
    init?: () => void;
}