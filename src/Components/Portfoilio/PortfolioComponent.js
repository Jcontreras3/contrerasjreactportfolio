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
import PokemonApp from "../../Assets/PokemonGen.png";
import JovannResume from "../../Assets/JovannResume23.pdf"
import { Icon } from "@iconify/react";

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
              <Nav.Link href={JovannResume} target="_blank">
                <button className="resumeBtn">Resume</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="portCont">
        <Row>
          <div>
            <h1 className="titleTxt">Welcome!</h1>
            <h1 className="createdByTxt">Created By: Jovann Contreras</h1>
          </div>
        </Row>
        <Row className="abtRow">
          <div className="abtMeBx">
            <h2 className="frontEndTxt">Frontend Developer</h2>
            <p className="introTxt">
              Hello welcome to my portfolio webpage, my name is Jovann
              Contreras, A Junior Software Engineer who enjoys working on the
              frontend.
            </p>
          </div>
        </Row>

        <Row className="projectsBx">
          <h2 className="projectsTitle">Projects</h2>
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
            <Link
              className="repoStyle"
              href="https://github.com/Jcontreras3/allforonereact"
            >
              Repository
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
            <Link
              className="repoStyle"
              href="https://github.com/Jcontreras3/ContrerasJHamsterHotel"
            >
              Repository
            </Link>
          </div>
          <div className="adviceGroup">
            <p className="adviceTitle">Advice Gen</p>
            <div className="languagesUsed">
              <Icon icon="mdi:react" /> <JavascriptIcon /> <CssIcon />
            </div>
            <Link
              className=""
              href="https://jovannadvicegenerator.azurewebsites.net"
            >
              <img className="adviceGenstyle" src={AdviceGenerator} />
            </Link>
            <Link
              className="repoStyle"
              href="https://github.com/Jcontreras3/contrerasjadvicegenerator"
            >
              Repository
            </Link>
          </div>
          <div className="budgetGroup">
            <p className="budgetTitle">Budgetting App</p>
            <div className="languagesUsed">
              <JavascriptIcon /> <CssIcon /> <HtmlIcon />
            </div>
            <Link href="https://jcontreras3.github.io/ContrerasJBudgetApp/">
              <img className="budgetGenstyle" src={BudgetApp} />
            </Link>
            <Link
              className="repoStyle"
              href="https://github.com/Jcontreras3/ContrerasJBudgetApp"
            >
              Repository
            </Link>
          </div>
          <div className="pokeGroup">
            <p className="pokeTitle">Pokemon Gen</p>
            <div className="languagesUsed">
              <Icon icon="mdi:react" /> <JavascriptIcon /> <CssIcon />
            </div>
            <Link href="http://contrerasjovannpokedex.azurewebsites.net">
              <img className="pokeGenstyle" src={PokemonApp} />
            </Link>
            <Link
              className="repoStyle"
              href="https://github.com/Jcontreras3/contrerasjovannpokedexreact"
            >
              Repository
            </Link>
          </div>
        </Row>

        <Row className="lanRow">
          <div className="languagesBx">
            <h3 className="lanTitle">Languages</h3>
            <div className="iconGroup">
              <Icon
                icon="material-symbols:html"
                color="#f70"
                width="75"
                height="75"
              />
              <Icon
                icon="material-symbols:javascript"
                color="#FFDD00"
                width="75"
                height="75"
              />
              <Icon icon="devicon:csharp" color="#f70" width="75" height="75" />
              <Icon
                className="sqlStyle"
                width="75"
                height="75"
                color="#DA3737"
                icon="tabler:sql"
              />
              <Icon
                className="typeStyle"
                width="75"
                height="75"
                icon="mdi:language-typescript"
              />
              <Icon icon="ph:file-css-bold" width="75" height="75" />
            </div>
          </div>

          <div className="languagesBxTwo">
            <h3 className="lanTitle">Frameworks/Libaries</h3>
            <div className="iconGroup">
              <Icon icon="mdi:react" color="#00C8FF" width="75" height="75" />
              <Icon
                icon="tabler:brand-react-native"
                color="#00C8FF"
                width="75"
                height="75"
              />
              <Icon icon="skill-icons:bootstrap" width="75" height="75" />
              <Icon icon="devicon:tailwindcss" width="75" height="75" />
            </div>
          </div>
          <div className="languagesBxThree">
            <h3 className="lanTitle">Productivity Tools</h3>
            <div className="iconGroup">
              <Icon icon="logos:notion-icon" width="75" height="75" />
              <Icon icon="ph:figma-logo-duotone" width="75" height="75" />
              <Icon icon="simple-icons:adobexd" width="75" height="75" />
              <Icon icon="devicon:jira-wordmark" width="75" height="75" />
              <Icon icon="devicon:azure" width="75" height="75" />
              <Icon icon="logos:postman-icon" width="75" height="75" />
              <Icon
                icon="vscode-icons:file-type-vscode"
                width="75"
                height="75"
              />
              <Icon icon="logos:slack-icon" width="75" height="75" />
              <p className="dotNetTxt">.NET</p>
            </div>
          </div>
        </Row>
      </Container>
      <Row className="footerRow">
        <div className="footerBx">
          <Link href="https://www.linkedin.com/in/jovannj-c/">
            <LinkedInIcon />
          </Link>
          <Link href="https://tinyurl.com/3kk4m6sz">
            <GitHubIcon />
          </Link>
          <Link href={JovannResume} target="_blank">
            <button className="resumeBtn">Resume</button>
          </Link>
        </div>
      </Row>
    </>
  );
}
