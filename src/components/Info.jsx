import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Info() {
  return (
    <section className="section1">
      <img src="/bg-pattern-circle.svg" className='background-circle-3' />
      <Container className='px-3 py-1 mt-3 mb-5'>
        <Row className="mb-0">
          <Col md={6} className="mt-5">
                <img src="/illustration-easy-to-implement.svg" alt="" className="info-illustrations" />
          </Col>
          <Col md={6} className="partner-text d-flex flex-column align-items-center align-items-md-start justify-content-center">
              <h2 className="font-dark mb-2">Easy to implement</h2>
              <p className='font-dark mb-4'>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to handle payments functionality with ease.</p>
          </Col>
        </Row>
        <Row className="mb-0">
          <Col md={6} className="partner-text px-5 d-flex flex-column align-items-center align-items-md-start justify-content-center order-2 order-md-1">
              <h2 className="font-dark mb-2">Simple UI & UX</h2>
              <p className='font-dark mb-4'>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
          </Col>
          <Col md={6} className="d-flex-md order-1 order-md-2">
                <img src="/illustration-simple-ui.svg" alt="" className="info-illustrations" />
                {/* <img src="/illustration-simple-ui.svg" alt="" className="logo" /> */}
          </Col>
        </Row>
        <Row className="my-5 px-4">
          <Col md={4} className="d-flex flex-column align-items-center justify-content-between mb-5 px-4">
              <img className='info-img mb-3' src="/icon-personal-finances.svg" alt="" />
              <p className="info-title font-dark mb-3">Personal Finances</p>
              <p className='font-dark text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center justify-content-between mb-5 px-4">
              <img className='info-img mb-3' src="/icon-banking-and-coverage.svg" alt="" />
              <p className="info-title font-dark mb-3">Banking & Coverage</p>
              <p className='font-dark text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center justify-content-between mb-5 px-4">
              <img className='info-img mb-3' src="/icon-consumer-payments.svg" alt="" />
              <p className="info-title font-dark mb-3">Consumer Payments</p>
              <p className='font-dark text-center'>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. </p>
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