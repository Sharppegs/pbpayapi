import React from 'react'
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'; 
// import {} from "framer-motion/dist/framer-motion"

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes