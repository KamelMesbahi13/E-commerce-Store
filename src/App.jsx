import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Nav,
  Up,
  Footer,
  Services,
  SendMessage,
  Men,
  Women,
  Discount,
  About,
} from "./Components/INDEX";
import { motion } from "framer-motion";
import Modal from "./Components/Ui/Modal/Modal";
import ContactUs from "./Components/ContactUs/ContactUs";

const App = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Up />
        <SendMessage />
        <Footer />
        <Modal />
      </motion.div>
    </>
  );
};

export default App;
