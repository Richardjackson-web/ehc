import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo_img from '../../Images/logo-img.png';
import Logo_text from '../../Images/logo-text.png';
import Scroll from '../../Images/Scroll.png';
import Menu from '../../Images/menu.png';

function Hero() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="main-hero">
        <div className="Hero">
        <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#"><img className="logo" src={Logo_img}/><img className="logo" src={Logo_text}/></Navbar.Brand>
        </Container>
        <span className="log1">Log</span>&nbsp; <span className="log2">In</span>
        <img className="menu" onClick={handleShow} src={Menu}/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </Navbar>
      <div className="welcome">
        <h1 className="welcome-head">Welcome to Evolved Human <br className="break"/> Care</h1>
        <p className="welcome-text">Evolved Human Care (EHC) is a web-based virtual platform<br className="break"/> that uses blockchain technology to create a user-focused<br className="break"/> electronic health record with enhanced security and<br className="break"/> accessibility for service providers and end-users.</p>
        <button className="start">Get Started</button>
        <img className="scroll" src={Scroll}/>
      </div>
        </div>
    </div>
  )
}

export default Hero