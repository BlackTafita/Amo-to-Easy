const express = require('express');
const router = express.Router();
const axios = require('axios').default;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/amo-webhook', function (req, res, next) {
    const customFields = req.body.leads.add[0].custom_fields;
    const venicleTypes = ['I dont know?', 'small van', 'midi van', 'large van', 'extra large van', 'hatchback van', 'small van', 'motor bike', 'lorry'];

    const authentication = {
        "username": "Sunil",
        "password": "Sunil153",
        "type": "customer_import",
        "mode": "effect" //change to 'effect' when live
    };

    const customers =  [
            {
                "company_name": 'TEST ' + req.body.leads.add[0].name, //replace with 'Name'
                "customer_contacts": [
                    {
                        "contact_name": req.body.leads.add[0].name, //replace with 'Name'
                        "mobile": findCustomField('Phone'), //replace with 'Phone'
                        "email": findCustomField('Email') //replace with 'Email'
                    }
                ]
            }
        ];

    axios({
        url: 'https://www.mytransport.co.uk/collectsameday/import_json.php',
        method: 'get',
        params: {
            json: JSON.stringify({authentication, customers}),
        }
    }).then((result) => {
        console.log(result.data, result.data.result.new_customernos);
        const orders = [
            {
                "productno": 1,
                "customerno": result.data.result.new_customernos[0], //customer import returns 'customerno'. replace this with 'customer no'
                "vehicleno": findCustomField('Venicle Type') ? venicleTypes.findIndex((a) => a.toLowerCase() === findCustomField('Venicle Type')) : 0, //see separate message from Sunil for details
                "remark_invoice": findCustomField('GCLID'), //replace with 'GCLID'
                "remark_purchase": req.body.leads.add[0].id, //replace with 'ID' shown at top of response
                "order_destinations": [
                    {
                        "destinationno": 1,
                        "postal_code": findCustomField('Collection Postcode'), //replace with 'Collection Postcode'
                        "delivery_date": findCustomField('Collection Date'), //replace with 'Collection Date' but make sure it is formatted correctly
                        "delivery_time": findCustomField('Collection Time') //replace with 'Collection Tine'
                    },
                    {
                        "destinationno": 2,
                        "postal_code": findCustomField('Delivery Postcode'), //replace with 'Delivery Postcode'
                        "delivery_date": "0000-00-00"
                    }
                ]
            }
        ];

        axios({
            url: 'https://www.mytransport.co.uk/collectsameday/import_json.php',
            method: 'get',
            params: {
                json: JSON.stringify({authentication, orders}),
            }
        }).then((result) => {
            console.log(result);
            res.end()
        }).catch();
    }).catch(err => {
        console.log(err);
    });


    console.log("CUSTOM FIELDS:", customFields);

    function findCustomField(name) {
        const field = customFields.find((a) => a.name === name);
        if (field && field.values) {
            return field.values['[0][value]'];
        } else {
            return null;
        }
    }
});




module.exports = router;
