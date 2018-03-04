import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // return a greeting
  res.send('Hello World!');
});

export default router;
