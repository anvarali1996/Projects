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

// import { useState } from "react";
// import { useShoppingCart } from "../context/ShoppingCartContext";
// import { formatCurrency } from "../utilities/formatCurrency";
// import storeItems from "../data/data.json";
// import { Form, Button, Card, Stack, Row, Col, Container } from "react-bootstrap";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// // Initialize Stripe
// const stripePromise = loadStripe("pk_live_51NQ7JLCVoPtBUwqZNTbcI3C1DyuixZ1941ayo46ujxb6Pg8QJ6D5CVuobABOQaXj7yNNnWlIvipm6uJhzwl4tk3z00PCpunH66");

// const countries = ["United States", "Canada", "United Kingdom","Latvia","Uzbekistan", "Poland"]; // Extend this list

// function CheckoutForm({ totalAmount }: { totalAmount: number }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setLoading(true);

//     try {
//       // const response = await fetch("/.netlify/functions/createPaymentIntent", {
//       //   method: "POST",
//       //   body: JSON.stringify({ amount: totalAmount }),
//       //   headers: { "Content-Type": "application/json" },
//       // });
//       const response = await fetch(import.meta.env.VITE_FIREBASE_FUNCTION_URL, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ amount: 1000 }),
// });

// const data = await response.json();

// // Faqat shuni yozib qo'ysangiz yetarli (o'zgaruvchiga tenglashtirmasdan):
// console.log(data.clientSecret);

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

//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("");

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
//                   <Form.Control
//                     list="address-suggestions"
//                     placeholder="123 Main St"
//                   />
//                   <datalist id="address-suggestions">
//                     <option value="123 Main St" />
//                     <option value="456 Oak Ave" />
//                     <option value="789 Pine Rd" />
//                   </datalist>
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>City</Form.Label>
//                   <Form.Control placeholder="New York" />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>ZIP / Postal Code</Form.Label>
//                   <Form.Control placeholder="10001" />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Country</Form.Label>
//                   <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
//                     <option value="">Select Country</option>
//                     {countries.map((c) => (
//                       <option key={c} value={c}>{c}</option>
//                     ))}
//                   </Form.Select>
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Phone Number</Form.Label>
//                   <PhoneInput
//                     country={"lv"}
//                     value={phone}
//                     onChange={(phone) => setPhone(phone)}
//                     inputClass="form-control"
//                   />
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

// ===================================================---------------------------===============================================

import { useState, useEffect, useRef } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/data.json";
import { Form, Button, Card, Stack, Row, Col, Container } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// TypeScript uchun window.google ni tanitish
declare global {
  interface Window {
    google: any;
  }
}

// Initialize Stripe
const stripePromise = loadStripe("pk_live_51NQ7JLCVoPtBUwqZNTbcI3C1DyuixZ1941ayo46ujxb6Pg8QJ6D5CVuobABOQaXj7yNNnWlIvipm6uJhzwl4tk3z00PCpunH66");

const countries = ["Latvia", "Lithuania", "Estonia", "United Kingdom", "Uzbekistan", "Poland"];

function CheckoutForm({ totalAmount }: { totalAmount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const response = await fetch(import.meta.env.VITE_FIREBASE_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: totalAmount }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Server xatosi");
      }

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
          <Form.Label className="fw-bold mb-2">Card Details</Form.Label>
          <div className="p-2 border rounded bg-light">
            <CardElement />
          </div>
          <Button className="mt-3 w-100 py-2" type="submit" disabled={!stripe || loading}>
            {loading ? "Processing..." : `Pay ${formatCurrency(totalAmount)}`}
          </Button>
        </Card.Body>
      </Card>
    </Form>
  );
}

// Google Maps Native Autocomplete Komponenti
function GoogleMapsAutocomplete({ onAddressSelect }: { onAddressSelect: (address: { street: string; city: string; postalCode: string; country: string }) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (window.google && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ["address"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        
        let street = "";
        let city = "";
        let postalCode = "";
        let country = "";

        place.address_components?.forEach((component: any) => {
          const types = component.types;
          if (types.includes("route")) street = component.long_name;
          if (types.includes("street_number")) street = `${component.long_name} ${street}`;
          if (types.includes("locality")) city = component.long_name;
          if (types.includes("postal_code")) postalCode = component.long_name;
          if (types.includes("country")) country = component.long_name;
        });

        if (!street && place.formatted_address) {
          street = place.formatted_address;
        }

        onAddressSelect({ street, city, postalCode, country });
      });
    }
  }, [onAddressSelect]);

  return (
    <Form.Control
      ref={inputRef}
      placeholder="Start typing your address (Google Maps)..."
      required
    />
  );
}

