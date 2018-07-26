import {fork} from 'child_process';

export function runner(args: string[]) {
    return new Promise((resolve: (value?: Object | string | number) => void) => {
        const cp = fork(
            require.resolve('../../src/main.ts'),
            args,
            {
                cwd: process.cwd(),
                silent: true,
                execArgv: ['-r', 'ts-node/register'],
            },
        );

        //let ste = '';
        let sto = '';
        cp.on('exit', (code: number) => resolve({code, sto: sto.trim()}));
        //cp.on('close', (code: number) => resolve({code, sto: sto.trim(), ste: ste.trim()}));

        cp.stdout.on('data', (data: string) => {
            sto += `${data}\n`;
        });
        // cp.stderr.on('data', (data: string) => {
        //     ste += `${data}\n`;
        // });
    });
}
