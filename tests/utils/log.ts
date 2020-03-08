import chalk from 'chalk';
const log = console.log;

export default {
    warn: function(...args: any[]) {
        log(chalk.bgYellow.white(...args));
    },
    info: function(...args: any[]) {
        log(chalk.bgCyan.white(...args));
    },
    error: function(...args: any[]) {
        log(chalk.bgRed.white(...args));
    },
};
