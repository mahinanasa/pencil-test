const express = require('express');
const router = express.Router();
const questionsRouter = require('./questions')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.get('/api',questionsRouter);

module.exports = router;
