const defaultConfig = require("./config");
const simpleLogger = require("./simpleLogger");
const dataOutputBuilder = require("./dataOutputBuilder");

function fluentLogger() {
    const config = {
        ...defaultConfig
    };
    const dataMap = {};
    let _message = "";
    let _severity = "none";

    const setMessage = (severity, message) => {
        _severity = severity;
        _message = message;
        return lib;
    }

    const setData = (key, value) => {
        dataMap[key] = value;
        return lib;
    }

    const name = () => config.nameColor(config.name);

    const color = () => ({
        'success': config.successColor,
        'error': config.errorColor,
        'warn': config.warnColor,
        'info': config.infoColor
    })

    const writeMessage = () => {
        console.log(`${name()} ${color()[_severity](_message)}`);
    }

    const writeData = (key) => {
        const leftPad = config.name.length;
        const output = dataOutputBuilder(
            leftPad,
            key,
            dataMap[key],
            color()[_severity]
        );
        console.log(output);
    }

    const lib = {
        config,
        logger: {
            success: (message) => setMessage('success', message),
            error: (message) => setMessage('error', message),
            warn: (message) => setMessage('warn', message),
            info: (message) => setMessage('info', message),
        },
        data: (key, value) => setData(key, value),
        write: () => {
            writeMessage();
            Object.keys(dataMap).forEach(key => {
                writeData(key);
            })
        }
    }

    return {
        ...simpleLogger(config),
        ...lib,
    };
}

module.exports = fluentLogger();