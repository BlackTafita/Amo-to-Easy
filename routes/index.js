var express = require('express');
var router = express.Router();
const qs = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/amo-webhook', function (req, res, next) {
    const requestBody = qs.parse(Object.keys(req.body)[0]);
    console.log(req.body, requestBody, JSON.parse(req.body));


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

    console.log(requestBody, requestBody.leads);
    const customFields = requestBody.leads.add[0].custom_fields;
    console.log("CUSTOM FIELDS:", customFields);
    res.end(result);
});



module.exports = router;
