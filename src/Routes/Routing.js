import React, { Component } from 'react';
import {BrowserRouter, Routes, Route ,Link} from 'react-router-dom';
import Products from './Products';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Home from './Home';

export default class Routing extends Component {
  render() {
    return <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us" >AboutUs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/products" element={<Products/>} />
          </Routes>
       </BrowserRouter>
  }
}

