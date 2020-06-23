var express = require('express');
var router = express.Router();
const qs = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/amo-webhook', function (req, res, next) {
    const requestBody = qs.parse(Object.keys(req.body)[0]);
    console.log(req.body, JSON.stringify(req.body), requestBody);

    res.end(result);

    const authentication = {
        "username": "Sunil",
        "password": "Sunil153",
        "type": "customer_import",
        "mode": "test" //change to 'effect' when live
    };

    const customers =  [
            {
                "company_name": "Sunil Jindal", //replace with 'Name'
                "customer_contacts": [
                    {
                        "contact_name": "Sunil Jindal", //replace with 'Name'
                        "mobile": "07552687886", //replace with 'Phone'
                        "email": "sunil153@hotmail.com" //replace with 'Email'
                    }
                ]
            }
        ];
});



module.exports = router;
