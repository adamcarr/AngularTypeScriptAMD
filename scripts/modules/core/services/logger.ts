/// <reference path="../../../../typings/tsd.d.ts" />

import contracts = require('./contracts');

class LoggerService implements contracts.ILoggerService {
    constructor(public $window: ng.IWindowService) {
    }

    public log(messageGenerator: () => string): void {
        this.$window.console.log(messageGenerator());
    }
}

export = LoggerService;