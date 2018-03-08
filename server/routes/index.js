import express from 'express';
import path from 'path';

const router = express.Router();

const isProdBuild = process.env.npm_lifecycle_event.endsWith(':prod');

if (isProdBuild) {
    router.get('/', function(req, res, next) {
        res.sendFile(
            path.join(__dirname, '..', '..', '..', 'build', 'client', 'build', 'index.html')
        );
    });

    router.use(
        '/',
        express.static(
            path.join(__dirname, '..', '..', '..', 'build', 'client', 'build')
        )
    );
} else {
    router.get('/', function(req, res, next) {
        res.send('Run a production script (ending with \':prod\') and you will see the index.html on this route!');
    });
}

export default router;
