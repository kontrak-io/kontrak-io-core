import * as importCommand from './cmd/import';
import * as initCommand from './cmd/init';
import * as platformCommand from './cmd/platform';

import * as helper from './helper';

export const commands: helper.Command[] = [
    initCommand,
    importCommand,
    platformCommand,
];
