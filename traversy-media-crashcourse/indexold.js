const Logger = require ('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called listener: ', data));

logger.log('Hello from index to logger');
logger.log('aaa')
logger.log('bbb')