import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import SEEDS from '../../Assets/SEEDS.png'

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@mui/material";
import NavBarComponent from "../NavBar/NavBarComponent";

export default function PortfolioComponent() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 1000,
    onRest: () => setFlip(!flip),

  });

  return (
    <>

      <Container fluid className="portCont">
        <NavBarComponent />
        <Row className="abtRow">
          <animated.div style={props} className='animatedClass'>
            <h1 className="allTitle" style={{ color: 'white', textAlign: 'center', marginTop: 30 }}>My name is Jovann Contreras</h1>

            <div style={{ display: 'flex', textAlign: 'center' }}>
              <Col sm={12}>
                <h2 className="frontEndTxt">&lt; Frontend Developer /&gt; </h2>
                <p className="introTxt">
                  Welcome to my Software Engineer Portfolio! I'm Jovann Contreras, a passionate and Junior software engineer with a deep interest for technology and a commitment to creating innovative solutions. Through this portfolio, I invite you to explore my journey through the world of software development and discover the projects, skills, and experiences that define my career.
                </p>
              </Col>

            </div>
            <p className="byMeTxt">Portfolio created by me!</p>
          </animated.div>

        </Row>

        {/* <Row className="projectsBx">
          <Col>
            <div className="allGroup">
              <div className="uh">
                <p>CSS</p>
              </div>
              <div className="uh">

                <p>HTML</p>

              </div>
              <div className="uh">
                <p>JavaScript</p>
              </div>
              <p className="allTitle">All For One</p>
              <div className="languagesUsed">
              <Icon icon="logos:html-5" /> <Icon icon="logos:javascript" />{" "}
              <Icon icon="logos:css-3" />
            </div>

              <Col sm={6}>
                <p>This project had a variety of different little questions and to answer from. It was coded to make sure that whatever the user did they would have to answer it correctly. The theme was inspired by a GameBoy look.</p>
              </Col>
              <Col sm={6} className="uh2">
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
              </Col>

              
            </div>
          </Col>
          <h2 className="projectsTitle">Projects</h2>

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
        </Row> */}
        <Row>
          <Col><p style={{ textAlign: 'center', marginTop: 50, color: '#3b505c' }} className="allTitle">Projects</p></Col>
        </Row>
        <div className="projectsBx">
          <Col>
            <Link
              href="https://serenityhealth.vercel.app/"
              style={{ textDecoration: 'none' }}
            >
              <Card className="cardStyle" style={{ width: '30rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title className="allTitle" style={{ color: '#3b505c' }}> Serenity</Card.Title>
                  <Card.Subtitle style={{ color: '#3b505c' }}>Built with</Card.Subtitle>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <p className="languagesUsed">TypeScript</p>
                    <p className="languagesUsed">CSS</p>
                    <p className="languagesUsed">BootStrap</p>
                  </div>
                  <div>

                    <img style={{ float: 'right' }} className="cardStyle" src={Serenity} />

                  </div>
                  <div>

                    <Card.Text className="cardTxt" style={{ color: '#3b505c' }}>
                      This is a application still currently under development with fellow co coders which is being built to help others going through struggles and has various of tools to help.
                    </Card.Text>

                    <Link
                      className="repoStyle"
                      href="https://github.com/Jcontreras3/ContrerasJHamsterHotel"
                    >
                      Repository
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              style={{ textDecoration: 'none' }}
            >
              <Card className="cardStyle" style={{ width: '30rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title className="allTitle" style={{ color: '#3b505c' }}>Seeds of Partnership</Card.Title>
                  <Card.Subtitle style={{ color: '#3b505c' }}>Built with</Card.Subtitle>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <p className="languagesUsed">React</p>
                    <p className="languagesUsed">Next.js</p>
                    <p className="languagesUsed">TypeScript</p>
                  </div>
                  <div>

                    <img style={{ float: 'right' }} className="cardStyle" src={SEEDS} />

                  </div>
                  <div>

                    <Card.Text className="cardTxt" style={{ width: 300, color: '#3b505c' }}>
                      Worked on this web application while I was interning for CodeStack Academy. I was responsible for updating the web page and adding features for the user experience.
                    </Card.Text>

                    <Link
                      className="repoStyle"
                    >
                      N/A
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              href="https://contrerasjovannpokedexreact.vercel.app/"
              style={{ textDecoration: 'none' }}
            >
              <Card className="cardStyle" style={{ width: '30rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title className="allTitle" style={{ color: '#3b505c' }}>Pokemon Generator</Card.Title>
                  <Card.Subtitle style={{ color: '#3b505c' }}>Built with</Card.Subtitle>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <p className="languagesUsed">React</p>
                    <p className="languagesUsed">JavaScript</p>
                  </div>
                  <div>

                    <img style={{ float: 'right' }} className="cardStyle" src={PokemonApp} />

                  </div>
                  <div>

                    <Card.Text className="cardTxt" style={{ width: 300, color: '#3b505c' }}>
                      This project is a generator where anyone can search a pokemon and the stats of that pokemon, type and move set will be displayed.
                    </Card.Text>

                    <Link
                      className="repoStyle"
                      href="https://github.com/Jcontreras3/contrerasjovannpokedexreact"
                    >
                      Repository
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link
              href="https://jcontreras3.github.io/ContrerasJHamsterHotel/"
              style={{ textDecoration: 'none' }}
            >
              <Card className="cardStyle" style={{ width: '30rem', border: 'none' }}>
                <Card.Body>
                  <Card.Title className="allTitle" style={{ color: '#3b505c' }}>Hamster Hotel</Card.Title>
                  <Card.Subtitle style={{ color: '#3b505c' }}>Built with</Card.Subtitle>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <p className="languagesUsed">HTML</p>
                    <p className="languagesUsed">CSS</p>
                  </div>
                  <div>

                    <img style={{ float: 'right' }} className="cardStyle" src={HamsterHotel} />

                  </div>
                  <div>

                    <Card.Text className="cardTxt" style={{ width: 300, color: '#3b505c' }}>
                      This project was an assignment that I had to rebuild from a refernece image and the webpage had to be responsive
                    </Card.Text>

                    <Link
                      className="repoStyle"
                      href="https://github.com/Jcontreras3/ContrerasJHamsterHotel"
                    >
                      Repository
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </div>

        <Row className="lanRow">
          <Col sm={12} className="languagesBx">
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
                <p className="IconTxt">SQL</p>
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
          </Col>

          <Col sm={12}>
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

              <p className="IconTxt" style={{fontSize:'80px'}}>.NET</p>
            </div>
          </Col>
          <Col sm={12}>
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
          </Col>
        </Row>
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
      </Container>

    </>
  );
}
