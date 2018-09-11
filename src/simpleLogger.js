function logger(config) {
    return {
        success(text) {
            console.log(`${config.nameColor(config.name)} ${config.successColor(text)}`);
        },
        error(text) {
            console.log(`${config.nameColor(config.name)} ${config.errorColor(text)}`);
        },
        warn(text) {
            console.log(`${config.nameColor(config.name)} ${config.warnColor(text)}`);
        },
        info(text) {
            console.log(`${config.nameColor(config.name)} ${config.infoColor(text)}`);
        },        
    }
}

module.exports = logger;