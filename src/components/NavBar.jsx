
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {nanoid} from 'nanoid'
import {Link} from 'react-router-dom'


function NavBar() {
  return (
        <Navbar key={nanoid()} expand='lg'>
          <Container className=" py-lg-3 py-sm-1">
            <Link to="/" className="navbar-logo">
              <img src="/logo.svg" alt="payapi logo" />
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              className="z-index:3"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Link to="/pricing" className="nav-link mx-2 fw-bold">Pricing</Link>
                  <Link className="nav-link mx-2 fw-bold">About</Link>
                  <Link className="nav-link mx-2 fw-bold">Contact</Link>
                  
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <button className="submit-btn left" type="submit">Schedule a demo</button>
          </Container>
        </Navbar>
     
  );
}

export default NavBar;