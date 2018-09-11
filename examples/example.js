const log = require("../index");
log.config.name = "my-cli";

console.log("\n\n");

log.success("updated something!");

log.error("this is not right :(");

log.warn("im warning you...");

log.info("for your information");

console.log("\n");

const { logger } = log;

const data = {
    userId: 313
}

logger
    .error("i have data")
    .data("errorCode", -1000)
    .data("timestamp", new Date())
    .data("body", data)
    .write();