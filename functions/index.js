const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51LFe0jSAZBHoV2i6vW3KPxpVzY9j2sWMdnJWUjXVFpF1Is02iVzlszoM70LEB725bt5lPhZEymE3KLGhL1tOZaX900v9xwTsGV",
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//"sk_test_51LFe0jSAZBHoV2i6vW3KPxpVzY9j2sWMdnJWUjXVFpF1Is02iVzlszoM70LEB725bt5lPhZEymE3KLGhL1tOZaX900v9xwTsGV"


//Listen command

//http://localhost:5001/clone-3ff74/us-central1/api