import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className="footer">
        <Container>
        <Row>
          <Col md={3} className="mb-3 d-flex justify-content-center justify-content-md-start">
            <Link to="/" className="navbar-logo">
                <img src="/logowhite.svg" alt="" />
            </Link>
          </Col>
          <Col md={6} className="mb-3">
            <Nav className="footer-links pe-3">
              <Link to="/pricing" className="nav-link mx-2 fw-bold text-white">Pricing</Link>
              <Link className="nav-link mx-2 fw-bold text-white">About</Link>
              <Link className="nav-link mx-2 fw-bold text-white">Contact</Link>
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