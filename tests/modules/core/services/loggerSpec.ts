/// <reference path="../../../../typings/tsd.d.ts" />

import Logger = require('../../../../scripts/modules/core/services/logger');

describe('core.services.logger', () => {
    it('should assign provided window service to $window property', () => {
        var $window = {};

        var logger = new Logger(<any>$window);

        expect(logger.$window).toBe($window);
    });

    it('should call $window.console.log with the value returned by the method passed to logger.log', () => {
        var $window = {
            console: {
                log: jasmine.createSpy('log')
            }
        };
        var message = 'test', messageGenerator = () => message;

        var logger = new Logger(<any>$window);
        logger.log(messageGenerator);

        expect($window.console.log).toHaveBeenCalledWith(message);
    });
});