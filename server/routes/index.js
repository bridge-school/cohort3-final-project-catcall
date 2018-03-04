import express from 'express';

const router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
  res.send('Hello World!'); // return a greeting
});

export default router;
