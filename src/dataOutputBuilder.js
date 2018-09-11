function builder(leftPad, key, value, color) {
    const padding = Array.from({ length: leftPad + 1}).join(" ");
    const keyStr = key != null && typeof key === 'object' ? JSON.stringify(key) : (key != null ? key.toString() : "")
    const valueStr = value != null && (typeof value === 'object') ? JSON.stringify(value) : (value != null ? value.toString() : "")
    const keyPadding = keyStr.split("").map(_ => " ").join("");
    value = valueStr.split("").map(c => c === '\n' ? `\n${padding}${keyPadding}    `: c).join("");
    return `${padding} ${color(`${key} = ${value}`)}`;
}

module.exports = builder;