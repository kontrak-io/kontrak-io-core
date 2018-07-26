"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const fs = require("fs-extra");
const path = require("path");
function toProjectDir(scope) {
    return path.resolve(process.cwd(), scope || './');
}
exports.toProjectDir = toProjectDir;
function parseName(names, scope) {
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
exports.parseName = parseName;
function createProject(scope, value) {
    const dir = toProjectDir(scope);
    fs.ensureDir(dir, (err) => {
        if (err) {
            console.log(chalk_1.default.red(err.message));
            return;
        }
        fs.writeFile(path.resolve(dir, 'kontrak.json'), JSON.stringify(value, null, 4), (werr) => {
            if (werr) {
                console.log(chalk_1.default.red(werr.message));
                return;
            }
            console.log(chalk_1.default.bold('project initialized'));
            console.log(`project dir : ${dir}`);
        });
    });
}
exports.createProject = createProject;
