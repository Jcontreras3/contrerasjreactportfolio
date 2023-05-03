import React from "react";
import { Container, Row } from "react-bootstrap";
import "./portfolioStyles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import allforone from "../../Assets/allforone.png";
import HamsterHotel from "../../Assets/HamsterHotel.png";
import AdviceGenerator from "../../Assets/advicegen.png";
import BudgetApp from "../../Assets/Budgetapp.png";
import PokemonApp from"../../Assets/PokemonGen.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@mui/material";

export default function PortfolioComponent() {
  return (
    <>
      <Navbar
        className="navStyle"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="navTitle" href="#home">
            Find me on
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://www.linkedin.com/in/jovannj-c/">
                <LinkedInIcon />
              </Nav.Link>
              <Nav.Link href="https://tinyurl.com/3kk4m6sz">
                <GitHubIcon />
              </Nav.Link>
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
        
          <div className="projectsBx">
            <h2 className="projectsTitle">Projects and more to come!</h2>
            <div className="allGroup">
              <p className="allTitle">All For One</p>
              <div className="languagesUsed">
                <HtmlIcon /> <JavascriptIcon /> <CssIcon />
              </div>
              <Link
                className=""
                href="https://jcontreras3.github.io/ContrerasJAllForOneSprintDay2/"
              >
                <img className="allforonestyle" src={allforone} />
              </Link>
            </div>
            <div className="hamsterGroup">
              <p className="hamsterTitle">Hamster Hotel</p>
              <div className="languagesUsed">
                <HtmlIcon /> <CssIcon />
              </div>
              <Link
                className=""
                href="https://jcontreras3.github.io/ContrerasJHamsterHotel/"
              >
                <img className="hamsterHotelstyle" src={HamsterHotel} />
              </Link>
            </div>
            <div className="adviceGroup">
              <p className="adviceTitle">Advice Generator</p>
              <div className="languagesUsed">
                <p className="reactTxt">React <JavascriptIcon /> <CssIcon /></p>
               
              </div>
              <Link
                className=""
                href="https://jovannadvicegenerator.azurewebsites.net"
              >
                <img className="adviceGenstyle" src={AdviceGenerator} />
              </Link>
            </div>
            <div className="budgetGroup">
              <p className="budgetTitle">Budgetting App</p>
              <div className="languagesUsed">
                 <JavascriptIcon /> <CssIcon /> <HtmlIcon/>
               
              </div>
              <Link
                className=""
                href="https://jcontreras3.github.io/ContrerasJBudgetApp/"
              >
                <img className="budgetGenstyle" src={BudgetApp} />
              </Link>
            </div>
            <div className="pokeGroup">
              <p className="pokeTitle">Pokemon Generator</p>
              <div className="languagesUsed">
              <p className="reactTxt">React <JavascriptIcon /> <CssIcon /></p>
               
              </div>
              <Link
                className=""
                href="http://contrerasjovannpokedex.azurewebsites.net"
              >
                <img className="pokeGenstyle" src={PokemonApp} />
              </Link>
            </div>
          </div>
        
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
