const chalk = require("chalk");

const config = {
    name: "cli",
    nameColor: chalk.bgBlue,
    defaultColor: chalk.white,
    successColor: chalk.green,
    errorColor: chalk.red,
    warnColor: chalk.keyword('orange'),
    infoColor: chalk.blue
}

module.exports = config;