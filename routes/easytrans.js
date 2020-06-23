https://www.mytransport.co.uk/collectsameday/import_json.php?json={
    "authentication": {
        "username": "Sunil",
        "password": "Sunil153",
        "type": "customer_import",
        "mode": "test" //change to 'effect' when live
    },
    "customers": [
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
    ]
}


https://www.mytransport.co.uk/collectsameday/import_json.php?json={
    "authentication": {
        "username": "Sunil",
        "password": "Sunil153",
        "type": "order_import",
        "mode": "test" //change to 'effect' when live 
    },
    "orders": [
        {
            "productno": 1,
            "customerno": 474, //customer import returns 'customerno'. replace this with 'customer no'
            "vehicleno": 0, //see separate message from Sunil for details
            "remark_invoice": "12345GID", //replace with 'GCLID'
            "remark_purchase": "54321LEAD", //replace with 'ID' shown at top of response
            "order_destinations": [
                {
                    "destinationno": 1,
                    "postal_code": "IG14AS", //replace with 'Collection Postcode'
                    "delivery_date": "2020-07-12", //replace with 'Collection Date' but make sure it is formatted correctly
                    "delivery_time": "12:00" //replace with 'Collection Tine'
                },
                {
                    "destinationno": 2,
                    "postal_code": "IG23AS", //replace with 'Delivery Postcode'
                    "delivery_date": "0000-00-00"
                }
            ] 
    }
    ]
}
