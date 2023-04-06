import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion"

function About() {
  return (
    <motion.div className="page1"
      // initial={{width: 0}}
      // animate={{width: "100%"}}
      // exit={{x: window.innerWidth}}
      // transition={{ delay: 0.2 }}
    >
      <section className="section1">
      <Container className='about-container'>
        
        <h2 className="font-dark mt-3 mb-5 text-center text-lg-start about-header">We empower innovators
        by delivering access to the financial system</h2>

        <Row className="#">
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-3">
              <h3 className='font-dark'>Our Vision</h3>
            </Col>
            <Col md={8} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-5">
              <p>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. 
                The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. 
                We are deeply focused on democratizing financial services through technology.</p>
            </Col>
        </Row>

        <Row className="#">
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-3">
              <h3 className='font-dark'>Our Business</h3>
            </Col>
            <Col md={8} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-5">
              <p>At the core of our platform is the technical infrastructure APIs that connect consumers. 
                Our innovative product provides key insights for businesses and individuals, 
                as well as robust reporting for traditional financial institutions and developers.</p>
            </Col>
        </Row>
        </Container>

        <Container fluid className='px-0 mx-0 mb-5'>
          <div className='page-break'></div>
        </Container>

        <Container>
        <div className="mb-5 stats-group">
          <Row className="g-5">
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-2">
              <div className="stats d-flex flex-column align-items-center align-items-md-start">
                <p>Team Members</p>
                <h2 className="font-red about-figures">300+</h2>
              </div> 
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-2">
            
              <div className="stats d-flex flex-column align-items-center align-items-md-start">
                <p>Offices in the US</p>
                <h2 className="font-red about-figures">3</h2>
              </div> 
             
            </Col>
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-2">
              
              <div className="stats d-flex flex-column align-items-center align-items-md-start">
                <p>Transactions analyzed</p>
                <h2 className="font-red about-figures">10m+</h2>
              </div> 
            </Col>
          </Row>
          </div>
          </Container>

          <Container className='about-container mb-5'>
          <Row className="#">
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-3">
              <h3 className='font-dark'>The Culture</h3>
            </Col>
            <Col md={8} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-5">
              <p>We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
                We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
            </Col>
          </Row>

          <Row className="#">
            <Col md={4} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-3">
              <h3 className='font-dark'>The People</h3>
            </Col>
            <Col md={8} className="d-flex flex-column align-items-center align-items-md-start justify-content-between mb-5">
              <p>We're all passionate about building a more efficient and inclusive financial infrastructure together. 
                At PayAPI, we have diverse backgrounds and skills.</p>
            </Col>
          </Row>
        

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

export default About
