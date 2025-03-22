import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '100%', marginTop: '10px' }} />
            {!isCollapsed && ( // Hide text when navbar is collapsed
              <h5 style={{ color: '#0796EF', marginLeft: '10px' ,marginTop: '10px'}}>
                DEEP <span style={{ color: 'white' }}>NET</span> <br />
                <span style={{ color: '#857878' }}>SOFT</span>
              </h5>
            )}
          </div>
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" />

        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Nav links aligned to the right */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-hover">HOME</Nav.Link>
            <Nav.Link as={Link} to="/menu" className="nav-hover">MENU</Nav.Link>
            <Nav.Link as={Link} to="/reservation" className="nav-hover">MAKE A REGISTRATION</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-hover">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
