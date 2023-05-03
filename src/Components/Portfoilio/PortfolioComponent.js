import React from "react";
import { Container, Row } from "react-bootstrap";
import "./portfolioStyles.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import allforone from '../../Assets/allforone.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "@mui/material";

export default function PortfolioComponent() {
  return (
    <>
        <Navbar className="navStyle" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navTitle" href="#home">Find me on</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.linkedin.com/in/jovannj-c/"><LinkedInIcon/></Nav.Link>
            <Nav.Link href="https://tinyurl.com/3kk4m6sz"><GitHubIcon/></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Container fluid className="portCont">
        <Row>
          <div>
            <h1 className="titleTxt">Welcome!</h1>
          </div>
        </Row>
        <Row className="abtRow">
          <div className="abtMeBx">
            <h2 className="introTxt">Frontend Developer</h2>
            <p className="introTxt">
              Hello welcome to my portfolio webpage, my name is Jovann Contreras
              I am Junior Software Engineer who enjoys working on the frontend{" "}
            </p>
          </div>
        </Row>
        <Row className="projectsRow">
          <div className="projectsBx">
            <h2 className="projectsTitle">Projects and more coming soon</h2>
           <Link href="https://jcontreras3.github.io/ContrerasJAllForOneSprintDay2/"> <img className="allforonestyle" src={allforone}/></Link>
          
          </div>
        </Row>
        <Row className="lanRow">
          <div className="">
            <h2 className="lanTxt">Languages/Frameworks/Productivity Tools</h2>
            <p className="lanTxt2">
              These Are some of the languages I have learnt at CodeStackAcademy!
              A one year program that I attended to obtain these skills.
            </p>
          </div>
          <div>
            <h3 className="lanTitle">Languages</h3>
            <p>dfdf</p>
          </div>
          <div>
            <p>dfdf</p>
          </div>
          <div>
            <p>dfdf</p>
          </div>
        </Row>
      </Container>
    </>
  );
}
