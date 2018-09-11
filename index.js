const chalk = require("chalk");

const _logger = {
    dataMap: {},
    severity: 'none',
    message: '',
    config: {
        name: "cli",
        nameColor: chalk.bgBlue,
        defaultColor: chalk.white,
        successColor: chalk.green,
        errorColor: chalk.red,
        warnColor: chalk.keyword('orange'),
        infoColor: chalk.blue
    },
    logger: {
        success: (message) => {
            _logger.severity = 'success'
            _logger.message = message;
            return _logger;
        }
    },
    data: (key, value) => {
        _logger.dataMap[key] = value;
        return _logger;
    },
    success(text) {
        console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.successColor(text)}`);
    },
    error(text) {
        console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.errorColor(text)}`);
    },
    warn(text) {
        console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.warnColor(text)}`);
    },
    info(text) {
        console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.infoColor(text)}`);
    },
    write() {
        switch(_logger.severity) {
            case 'none':
                console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.defaultColor(_logger.message)}`);
                break;
            case 'success':
                console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.successColor(_logger.message)}`);
                Object.keys(_logger.dataMap).forEach(key => {
                    let value = _logger.dataMap[key];
                    const keyStr = key != null && typeof key === 'object' ? JSON.stringify(key) : (key != null ? key.toString() : "")
                    const valueStr = value != null && (typeof value === 'object') ? JSON.stringify(value) : (value != null ? value.toString() : "")
                    const padding = _logger.config.name.split("").map(_ => " ").join("");
                    const keyPadding = keyStr.split("").map(_ => " ").join("");
                    value = valueStr.split("").map(c => c === '\n' ? `\n${padding}${keyPadding}    `: c).join("");
                    console.log(`${padding} ${_logger.config.defaultColor(`${key} = ${value}`)}`)
                })
                break;
        }
    }
}

module.exports = _logger;