import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Products from "./Pages/Product";
import Features from "./Pages/Price";
import About from "./Pages/About";
import Pricing from "./Pages/Feature";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About/>} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
         
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
