/// <reference path="../../../../typings/tsd.d.ts" />

export interface ILoggerService {
    $window: ng.IWindowService;
    log(messageGenerator: () => string): void;
}