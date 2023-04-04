
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import {nanoid} from 'nanoid'
import {Link} from 'react-router-dom'


function NavBar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }


  return (
        <Navbar key={nanoid()} expand='lg'>
          <Container className=" py-lg-3 py-sm-1">
            <Link to="/" className="navbar-logo">
              <img src="/logo.svg" alt="payapi logo" />
            </Link>
            <Navbar.Toggle className="menu-toggle" aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className={toggle?'navbar-mobile':'navbar-mobile-expanded'}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <Link to="/" className="navbar-logo" onClick={handleToggle}>
                   <img src="/logowhite.svg" alt="payapi logo" />
                </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <ul role="list" className="d-flex flex-column flex-lg-row">
                    <li onClick={handleToggle}><Link to="/pricing" className="nav-link mx-2 fw-bold text-center text-lg-start">Pricing</Link></li>
                    <li onClick={handleToggle}><Link to="/about" className="nav-link mx-2 fw-bold text-center text-lg-start" aira-label="Close">About</Link></li>
                    <li onClick={handleToggle}><Link to="/contact" className="nav-link mx-2 fw-bold text-center text-lg-start" aira-label="Close">Contact</Link></li>
                  </ul>
                  <button className="submit-btn btn-mobile mt-5 mx-2" type="submit">Schedule a demo</button>
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <button className="submit-btn left" type="submit">Schedule a demo</button>
          </Container>
        </Navbar>
     
  );
}

export default NavBar;