const express = require('express');
const router = express.Router();
const questionsController = require('../controllers/questions.controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/search', questionsController.getUsers);

module.exports = router;
