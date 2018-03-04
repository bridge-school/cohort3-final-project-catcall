import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import mainRouter from './routes/index';
import usersRouter from './routes/users';

import { errorHandler, notFoundHandler } from './middlewares';

const app = express();

const clientDir = path.resolve(__dirname, '..', 'client');

app.use(favicon(path.join(clientDir, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', mainRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;
