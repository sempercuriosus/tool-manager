const router = require('express').Router();
const express = require('express');
const ejs = require('ejs');
const request = require('request');
const url = 'https://connect.squareup.com/v2/payments'

// Routes
const ping = require('./pong');
const userRoutes = require('./user-routes');

// pong for testing 
router.use('/ping', ping);
// user routes
router.use('/users', userRoutes);

module.exports = router;


const data = {
  "idempotency_key": "afba-ba953ba59b4a" + Date.now(),
  "amount_money": {
    "amount": 1000,
    "currency": "USD"
  },
  "source_id": "EXTERNAL",
  "external_details": {
    "source": "Food Delivery Service",
    "type": "OTHER"
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