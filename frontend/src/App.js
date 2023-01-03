import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
// import ProductScreen from './screens/ProductScreen';
// import CartScreen from './screens/CartScreen.js';
// import LoginScreen from './screens/LoginScreen.js';
import ProductsScreen from './screens/ProductsScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* <Route path="/product/:id" element={<ProductScreen />} /> */}
        {/* <Route path="/bag" element={<CartScreen />} /> */}
        {/* <Route path="/login" element={<LoginScreen />} /> */}
        <Route path="/products" element={<ProductsScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        {/* <Route path="/search/:keyword" element={<ProductsScreen />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
