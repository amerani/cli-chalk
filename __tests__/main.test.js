const log = require('../index');
log.config.name = "test"

test('should log success', () => {
    log.success("im successfull!!")
})

test('should log error', () => {
    log.error("im erroring...")
})

test('should log warning', () => {
    log.warn("im warning you...")
})

test('should log info', () => {
    log.info("for your information!")
})