import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Pricegrid() {
  return (
    <section className="section1">
    {/* <img src="/bg-pattern-circle.svg" className='background-circle' /> */}
      <Container className='py-0'>
        
        <h1 className="font-dark mt-3 mb-5 text-center text-lg-start">Pricing</h1>

        <div className="pricing-plans">
          <Row className="g-5">
            <Col lg={4} className="d-flex flex-column align-items-center align-items-lg-start justify-content-between mb-5">
              <div className="plan d-flex flex-column align-items-center align-items-lg-start">
                <h3 className='font-red mb-3'>Free Plan</h3>
                <p className="plan-text-desc mb-3">Build and test using our core set of products with up to 100 API requests </p>
                <h2 className='font-dark price-numbers'>$0.00</h2>
              </div>
              <ul role="list" className="plan-features">
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Transactions</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Auth</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Identity</p></li>
                <li className='d-flex plan-list-item'><p className='tick invisible'>✓</p><p class="unavailable-text">Investments</p></li>
                <li className='d-flex plan-list-item'><p className='tick invisible'>✓</p><p class="unavailable-text">Assets</p></li>
                <li className='d-flex plan-list-item'><p className='tick invisible'>✓</p><p class="unavailable-text">Liabilities</p></li>
                <li className='d-flex plan-list-item'><p className='tick invisible'>✓</p><p class="unavailable-text">Income</p></li>
              </ul>
              <button className="access-btn">Request Access</button>
            </Col>
            <Col lg={4} className="d-flex flex-column align-items-center align-items-lg-start justify-content-between mb-5">
              <div className="plan d-flex flex-column align-items-center align-items-lg-start">
                <h3 className='font-red mb-3'>Basic Plan</h3>
                <p className="plan-text-desc mb-3">Launch your project with unlimited requests and no contractual minimums</p>
                <h2 className='font-dark price-numbers'>$249.00</h2> 
              </div>
              <ul role="list" className="plan-features">
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Transactions</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Auth</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Identity</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Investments</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Assets</p></li>
                <li className='d-flex plan-list-item'><p className='tick invisible'>✓</p><p class="unavailable-text">Liabilities</p></li>
                <li className='d-flex plan-list-item'><p className='tick invisible'>✓</p><p class="unavailable-text">Income</p></li>
              </ul> 
              <button className="access-btn">Request Access</button>
            </Col>
            <Col lg={4} className="d-flex flex-column align-items-center align-items-lg-start justify-content-between mb-5">
              <div className="plan d-flex flex-column align-items-center align-items-lg-start">
                <h3 className='font-red mb-3'>Premium Plan</h3>
                <p className="plan-text-desc mb-3">Get tailored solutions, volume pricing, and dedicated support for your team</p>
                <h2 className='font-dark price-numbers'>$499.00</h2>
              </div>
              <ul role="list" className="plan-features">
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Transactions</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Auth</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Identity</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Investments</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Assets</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Liabilities</p></li>
                <li className='d-flex plan-list-item'><p className='tick'>✓</p><p>Income</p></li>
              </ul> 
              <button className="access-btn">Request Access</button>
            </Col>
          </Row>
        </div>

        <Row className="my-5 d-flex align-items-center">
          <Col lg={6} className="partner-text d-flex flex-column align-items-center align-items-lg-start justify-content-center">
              <h2 className="font-dark mb-4">Ready to start?</h2>
          </Col>
          <Col lg={6} className="d-flex-lg justify-content-center align-items-center mb-4">
            <form className='d-flex info-form align-items-center'>
                <input className="email-input" type="email" placeholder='Enter email address' />
                <button className="submit-btn" type="submit">Schedule a demo</button>
              </form>
          </Col>
        </Row>
    </Container>
   </section>
   
  )
}

export default Pricegrid