export function BuyNow() {
  const { cartItems } = useShoppingCart();
  const total = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Latvia");
  const [shippingMethod, setShippingMethod] = useState("omniva");
  
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleAddressSelect = (addr: { street: string; city: string; postalCode: string; country: string }) => {
    setStreet(addr.street);
    if (addr.city) setCity(addr.city);
    if (addr.postalCode) setPostalCode(addr.postalCode);
    if (addr.country && countries.includes(addr.country)) {
      setCountry(addr.country);
    }
  };

  return (
    <Container className="my-5">
      <Row className="g-4">
        {/* Left: Shipping & Payment */}
        <Col md={7}>
          <Card className="shadow-sm border-0 p-3 mb-4">
            <Card.Body>
              <Card.Title className="mb-3">Shipping Information</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control placeholder="John Doe" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address Search (Google Maps)</Form.Label>
                  <GoogleMapsAutocomplete onAddressSelect={handleAddressSelect} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Street / House</Form.Label>
                  <Form.Control 
                    value={street} 
                    onChange={(e) => setStreet(e.target.value)} 
                    placeholder="Street name and house number" 
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        placeholder="Riga" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>ZIP / Postal Code</Form.Label>
                      <Form.Control 
                        value={postalCode} 
                        onChange={(e) => setPostalCode(e.target.value)} 
                        placeholder="LV-1010" 
                        required 
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
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
                    inputClass="form-control w-100"
                  />
                </Form.Group>

                {/* Shipping Method Section */}
                <Card.Title className="mt-4 mb-3">Delivery Method</Card.Title>
                <div className="mb-3">
                  <Form.Check
                    type="radio"
                    id="shipping-omniva"
                    name="shippingMethod"
                    label="📦 Omniva Parcel Locker (Parcel machine) - €3.50"
                    checked={shippingMethod === "omniva"}
                    onChange={() => setShippingMethod("omniva")}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="shipping-dpd"
                    name="shippingMethod"
                    label="🚚 DPD Pickup Point - €3.50"
                    checked={shippingMethod === "dpd"}
                    onChange={() => setShippingMethod("dpd")}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    id="shipping-courier"
                    name="shippingMethod"
                    label="🏠 Courier Delivery (Home) - €7.00"
                    checked={shippingMethod === "courier"}
                    onChange={() => setShippingMethod("courier")}
                  />
                </div>

                {/* Conditional Locker Selection */}
                {(shippingMethod === "omniva" || shippingMethod === "dpd") && (
                  <Form.Group className="mb-3 p-3 bg-light rounded border">
                    <Form.Label className="fw-bold">Select {shippingMethod === "omniva" ? "Omniva" : "DPD"} Locker Location</Form.Label>
                    <Form.Select>
                      <option value="">Select a pickup point...</option>
                      <option value="riga_alfa">Rīga t/c Alfa pakomāts</option>
                      <option value="riga_origo">Rīga Centrālā stacija / Origo</option>
                      <option value="riga_mols">Rīga t/c Mols</option>
                    </Form.Select>
                  </Form.Group>
                )}
              </Form>

              <Card.Title className="mt-4 mb-3">Payment Details</Card.Title>
              <Elements stripe={stripePromise}>
                <CheckoutForm totalAmount={total} />
              </Elements>
            </Card.Body>
          </Card>
        </Col>

        {/* Right: Cart Summary */}
        <Col md={5}>
          <Card className="shadow-sm border-0 p-3 sticky-top" style={{ top: "20px" }}>
            <Card.Body>
              <Card.Title className="mb-3">Order Summary</Card.Title>
              <Stack gap={3} style={{ maxHeight: "350px", overflowY: "auto" }}>
                {cartItems.map((cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  if (!item) return null;
                  return (
                    <div key={cartItem.id} className="d-flex justify-content-between align-items-center border-bottom pb-2">
                      <div>
                        <div className="fw-semibold">{item.name}</div>
                        <div className="text-muted small">
                          {cartItem.quantity} × {formatCurrency(item.price)}
                        </div>
                      </div>
                      <div className="fw-bold">
                        {formatCurrency(item.price * cartItem.quantity)}
                      </div>
                    </div>
                  );
                })}
              </Stack>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>{formatCurrency(shippingMethod === "courier" ? 7 : 3.5)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fs-5 fw-bold">
                <span>Total:</span>
                <span>{formatCurrency(total + (shippingMethod === "courier" ? 7 : 3.5))}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BuyNow;