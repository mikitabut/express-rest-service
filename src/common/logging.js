const winston = require('winston');

const { combine, timestamp, prettyPrint } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
    new winston.transports.Console({ level: 'info' })
  ]
});

function requestsLogger(req, res, next) {
  const logObj = {
    URL: req.originalUrl,
    QueryParams: req.queryParams || '',
    Body: req.body
  };
  logger.info(logObj);
  next();
}

module.exports = { requestsLogger };
