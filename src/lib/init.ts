import chalk from 'chalk';
import * as fs from 'fs-extra';
import * as path from 'path';

export type NameResult = {
    name?: string;
    scope?: string;
    keywords?: string[];
};

export function toProjectDir(scope: string): string {
    return path.resolve(process.cwd(), scope || './');
}

export function parseName(names: string[], scope: string): NameResult {
    if (names && names.length) {
        if (names.length < 2) {
            return {
                name: path.basename(names[0]),
                scope: scope || names[0],
            };
        }
        if (names[1].includes('/')) {
            return {
                name: names[0],
                scope: scope || names[1],
            };
        }

        return {
            name: names[1],
            scope: scope || names[0],
        };
    }
    if (scope) {
        return {
            name: path.basename(scope),
            scope,
        };
    }

    return {};
}

export function createProject(scope: string, value: object): void {
    const dir = toProjectDir(scope);
    fs.ensureDir(dir, (err: Error) => {
        if (err) {
            console.log(chalk.red(err.message));

            return;
        }
        fs.writeFile(path.resolve(dir, 'kontrak.json'), JSON.stringify(value, null, 4), (werr: Error) => {
            if (werr) {
                console.log(chalk.red(werr.message));

                return;
            }

            console.log(chalk.bold('project initialized'));
            console.log(`project dir : ${dir}`);
        });
    });
}
