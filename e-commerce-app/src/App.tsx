import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import {BuyNow}  from "./components/BuyNow";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) return <Loading/>;
  return (
    <ShoppingCartProvider>
      <Navbar />
    <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/buynow" element={<BuyNow/>}/>
    </Routes>
      </Container>
    </ShoppingCartProvider>
  ) 
}

export default App
