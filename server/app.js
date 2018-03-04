import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import mainRouter from './routes/index';
import usersRouter from './routes/someModels';

import connectToDb from './config/db';
import logger from './config/logger';

import { errorHandler, notFoundHandler } from './middlewares';

const app = express();

app.use(morgan("dev", { "stream": logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', mainRouter);
app.use('/someModels', usersRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

// anything that bootstraps the express app will first connect to the database and then have access to the app object
// This way, we can query the database anywhere else in our code and expect to have already connected
export default () => connectToDb()
    .then(
        () => app
    );
