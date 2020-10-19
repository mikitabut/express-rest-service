const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const Logger = require('./common/logging');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const ErrorHandler = require('./common/error-handler');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(Logger.requestsLoggerMiddleware);
app.use(ErrorHandler.unhadledErrorsMiddleware);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

app.use('/boards/:boardId', taskRouter);

// ///////////////////////////////////////
// Exceptions catcher
process.on('uncaughtException', ErrorHandler.logError);

// Uncomment for testing
// throw Error('Oops Uncaught Exception!');
// ///////////////////////////////////////

// ///////////////////////////////////////
// Exceptions catcher
process.on('unhandledRejection', ErrorHandler.logError);

// Uncomment for testing
// Promise.reject(Error('Oops unhandled Rejection Exception!'));
// ///////////////////////////////////////

module.exports = app;
