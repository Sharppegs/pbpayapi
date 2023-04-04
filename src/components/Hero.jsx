import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Hero() {
  return (
    <section className="section1">
    {/* <img src="/bg-pattern-circle.svg" className='background-circle' /> */}
      <Container className='px-3 py-0'>
        <Row className="mb-5">
          <Col lg={6} className="hero-text d-flex flex-column align-items-center justify-content-center order-2 order-lg-1">
              <h1 className="font-dark mb-4">Start building with our APIs for absolutely free.</h1>
              <form className='d-flex hero-form'>
                <input className="email-input" type="email" placeholder='Enter email address' />
                <button className="submit-btn" type="submit">Schedule a demo</button>
              </form>
              <p className='contact-text'>Have any questions? <strong>Contact Us</strong></p>
          </Col>
          <Col lg={6} className="d-flex align-items-center justify-content-center text-center order-1 order-lg-2">
              <img className="smartphone-img" src="/illustration-phone-mockup.svg" alt="a mobile smartphone" />
          </Col>
        </Row>
      
    </Container>
   </section>
   
  )
}

export default Hero