const log = require("../index");
log.config.name = "my-cli";

console.log("\n\n");

log.success("updated something!");

log.error("this is not right :(");

log.warn("im warning you...");

log.info("for your information");