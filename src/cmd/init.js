"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = require("chalk");
const path = require("path");
const prompts = require("prompts");
const init = require("../lib/init");
exports.command = 'init';
exports.summary = 'Create new project';
exports.options = [
    { name: 'force', alias: 'f', type: Boolean, description: 'Bypass project detail question' },
    { name: 'yes', alias: 'y', type: Boolean, description: 'Bypass confirmation' },
    { name: 'name', type: String, multiple: true, defaultOption: true, description: 'Project name' },
    { name: 'scope', type: String, description: 'Project scope' },
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.' },
];
exports.usage = [
    {
        content: exports.summary,
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
        optionList: exports.options,
    },
];
const opt = {
    onCancel: () => {
        console.log(`kontrak init ${chalk_1.default.yellow('canceled')}`);
        process.exit();
    },
};
function confim(scope, value, next) {
    const dirName = init.toProjectDir(scope);
    console.log(`About to write to ${path.resolve(dirName, 'kontrak.json')}`);
    console.log(JSON.stringify(value, null, 4));
    prompts({
        type: 'confirm',
        name: 'confirm',
        message: 'Is this OK?',
        initial: true,
    }, opt)
        .then(next)
        .catch((err) => { console.log(chalk_1.default.red(err.message)); });
}
function run(option) {
    function go(scope, value) {
        if (!option.yes) {
            confim(scope, value, (rsp) => {
                if (rsp.confirm) {
                    init.createProject(scope, value);
                    return;
                }
                console.log(`kontrak init ${chalk_1.default.yellow('canceled')}`);
            });
            return;
        }
        init.createProject(scope, value);
    }
    const projectName = path.basename(process.cwd());
    const v = init.parseName(option.name, option.scope);
    if (option.force) {
        go(v.scope, { name: v.name !== undefined ? v.name : projectName, description: '', author: '', keywords: [] });
        return;
    }
    const prompt = [
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
    prompts(prompt, opt).then((r) => {
        const _a = Object.assign({}, v, r), { scope } = _a, value = tslib_1.__rest(_a, ["scope"]);
        if (value.keywords.length === 1 && value.keywords[0] === '') {
            value.keywords = [];
        }
        go(scope, value);
    }).catch((err) => { console.log(chalk_1.default.red(err.message)); });
}
exports.run = run;
