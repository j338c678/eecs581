import router from './router'

/**
 * exports of express module
 * @type {Object}
 */
var express = require('express');

/**
 * express router for frontend/backend interaction
 * @type {Function}
 */
// var router = express.Router();

router.get('/testdb', function(req, res) {
  res.render('index');
});

module.exports = router;
