import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "react-bootstrap";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon } from "@iconify/react";
import JovannResume from "../../Assets/JovannResume23.pdf";
import './navBarStyles.css';
export default function NavBarComponent() {
  return (
    <>
      <Navbar className="navStyle" collapseOnSelect expand="lg">
        <Container className="portCont">
          <Navbar.Brand className="navTitle" href="#home">
            Find me on
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{marginTop:10}}>
              <Nav.Link href="https://www.linkedin.com/in/jovannj-c/">
                <LinkedInIcon />
              </Nav.Link>
              <Nav.Link href="https://tinyurl.com/3kk4m6sz">
                <GitHubIcon />
              </Nav.Link>
              <Nav.Link>
                <p className="contactTxt">
                  <Icon icon="logos:google-gmail" /> Jovannj.contreras@gmail.com
                </p>
              </Nav.Link>
              <Nav.Link href={JovannResume} target="_blank">
                <button className="resumeBtn">Resume</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
