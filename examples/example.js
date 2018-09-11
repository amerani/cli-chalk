const log = require("../index");
log.config.name = "my-cli";

console.log("\n\n");

log.success("updated something!");

log.error("this is not right :(");

log.warn("im warning you...");

log.info("for your information");

const { logger } = log;

logger.success("i have data")
.data("name", "alek")
.data("json", JSON.stringify({ "y": 1, 2: 3, 4: " "}, null, 4))
.data("json2", { "y": 1, 2: 3, 4: " "})
.data('nl', null)
.data(null, null)
.data("undef", undefined)
.data(undefined, undefined)
.data("f", 0)
.data(true, true)
.data(false, false)
.data(NaN, NaN)
.data(112342342341243, 5555)
.write();