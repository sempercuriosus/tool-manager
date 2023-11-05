const router = require('express').Router();
const request = require('request');

// POST /api/square/pay -> {"amount": 1.25, "email": "daziee@aol.com"}
router.post('/pay', async (req, res) => {

        console.log(req.body);
    req.body


    const url = 'https://connect.squareup.com/v2/payments'
    const data = {
      "idempotency_key": "afba-ba953ba59b4a" + Date.now(),


    "amount_money": {
      "amount": 500,
      "currency": "USD"
    },
    "external_details": {
      "type": "OTHER"
      "source": "Manager tool"
    },
    "source_id": "EXTERNAL",
    "buyer_email_address": "mhhh@managertool.com",
    "location_id": "LFQSAZ206SE58",
    "shipping_address": {
      "address_line_1": "1234 Manager tool charlotte, NC"
    }
   
   
     };
    const customHeaders = {
       "Square-Version": "2023-10-18",
        "Authorization": "Bearer EAAAEZz1co6Wm6iwTw_lFBPnGsNoL6BT4a7r9eycjk9UpAI9760DEykVD58Eyz7G",
       "Content-Type": "application/json"
     }
     request({
        url: url,
        method: "POST",
        headers: customHeaders,
       json: true,   // <--Very important!!!
      body: data
     }, function (error, response, body){
       console.log(body);
    });







    
    res.send ('received');








  
  });

  module.exports = router;