var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
    res.render('coming');
});

router.get('/bench', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next){
    res.render('test', {title: 'Test'});
});

module.exports = router;