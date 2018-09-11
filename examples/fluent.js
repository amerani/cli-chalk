const { logger } = require("..");

console.log("\n\n");

const data = {
    userId: 313
}

logger
    .error("i have data")
    .data("errorCode", -1000)
    .data("timestamp", new Date())
    .data("body", data)
    .write();