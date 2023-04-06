import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';
import {useInView} from 'react-intersection-observer'

function Partners() {

  const fadeDown = {
    visible: { opacity: 1, y: 0, transition:{duration: 0.8} },
    hidden: { opacity: 0, y: "-100%" },
    }

  const fadeUp = {
    visible: { opacity: 1, y: 0, transition:{duration: 0.8} },
    hidden: { opacity: 0, y: "100%" },
    }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
      if (inView) {
        control.start("visible");
      // } else {
      //     control.start("hidden");
        }
    }, [control, inView]);

  return (
    <section className="bg-dark section1">
      <img src="/bg-pattern-circle.svg" className='background-circle-2' alt="" />
      <Container className='px-3 py-1 mt-5'>
        <Row className="mb-5">
          <Col md={6} className="order-2 order-md-1">
          <motion.div
                className="partner-text d-flex flex-column align-items-center align-items-md-start justify-content-center"
                ref={ref}
                variants={fadeUp}
                initial="hidden"
                animate={control}
              >
              <h2 className="font-light mb-4">Who we work with</h2>
              <p className='font-light'>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. 
              We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
              <button className='transparent-btn mt-5'>About Us</button>
              </motion.div>
          </Col>
          <Col md={6} className="order-1 order-md-2 mt-5">
              <motion.div
                className="client-logos"
                ref={ref}
                variants={fadeDown}
                initial="hidden"
                animate={control}
              >
                <img src="/tesla.svg" alt="" className="logo" />
                <img src="/microsoft.svg" alt="" className="logo" />
                <img src="/hewlett-packard.svg" alt="" className="logo" />
                <img src="/oracle.svg" alt="" className="logo" />
                <img src="/google.svg" alt="" className="logo" />
                <img src="/nvidia.svg" alt="" className="logo" />
                </motion.div>
          </Col>
        </Row>
      
    </Container>
   </section>
  )
}

export default Partners