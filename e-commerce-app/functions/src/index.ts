import {onRequest} from "firebase-functions/v2/https";
import Stripe from "stripe";

export const createPaymentIntent = onRequest(
  {invoker: "public"}, // 👈 Barcha brauzer va domenlarga ruxsat berish uchun
  (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    (async () => {
      try {
        const stripe = new Stripe(
          process.env.STRIPE_SECRET_KEY || "",
          {
            apiVersion: "2025-07-30.basil",
          }
        );

        const {amount} = req.body;

        if (!amount) {
          res.status(400).send({
            error: "Amount (summa) ko'rsatilmadi!",
          });
          return;
        }

        const paymentIntent = await stripe.paymentIntents.create({
          amount: Number(amount),
          currency: "eur",
        });

        res.status(200).send({
          clientSecret: paymentIntent.client_secret,
        });
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ?
          error.message : "Noma'lum xatolik";
        res.status(500).send({error: errorMessage});
      }
    })();
  }
);
