const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = functions.https.onRequest((req, res) => {
    // Enable CORS for all requests
    cors(req, res, async () => {
        // Allow preflight requests
        if (req.method === "OPTIONS") {
            res.set("Access-Control-Allow-Origin", "*");
            res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            res.set("Access-Control-Allow-Headers", "Content-Type");
            res.status(204).send("");
            return;
        }

        try {
            const { amount } = req.body;

            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: "eur",
            });

            res.set("Access-Control-Allow-Origin", "*"); // Allow frontend
            res.status(200).send({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            res.set("Access-Control-Allow-Origin", "*");
            res.status(500).send({ error: error.message });
        }
    });
});
