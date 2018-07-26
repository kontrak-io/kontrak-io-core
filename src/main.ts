import * as defaultCommand from './cmd/default';

import {commands} from './commands';
import {parser} from './lib/command-parser';

parser(commands, defaultCommand);
