import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Logo_img from '../../Images/logo-img.png';
import Logo_text from '../../Images/logo-text.png';
import Scroll from '../../Images/Scroll.png';
import Menu from '../../Images/menu.png';
import {FaCircle} from "react-icons/fa";
import Security from "../../Images/security.png";
import Transparency from "../../Images/transparency.png";
import Automation from "../../Images/automation.png";
import Patient from "../../Images/patient.png";
import Record from "../../Images/record.png";

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
        <div className="notShown">
        <span className="log1">Log</span>&nbsp; <span className="log2">In</span>
        </div>
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
        <h1 className="welcome-head">Welcome to<br className="mobile"/> Evolved<br className="mobile"/> Human <br className="break"/> Care</h1>
        <p className="welcome-text">Evolved Human Care (EHC) is a web-<br className="mobile"/>based virtual platform<br className="break"/> that uses <br className="mobile"/>blockchain technology to create a<br className="mobile"/> user-focused<br className="break"/> electronic health <br className="mobile"/>record with enhanced security and<br className="mobile"/><br className="break"/> accessibility for service providers<br className="mobile"/> and end-users.</p>
        <button className="start">Get Started</button>
        <img className="scroll" src={Scroll}/>
      </div>
      <div className="mobile alignment">
          <h5 className="service">OUR SERVICES ARE</h5>
          <h3 className="serviceList">Telehealth</h3>
          <h3 className="serviceList">Smart Prescription System (SPSTM)</h3>
          <h3 className="serviceList">Healthcare Marketplace</h3>
          <h3 className="serviceList">Memberships & Subscriptions</h3>
          <h3 className="serviceList">Referral System</h3>
          <h3 className="serviceList">Billing, Receipts & Insurance</h3>
      </div>
      </div>

      <div>
      <div>
      <div className="benefit">
        <ul className="benefit-ul">
          <li className="benefit-li"> <FaCircle className="circle-icon" /> BENEFITS OF USING OUR PLATFORM</li>
        </ul>
      </div>
      <div className="main-improved">
      <Container>
      <Row>
        <Col  xs={1}>
          <div className="benefit-line1">

          </div>
          <div className="benefit-line2">

          </div>
        </Col>
        <Col  xs={7}>
        <div className="mainDiv">
        <h1 className="improved">Improved Data Security</h1>
        <p className="storing">By storing data across its peer-to-peer network,<br/>blockchain eliminates the risk that comes with data being<br/> stored centrally. This distributed ledger technology<br/> ensures that records are less likely to be corrupted.</p> 
        <h1 className="numberOne">1</h1>
        </div>
        </Col>
        <Col>
          <img className="benefit-img" src={Security}/>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
        <Col  xs={1}>
          <div className="benefit-line2">

          </div>
        </Col>
        <Col  xs={7}>
          <div className="mainDiv">
          <h1 className="improved">Enhanced Transparency</h1>
        <p className="storing">All transactions and stored data on the blockchain is <br/>public and easily verifiable. This ensures that information<br/> shared among participating parties is transparent<br/> and can’t be manipulated or tampered with in any way.</p> 
        <h1 className="numberTwo">2</h1>
          </div>
        </Col>
        <Col>
          <img className="benefit-img trans" src={Transparency}/>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
        <Col  xs={1}>1 of 3</Col>
        <Col  xs={7}>
          <div className="mainDiv">
          <h1 className="improved">Increased Efficiency & Automation</h1>
        <p className="storing">Dapps running on Blockchain technology can automate <br/>healthcare processes such as setting up appointments,<br/> structuring medical data, and more which wil help save<br/> time and money for organizations within the industry.</p> 
        <h1 className="numberOne">3</h1>
          </div>
        </Col>
        <Col>
          <img className="benefit-img trans" src={Automation}/>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
        <Col  xs={1}>1 of 3</Col>
        <Col  xs={7}>
          <div className="mainDiv">
          <h1 className="improved">Improved Access to Patient Data</h1>
        <p className="storing">Through secure access management enabled by<br/> blockchain technology, healthcare providers and patients<br/> alike can access patient health records quickly, further<br/> streamlining care delivery processes while eliminating<br/> duplicity of efforts.</p> 
        <h1 className="numberTwo">4</h1>
          </div>
        </Col>
        <Col>
          <img className="benefit-img" src={Patient}/>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
        <Col  xs={1}>1 of 3</Col>
        <Col  xs={7}>
        <div className="mainDiv">
        <h1 className="improved">More Accurate Records Keeping</h1>
        <p className="storing">Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/> donec consectetur semper nunc in molestie. <br/>
Sed velit lectus, porttitor eu convallis sit amet, semper<br/> eget mauris. Integer in pulvinar mauris. Donec facilisis<br/> placerat magna sed cursus.</p> 
<h1 className="numberTwo">5</h1>
        </div>
        </Col>
        <Col>
          <img className="benefit-img" src={Record}/>
        </Col>
      </Row>
    </Container>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Hero