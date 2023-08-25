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
import JovannResume from "../../Assets/JovannResume23.pdf";
import Serenity from "../../Assets/Serenity.png";
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
              Contreras, A Junior Software Engineer who has the love for
              frontend. Continuing to grow my skills and learn.
            </p>
          </div>
        </Row>

        <Row className="projectsBx">
          <h2 className="projectsTitle">Projects</h2>
          <div className="allGroup">
            <p className="allTitle">All For One</p>
            <div className="languagesUsed">
              <Icon icon="logos:html-5" /> <Icon icon="logos:javascript" />{" "}
              <Icon icon="logos:css-3" />
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
              <Icon icon="logos:html-5" /> <Icon icon="logos:css-3" />
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
              <Icon icon="logos:react" width="15" height="15" />
              <Icon icon="logos:javascript" />
              <Icon className="projectIcon" icon="logos:css-3" />
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
              <Icon icon="logos:javascript" /> <Icon icon="logos:css-3" />
              <Icon icon="logos:html-5" />
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
              <Icon icon="logos:react" width="15" height="15" />
              <Icon icon="logos:javascript" />
              <Icon className="projectIcon" icon="logos:css-3" />
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
          <div className="pokeGroup">
            <p className="pokeTitle">Serenity/In Progress</p>
            <div className="languagesUsed">
              <Icon icon="logos:react" width="15" height="15" />
              <Icon icon="devicon:typescript" width="15" height="15" />
              <Icon className="projectIcon" icon="logos:css-3" />
            </div>
            <Link href="https://serenitymentalhealth.azurewebsites.net/">
              <img className="pokeGenstyle" src={Serenity} />
            </Link>
            <Link
              className="repoStyle"
              href="https://github.com/Jcontreras3/serenityfrontend"
            >
              Repository
            </Link>
          </div>
        </Row>

        <Row className="lanRow">
          <div className="languagesBx">
            <h3 className="lanTitle">Languages</h3>
            <div className="iconGroup">
              <div className="IconGrouping">
                <Icon icon="logos:html-5" width="75" height="75" />
                <p className="IconTxt">HTML</p>
              </div>

              <div className="IconGrouping">
                <Icon
                  className="javaIcon"
                  icon="logos:javascript"
                  width="75"
                  height="75"
                />
                <p className="IconTxt">Javascript</p>
              </div>

              <div className="IconGrouping">
                <Icon
                  className="cSharpIcon"
                  icon="devicon:csharp"
                  color="#f70"
                  width="75"
                  height="75"
                />
                <p className="IconTxt">C Sharp</p>
              </div>

              <div>
                <Icon
                  className="sqlIcon"
                  icon="vscode-icons:file-type-sql"
                  height="75"
                  width="75"
                />
                <p className="sqlTxt">SQL</p>
              </div>

              <div className="Icongrouping">
                <Icon icon="devicon:typescript" height="75" width="75" />
                <p className="IconTxt">TypeScript</p>
              </div>
              <div className="IconGrouping">
                <Icon
                  className="cssIcon"
                  icon="logos:css-3"
                  height="75"
                  width="75"
                />
                <p className="IconTxt">CSS</p>
              </div>
            </div>
          </div>

          <div className="languagesBxTwo">
            <h3 className="lanTitle">Frameworks/Libaries</h3>
            <div className="iconGroup">
              <div className="IconGrouping">
                <Icon icon="mdi:react" color="#00C8FF" width="75" height="75" />
                <p className="IconTxt">React</p>
              </div>
              <div className="ReactNativeIconGrouping">
                <Icon
                  className="IconStyling"
                  icon="tabler:brand-react-native"
                  color="#00C8FF"
                  width="75"
                  height="75"
                />
                <p className="IconTxt">React Native</p>
              </div>
              <div className="IconGrouping">
                <Icon
                  className="IconStyling"
                  icon="skill-icons:bootstrap"
                  width="75"
                  height="75"
                />
                <p className="IconTxt">BootStrap</p>
              </div>

              <div className="IconGrouping">
                <Icon icon="devicon:tailwindcss" width="75" height="75" />
                <p className="IconTxt">TailWind</p>
              </div>

              <p className="dotNetTxt">.NET</p>
            </div>
          </div>
          <div className="languagesBxThree">
            <h3 className="lanTitle">Productivity Tools</h3>
            <div className="iconGroup">
              <div>
                <Icon icon="logos:notion-icon" width="75" height="75" />
                <p className="IconTxt">Notion</p>
              </div>
              <div className="IconGrouping">
                <Icon icon="ph:figma-logo-duotone" width="75" height="75" />
                <p className="IconTxt">Figma</p>
              </div>

              <div className="IconGrouping">
                <Icon icon="logos:adobe-xd" width="75" height="75" />
                <p className="IconTxt">AdobeXD</p>
              </div>
              <div className="IconGrouping">
                <Icon icon="devicon:jira-wordmark" width="75" height="75" />
                <p className="IconTxt">Jira</p>
              </div>

              <div>
                <Icon icon="devicon:azure" width="75" height="75" />
                <p className="IconTxt">Azure</p>
              </div>

              <div className="IconGrouping">
                <Icon icon="logos:postman-icon" width="75" height="75" />
                <p className="IconTxt">Postman</p>
              </div>
              <div className="IconGrouping">
                <Icon
                  icon="vscode-icons:file-type-vscode"
                  width="75"
                  height="75"
                />
                <p className="IconTxt">VSCode</p>
              </div>
              <div className="IconGrouping">
                <Icon icon="logos:slack-icon" width="75" height="75" />
                <p className="IconTxt">Slack</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
      <Row className="footerRow">
        <div className="footerBx">
          <Link href="https://www.linkedin.com/in/jovannj-c/">
            <LinkedInIcon className="linkedIn" />
          </Link>
          <Link href="https://tinyurl.com/3kk4m6sz">
            <GitHubIcon className="gitHub" />
          </Link>
          <Link href={JovannResume} target="_blank">
            <button className="resumeBtn">Resume</button>
          </Link>
        </div>
      </Row>
    </>
  );
}
