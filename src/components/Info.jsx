import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';
import {useInView} from 'react-intersection-observer'

function Info() {

  const fadeLeft = {
    visible: { opacity: 1, x: 0, transition:{duration: 0.5} },
    hidden: { opacity: 0, x: "-100%" },
    }
  const fadeRight = {
    visible: { opacity: 1, x: 0, transition:{duration: 0.5} },
    hidden: { opacity: 0, x: "100%" },
    }

  const zoomIn = {
    visible: { opacity: 1, scale: 1, transition:{duration: 0.2} },
    hidden: { opacity: 0, scale: 0 },
    }

  const enterLeft1 = {
      visible: { opacity: 1, x: 0, transition:{duration: 0.2} },
      hidden: { opacity: 0, x: "-100%" },
      }
  const enterLeft2 = {
      visible: { opacity: 1, x: 0, transition:{duration: 0.5} },
      hidden: { opacity: 0, x: "-150%" },
      }
  const enterLeft3 = {
      visible: { opacity: 1, x: 0, transition:{duration: 0.8} },
      hidden: { opacity: 0, x: "-200%" },
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
    <section className="section1">
      <img src="/bg-pattern-circle.svg" className='background-circle-3' />
      <Container className='px-3 py-1 mt-3 mb-5'>
        <Row className="mb-0">
          <Col md={6} className="mt-5">
            <motion.div
                ref={ref}
                variants={fadeLeft}
                initial="hidden"
                animate={control}
            >
              <img src="/illustration-easy-to-implement.svg" alt="" className="info-illustrations" />
            </motion.div>
          </Col>
          <Col md={6} className="partner-text d-flex flex-column align-items-center align-items-md-start justify-content-center">
            <motion.div
                ref={ref}
                variants={fadeRight}
                initial="hidden"
                animate={control}
            >
              <h2 className="font-dark mb-2">Easy to implement</h2>
              <p className='font-dark mb-4'>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to handle payments functionality with ease.</p>
              </motion.div>
          </Col>
        </Row>
        <Row className="mb-0">
          <Col md={6} className="partner-text px-5 d-flex flex-column align-items-center align-items-md-start justify-content-center order-2 order-md-1">
          <motion.div
                ref={ref}
                variants={fadeLeft}
                initial="hidden"
                animate={control}
            >
                <h2 className="font-dark mb-2">Simple UI & UX</h2>
                <p className='font-dark mb-4'>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
            </motion.div>
          </Col>
          <Col md={6} className="d-flex-md order-1 order-md-2">
            <motion.div
                ref={ref}
                variants={fadeRight}
                initial="hidden"
                animate={control}
            >
                <img src="/illustration-simple-ui.svg" alt="" className="info-illustrations" />
                </motion.div>
          </Col>
        </Row>
        <Row className="my-5 px-4">
          <Col md={4} className="d-flex flex-column align-items-center justify-content-between mb-5 px-4">
            {/* <motion.div 
              ref={ref}
              variants={enterLeft1}
              className="d-flex flex-column align-items-center justify-content-between mb-5 px-4"
              initial="hidden"
              animate={control}
            > */}
              <img className='info-img mb-3' src="/icon-personal-finances.svg" alt="" />
              <p className="info-title font-dark mb-3">Personal Finances</p>
              <p className='font-dark text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
            {/* </motion.div> */}
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center justify-content-between mb-5 px-4">
            {/* <motion.div 
                ref={ref}
                variants={enterLeft2}
                className="d-flex flex-column align-items-center justify-content-between mb-5 px-4"
                initial="hidden"
                animate={control}
              > */}
              <img className='info-img mb-3' src="/icon-banking-and-coverage.svg" alt="" />
              <p className="info-title font-dark mb-3">Banking & Coverage</p>
              <p className='font-dark text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
            {/* </motion.div> */}
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center justify-content-between mb-5 px-4">
            {/* <motion.div 
                  ref={ref}
                  variants={enterLeft3}
                  className="d-flex flex-column align-items-center justify-content-between mb-5 px-4"
                  initial="hidden"
                  animate={control}
            > */}
              <img className='info-img mb-3' src="/icon-consumer-payments.svg" alt="" />
              <p className="info-title font-dark mb-3">Consumer Payments</p>
              <p className='font-dark text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
            {/* </motion.div> */}
          </Col>
        </Row>
        <Row className="my-5 d-flex align-items-center">
          <Col md={6} className="partner-text px-5 d-flex flex-column align-items-center align-items-md-start justify-content-center">
              <h2 className="font-dark mb-2">Ready to start?</h2>
          </Col>
          <Col md={6} className="d-flex-md justify-content-center align-items-center">
            <form className='d-flex info-form'>
                <input className="email-input" type="email" placeholder='Enter email address' />
                <button className="submit-btn" type="submit">Schedule a demo</button>
              </form>
          </Col>
        </Row>
        
      
    </Container>
   </section>
  )
}

export default Info