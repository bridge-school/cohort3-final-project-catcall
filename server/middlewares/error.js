export const errorHandler = function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.sendStatus(
        err.status || 500
    ); // return a status code of 500 if none was provided or found
};
