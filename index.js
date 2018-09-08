const chalk = require("chalk");

const logger = {
    config: {
        name: "cli",
        nameColor: chalk.bgBlue,
        successColor: chalk.green,
        errorColor: chalk.red,
        warnColor: chalk.keyword('orange'),
        infoColor: chalk.blue
    },
    success(text) {
        console.log(`${this.config.nameColor(this.config.name)} ${this.config.successColor(text)}`);
    },
    error(text) {
        console.log(`${this.config.nameColor(this.config.name)} ${this.config.errorColor(text)}`);
    },
    warn(text) {
        console.log(`${this.config.nameColor(this.config.name)} ${this.config.warnColor(text)}`);
    },
    info(text) {
        console.log(`${this.config.nameColor(this.config.name)} ${this.config.infoColor(text)}`);
    }
}

module.exports = logger;