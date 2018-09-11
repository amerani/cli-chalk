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
        },
        error: (message) => {
            _logger.severity = 'error'
            _logger.message = message;
            return _logger;
        },
        warn: (message) => {
            _logger.severity = 'warn'
            _logger.message = message;
            return _logger;
        },
        info: (message) => {
            _logger.severity = 'info'
            _logger.message = message;
            return _logger;
        },                 
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
                Object.keys(_logger.dataMap).forEach(key => {
                    const leftPad = _logger.config.name.length;
                    const value = _logger.dataMap[key];
                    const output = buildKeyValueOutput(leftPad, key, value, _logger.config.defaultColor);
                    console.log(output)
                })
                break;
            case 'success':
                console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.successColor(_logger.message)}`);
                Object.keys(_logger.dataMap).forEach(key => {
                    const leftPad = _logger.config.name.length;
                    const value = _logger.dataMap[key];
                    const output = buildKeyValueOutput(leftPad, key, value, _logger.config.successColor);
                    console.log(output)
                })
                break;
            case 'error':
                console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.errorColor(_logger.message)}`);
                Object.keys(_logger.dataMap).forEach(key => {
                    const leftPad = _logger.config.name.length;
                    const value = _logger.dataMap[key];
                    const output = buildKeyValueOutput(leftPad, key, value, _logger.config.errorColor);
                    console.log(output)
                })
                break;
            case 'warn':
                console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.warnColor(_logger.message)}`);
                Object.keys(_logger.dataMap).forEach(key => {
                    const leftPad = _logger.config.name.length;
                    const value = _logger.dataMap[key];
                    const output = buildKeyValueOutput(leftPad, key, value, _logger.config.warnColor);
                    console.log(output)
                })
                break;
            case 'info':
                console.log(`${_logger.config.nameColor(_logger.config.name)} ${_logger.config.infoColor(_logger.message)}`);
                Object.keys(_logger.dataMap).forEach(key => {
                    const leftPad = _logger.config.name.length;
                    const value = _logger.dataMap[key];
                    const output = buildKeyValueOutput(leftPad, key, value, _logger.config.infoColor);
                    console.log(output)
                })
                break;                                                
        }
    }
}

function buildKeyValueOutput(leftPad, key, value, color) {
    const padding = Array.from({ length: leftPad + 1}).join(" ");
    const keyStr = key != null && typeof key === 'object' ? JSON.stringify(key) : (key != null ? key.toString() : "")
    const valueStr = value != null && (typeof value === 'object') ? JSON.stringify(value) : (value != null ? value.toString() : "")
    const keyPadding = keyStr.split("").map(_ => " ").join("");
    value = valueStr.split("").map(c => c === '\n' ? `\n${padding}${keyPadding}    `: c).join("");
    return `${padding} ${color(`${key} = ${value}`)}`;
}

module.exports = _logger;