var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/amo-webhook', function (req, res, next) {
    const result = JSON.stringify(req.body, null, 2);
    console.log(result);
    res.end(result);
});



module.exports = router;
