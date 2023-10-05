const express = require('express');
const Shopify = require('shopify-api-node');
const app = express();

const shopify = new Shopify({
  shopName: 'quickstart-13915009.myshopify.com',
  apiKey: '7066cb5cbde3e0b21fe0b2c6cce561a9',
  password: '20792aaf68f4def185ecb5b55a715d96',
  // Or use the access token if using OAuth
  // accessToken: 'your-access-token',
});

shopify.carrierService.create({
  name: 'Aspiring International Shipping',
  callback_url: 'https://aspiring.jerryboy.co.za/api/shopify/int-shipping',
  service_discovery: true,
});


app.post('/uninstall-webhook', (req, res) => {
  // Check the request to ensure it's from Shopify and legitimate
  // Deactivate or clean up the carrier service here
  // You might want to set a flag or perform any necessary cleanup tasks
  res.status(200).end();
});




// Start your server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
