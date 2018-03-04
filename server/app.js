import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import mainRouter from './routes/index';
import usersRouter from './routes/someModels';

import connectToDb from './config/db';

import { errorHandler, notFoundHandler } from './middlewares';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', mainRouter);
app.use('/someModels', usersRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

// let's connect to the database here so we can query it anywhere else in our code and expect to have already connected
export default () => connectToDb()
    .then(
        () => app
    );
