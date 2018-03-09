export const setupSecurityHandler = (app) => function(req, res, next) {
    if (req.cookies.sessionID === app.locals.sessionID) {
        return next();
    }

    return next({
        ...new Error('I can\'t trust you'),
        status: 403
    });
};
