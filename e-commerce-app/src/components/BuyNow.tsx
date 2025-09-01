// // BuyNow.tsx
// import { useState } from "react";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "../utilities/formatCurrency";
// import storeItems from "../data/data.json";
// import { Form, Button, Card, Stack, Row, Col, Container } from "react-bootstrap";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// // Initialize Stripe (replace with your publishable key)
// const stripePromise = loadStripe("pk_live_51NQ7JLCVoPtBUwqZNTbcI3C1DyuixZ1941ayo46ujxb6Pg8QJ6D5CVuobABOQaXj7yNNnWlIvipm6uJhzwl4tk3z00PCpunH66");

// // Stripe Checkout Form
// function CheckoutForm({ totalAmount }: { totalAmount: number }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);

//     try {
//       const response = await fetch("/.netlify/functions/createPaymentIntent", {
//         method: "POST",
//         body: JSON.stringify({ amount: totalAmount }),
//         headers: { "Content-Type": "application/json" },
//       });
//       const data = await response.json();

//       const result = await stripe.confirmCardPayment(data.clientSecret, {
//         payment_method: { card: elements.getElement(CardElement)! },
//       });

//       if (result.error) alert(result.error.message);
//       else if (result.paymentIntent?.status === "succeeded") alert("Payment successful!");
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Card className="p-3 mb-3 shadow-sm border-0">
//         <Card.Body>
//           <Form.Label>Card Details</Form.Label>
//           <CardElement className="p-2 border rounded" />
//           <Button className="mt-3 w-100" type="submit" disabled={!stripe || loading}>
//             {loading ? "Processing..." : `Pay ${formatCurrency(totalAmount)}`}
//           </Button>
//         </Card.Body>
//       </Card>
//     </Form>
//   );
// }

// export function BuyNow() {
//   const { cartItems } = useShoppingCart();
//   const total = cartItems.reduce((total, cartItem) => {
//     const item = storeItems.find((i) => i.id === cartItem.id);
//     return total + (item?.price || 0) * cartItem.quantity;
//   }, 0);

//   return (
//     <Container className="my-5">
//       <Row className="g-4">
//         {/* Left: Shipping & Payment */}
//         <Col md={6}>
//           <Card className="shadow-sm border-0 p-3">
//             <Card.Body>
//               <Card.Title>Shipping Information</Card.Title>
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Full Name</Form.Label>
//                   <Form.Control placeholder="John Doe" />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Address</Form.Label>
//                   <Form.Control placeholder="123 Main St" />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>City</Form.Label>
//                   <Form.Control placeholder="New York" />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>ZIP / Postal Code</Form.Label>
//                   <Form.Control placeholder="10001" />
//                 </Form.Group>
//               </Form>

//               <Card.Title className="mt-4">Payment Details</Card.Title>
//               <Elements stripe={stripePromise}>
//                 <CheckoutForm totalAmount={total} />
//               </Elements>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Right: Cart Summary */}
//         <Col md={6}>
//           <Card className="shadow-sm border-0 p-3">
//             <Card.Body>
//               <Card.Title>Your Cart</Card.Title>
//               <Stack gap={3}>
//                 {cartItems.map((cartItem) => {
//                   const item = storeItems.find((i) => i.id === cartItem.id);
//                   if (!item) return null;
//                   return (
//                     <Card key={cartItem.id} className="border-0 shadow-sm p-2">
//                       <Card.Body>
//                         <div className="d-flex justify-content-between align-items-center">
//                           <div>
//                             <Card.Text className="mb-1">{item.name}</Card.Text>
//                             <Card.Text className="text-muted">
//                               {cartItem.quantity} × {formatCurrency(item.price)}
//                             </Card.Text>
//                           </div>
//                           <Card.Text className="mb-0 fw-bold">
//                             {formatCurrency(item.price * cartItem.quantity)}
//                           </Card.Text>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   );
//                 })}
//               </Stack>
//               <hr />
//               <h5 className="text-end">Total: {formatCurrency(total)}</h5>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// ====================--------------------============================

import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/data.json";
import { Form, Button, Card, Stack, Row, Col, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Initialize Stripe
const stripePromise = loadStripe("pk_live_51NQ7JLCVoPtBUwqZNTbcI3C1DyuixZ1941ayo46ujxb6Pg8QJ6D5CVuobABOQaXj7yNNnWlIvipm6uJhzwl4tk3z00PCpunH66");

const countries = ["United States", "Canada", "United Kingdom","Latvia","Uzbekistan"]; // Extend this list

function CheckoutForm({ totalAmount }: { totalAmount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/createPaymentIntent", {
        method: "POST",
        body: JSON.stringify({ amount: totalAmount }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: elements.getElement(CardElement)! },
      });

      if (result.error) alert(result.error.message);
      else if (result.paymentIntent?.status === "succeeded") alert("Payment successful!");
    } catch (err) {
      console.error(err);
      alert("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card className="p-3 mb-3 shadow-sm border-0">
        <Card.Body>
          <Form.Label>Card Details</Form.Label>
          <CardElement className="p-2 border rounded" />
          <Button className="mt-3 w-100" type="submit" disabled={!stripe || loading}>
            {loading ? "Processing..." : `Pay ${formatCurrency(totalAmount)}`}
          </Button>
        </Card.Body>
      </Card>
    </Form>
  );
}

export function BuyNow() {
  const { cartItems } = useShoppingCart();
  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  return (
    <Container className="my-5">
      <Row className="g-4">
        {/* Left: Shipping & Payment */}
        <Col md={6}>
          <Card className="shadow-sm border-0 p-3">
            <Card.Body>
              <Card.Title>Shipping Information</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control placeholder="John Doe" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    list="address-suggestions"
                    placeholder="123 Main St"
                  />
                  <datalist id="address-suggestions">
                    <option value="123 Main St" />
                    <option value="456 Oak Ave" />
                    <option value="789 Pine Rd" />
                  </datalist>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control placeholder="New York" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>ZIP / Postal Code</Form.Label>
                  <Form.Control placeholder="10001" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <PhoneInput
                    country={"lv"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputClass="form-control"
                  />
                </Form.Group>
              </Form>

              <Card.Title className="mt-4">Payment Details</Card.Title>
              <Elements stripe={stripePromise}>
                <CheckoutForm totalAmount={total} />
              </Elements>
            </Card.Body>
          </Card>
        </Col>

        {/* Right: Cart Summary */}
        <Col md={6}>
          <Card className="shadow-sm border-0 p-3">
            <Card.Body>
              <Card.Title>Your Cart</Card.Title>
              <Stack gap={3}>
                {cartItems.map((cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  if (!item) return null;
                  return (
                    <Card key={cartItem.id} className="border-0 shadow-sm p-2">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <Card.Text className="mb-1">{item.name}</Card.Text>
                            <Card.Text className="text-muted">
                              {cartItem.quantity} × {formatCurrency(item.price)}
                            </Card.Text>
                          </div>
                          <Card.Text className="mb-0 fw-bold">
                            {formatCurrency(item.price * cartItem.quantity)}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Stack>
              <hr />
              <h5 className="text-end">Total: {formatCurrency(total)}</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
