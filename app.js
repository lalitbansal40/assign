const Shopify = require("shopify-api-node");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 5000;
app.use(cors({ origin: "*" }));
let shop = "messold101.myshopify.com";
let token = "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";
let key = "ce5ef30c1e4768394af59456800262b3";
const shopify = new Shopify({
  shopName: shop,
  apiKey: key,
  password: token,
});

app.get("/api/products", async (req, res) => {
  console.log("hello");
  const products = await shopify.product.list();
  res.send(products);
});

app.listen(port, () => {
  console.log(`app run on port ${port}`);
});
