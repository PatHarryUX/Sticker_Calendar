var express = require('express');
var router = express.Router();

const arbitrary_data = {
  'foo': 'bar'
}
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get')
  res.render('index', { title: 'Hello World', layout: 'layout', arb: arbitrary_data });
});

module.exports = router;
