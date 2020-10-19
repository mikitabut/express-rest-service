const Logger = require('./logging');

class ErrorHandler {
  static logError(err) {
    const logger = Logger.getLogger();

    logger.error(err.message);
  }

  static async unhadledErrorsMiddleware(err, req, res, next) {
    this.logError(err);

    res.status(500).json('Something went wrong');
    next(res);
  }
}

module.exports = ErrorHandler;
