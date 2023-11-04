const express = require('express');
const square = require('square');
const Handlebars = require('express-handlebars');
const fs = require('fs');
const templateSource = fs.readFileSync('checkoutPage.handlebars'); 

try {
    const response = await client.checkoutApi.createPaymentLink({
      idempotencyKey: '{UNIQUE_KEY}',
      quickPay: {
        name: 'Tool EZ',
        priceMoney: {
          amount: 12500,
          currency: 'USD'
        },
        locationId: '{LOCATION_ID}'
      }
    });
  
    console.log(response.result);
  } catch(error) {
    console.log(error);
  }

