import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Partners() {
  return (
    <section className="bg-dark section1">
      <img src="/bg-pattern-circle.svg" className='background-circle-2' alt="" />
      <Container className='px-3 py-1 mt-5'>
        <Row className="mb-5">
          <Col md={6} className="partner-text d-flex flex-column align-items-center align-items-md-start justify-content-center order-2 order-md-1">
              <h2 className="font-light mb-4">Who we work with</h2>
              <p className='font-light'>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. 
              We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
              <button className='transparent-btn mt-5'>About Us</button>
          </Col>
          <Col md={6} className="client-logos order-1 order-md-2 mt-5">
              
                <img src="/tesla.svg" alt="" className="logo" />
                <img src="/microsoft.svg" alt="" className="logo" />
                <img src="/hewlett-packard.svg" alt="" className="logo" />
                <img src="/oracle.svg" alt="" className="logo" />
                <img src="/google.svg" alt="" className="logo" />
                <img src="/nvidia.svg" alt="" className="logo" />
           
          </Col>
        </Row>
      
    </Container>
   </section>
  )
}

export default Partners