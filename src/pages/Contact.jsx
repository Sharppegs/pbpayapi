import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/ContactForm';
import { motion } from "framer-motion"

function Contact() {
  return (
    <motion.div className="page1"
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{ delay: 0.5 }}
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth}}
      transition={{ delay: 0.2 }}
    >
      <section className="section1">
      <Container>
        <h2 className="font-dark mt-3 mb-5 text-center text-lg-start about-header">Submit a help request and 
        we’ll get in touch shortly.</h2>
          <Row className="#">
              <Col md={6} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-5">
                <ContactForm />
              </Col>
              <Col md={6} className="innovators d-flex flex-column align-items-center align-items-md-start mb-5">
                <h5 class="font-dark text-center text-md-start">Join the thousands of innovators already building with us</h5>
                <div className="client-logos-dark">
                  <img src="/tesla-dark.svg" alt="" className="logo-dark" />
                  <img src="/microsoft-dark.svg" alt="" className="logo-dark" />
                  <img src="/hewlett-packard-dark.svg" alt="" className="logo-dark" />
                  <img src="/oracle-dark.svg" alt="" className="logo-dark" />
                  <img src="/google-dark.svg" alt="" className="logo-dark" />
                  <img src="/nvidia-dark.svg" alt="" className="logo-dark" />
                </div>
              </Col>
          </Row>
        </Container>
        <Container>
          <Row className="my-5 d-flex align-items-center">
            <Col md={6} className="partner-text d-flex flex-column align-items-center align-items-md-start justify-content-center">
                <h2 className="font-dark mb-4">Ready to start?</h2>
            </Col>
            <Col md={6} className="d-flex-md justify-content-center align-items-center mb-4">
              <form className='d-flex info-form align-items-center'>
                  <input className="email-input" type="email" placeholder='Enter email address' />
                  <button className="submit-btn" type="submit">Schedule a demo</button>
                </form>
            </Col>
          </Row>
        </Container>
   </section>
      
   </motion.div>
    
  )
}

export default Contact
