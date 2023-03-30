import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
  return (
    <div className="footer">
        <Container>
        <Row>
          <Col md={3} className="mb-3 d-flex justify-content-center justify-content-md-start">
              <img src="/logowhite.svg" alt="" />
          </Col>
          <Col md={6} className="mb-3">
            <Nav className="footer-links pe-3">
                    <Nav.Link className="mx-2 fw-bold footer-link" href="#action1">Pricing</Nav.Link>
                    <Nav.Link className="mx-2 fw-bold footer-link" href="#action2">About</Nav.Link>
                    <Nav.Link className="mx-2 fw-bold footer-link" href="#action2">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="mb-3 social-icons">
              <img className="m-2" src="/twitter.svg" alt="" />
              <img className="m-2" src="/facebook.svg" alt="" />
              <img className="m-2" src="/linkedin.svg" alt="" />
          </Col>
        </Row>
      
    </Container>

    </div>
  )
}

export default Footer