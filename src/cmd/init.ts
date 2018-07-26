import chalk from 'chalk';
import * as path from 'path';

import prompts = require('prompts');

import * as helper from '../helper';
import * as init from '../lib/init';

export const command = 'init';
export const summary = 'Create new project';
export const options = [
    { name: 'force', alias: 'f', type: Boolean, description: 'Bypass project detail question'},
    { name: 'yes', alias: 'y', type: Boolean, description: 'Bypass confirmation' },
    { name: 'name', type: String, multiple: true, defaultOption: true, description: 'Project name'},
    { name: 'scope', type: String, description: 'Project scope'},
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'},
];

export const usage = [
    {
        content: summary,
    },
    {
        header: 'Synopsis',
        content: [
            '$ kontrak init',
            '$ kontrak init <name> [<scope>]',
            '$ kontrak init <name> [--force|-f|--yes|-y]',
        ],
    },
    {
        header: 'Options',
        optionList: options,
    },
];

const opt = {
    onCancel: () => {
        console.log(`kontrak init ${chalk.yellow('canceled')}`);
        process.exit();
    },
};

function confim(scope: string, value: object, next: (value?: object) => void): void {
    const dirName = init.toProjectDir(scope);
    console.log(`About to write to ${path.resolve(dirName, 'kontrak.json')}`);
    console.log(JSON.stringify(value, null, 4));
    prompts({
                type: 'confirm',
                name: 'confirm',
                message: 'Is this OK?',
                initial: true,
            },
            opt)
            .then(next)
            .catch((err: Error) => {console.log(chalk.red(err.message)); });
}

export function run(option: helper.CommandLineOptions) {
    function go(scope: string, value: object): void {
        if (!option.yes) {
            confim(scope, value, (rsp: {confirm?: boolean}) => {
                if (rsp.confirm) {
                    init.createProject(scope, value);

                    return;
                }
                console.log(`kontrak init ${chalk.yellow('canceled')}`);
            });

            return;
        }
        init.createProject(scope, value);
    }
    const projectName = path.basename(process.cwd());
    const v: init.NameResult = init.parseName(option.name, option.scope);

    if (option.force) {
        go(v.scope, {name: v.name !== undefined ? v.name : projectName, description: '', author: '', keywords: []});

        return;
    }
    const prompt : Prompt.PromptParameter[] = [
        {
            type: 'text',
            name: 'description',
            message: 'Desciption:',
        },
        {
            type: 'text',
            name: 'author',
            message: 'Author:',
        },
        {
            type: 'list',
            name: 'keywords',
            message: 'Keywords (comma separator):',
            separator: ',',
        },
    ];
    if (!v.name) {
        prompt.unshift({
            type: 'text',
            name: 'name',
            message: 'Project Name:',
            initial: projectName,
        });
    }

    prompts(prompt, opt).then((r: Object) => {
        const {scope, ...value} = {...v, ...r};
        if (value.keywords.length === 1 && value.keywords[0] === '') {
            value.keywords = [];
        }
        go(scope, value);
    }).catch((err: Error) => {console.log(chalk.red(err.message)); });
}
