import {runner} from './lib/tester';

type RunnerResult = {
    code?: number;
    sto?: string;
    ste?: string;
};

describe('general', () => {
    it('kontrak -v', () => {
        return runner(['-v']).then(({code, sto}: RunnerResult) => {
            expect(code).toBe(0);
            expect(sto).toBe('kontrak v 1.0.0');
            //expect(ste).toBe('');
        });
    });
});
