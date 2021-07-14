'use strict';

const chalk = require('chalk');
const pjson = require('../package.json');

console.log(chalk.hex('#f26135')(`

 _______                   __           __ __
|     __|.---.-.--.--.    |  |--.-----.|  |  |.-----.
|__     ||  _  |  |  |    |     |  -__||  |  ||  _  |
|_______||___._|___  |    |__|__|_____||__|__||_____|
               |_____|
 __              _______                    __
|  |_.-----.    |   _   |.--.--.----.-----.|  |
|   _|  _  |    |       ||  |  |   _|  _  ||__|
|____|_____|    |___|___||_____|__| |_____||__|


╭ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ──────────────────────────────╮

        Thanks for installing the latest version
                of `) + chalk.hex('#ffd200').bold(`auro-radio v${pjson.version}.`) + chalk.hex('#f26135')(`

            `) + chalk.hex('#ffd200').bold(`!!!! DEPRECATION ALERT !!!!`) + chalk.hex('#f26135')(`
              `) + chalk.hex('#ffd200').bold(`@alaskaairux/auro-radio`) + chalk.hex('#f26135')(`
    will be relocated to `) + chalk.hex('#ffd200').bold(`@aurodesignsystem/auro-radio`) + chalk.hex('#f26135')(`
              with the next major release.

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`)
);
