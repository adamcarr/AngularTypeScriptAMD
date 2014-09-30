/// <reference path="../../../../typings/tsd.d.ts" />

import layout = require('../../../../scripts/modules/shell/controllers/layout');

describe('Testing out the layout controller', () => {
    it('should set title on scope', () => {
        var scope = {};

        var logger = {
            log: jasmine.createSpy('log')
        };

        layout.controller(<any>scope, <any>logger);

        expect((<any>scope).title).toBeDefined();
        expect((<any>scope).title).toEqual('Layout Controller!!');

        expect(logger.log).toHaveBeenCalled();
    });
});