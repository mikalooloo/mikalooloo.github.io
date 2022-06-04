import "../plugins/pg-plugin.css";
import React from "react";
import { ThemeContext } from "../../theme";
import { Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MCAboutMe() {
  const [tab, setTab] = React.useState("code");

  // setting the theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  // feather icon state
  const [featherIcon, setFeatherIcon] = React.useState(solid("feather-pointed"));
  // allow swapping of feather icon
  const swapFeatherIcon = () => {
    if (featherIcon === solid("feather-pointed")) setFeatherIcon(solid("feather"));
    else setFeatherIcon(solid("feather-pointed"));
  };

  // back up arrows
  const BackUpArrow = () => {
    // this function is so that you are sent to "#overview" even if your current URL is "#overview"
    const resetHash = () => {
      window.location.hash = "#overview";
    }
    return (
      <span className={darkMode ? "dark-linkArrow" : "light-linkArrow"}>&nbsp;&nbsp;<Link to="#overview" onClick={resetHash}><FontAwesomeIcon icon={solid("caret-up")} /></Link></span>
    );
  }

  return (
    <Container>
      <h1 style={{ "textAlign": "center" }}>About Me</h1>

      {/* OVERVIEW */}

      <div className="iconDivider">
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="horizontal" />
        <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} id="overview" tabIndex="-1" />
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} />
      </div>

      <Row>
        <Col className={darkMode ? "dark-linkText" : "light-linkText"} style={{ "paddingTop": "3%" }}>
          Hi! My name is Mikaela and I am a senior working towards a Bachelor of Science in Computer Science with a Mathematics minor at
          Washington State University. I'm currently 21 years old and I love to code! So, in my downtime, I decided to make a Minecraft plugin for the first
          time and see how it turns out. After making <Link to="/minecraft/plugins/0">Mika's Directional</Link> I decided to try my hand out
          at making my own website too. I have a lot of plans, so I'm hopeful that I'll get the time to do them all!
        </Col>
        <Col xs={5}>
          <Table variant={darkMode ? "dark" : "light"} style={{ "textAlign": "center" }}>
            <thead>
              <tr><th>Table of Contents</th></tr>
            </thead>
            <tbody className={darkMode ? "dark-linkText" : "light-linkText"}>
              <tr><td><Link to="#overview"><FontAwesomeIcon icon={solid("face-smile")} />&nbsp;&nbsp;overview</Link></td></tr>
              <tr><td><Link to="#dreams"><FontAwesomeIcon icon={solid("cloud-moon")} />&nbsp;&nbsp;dreams</Link></td></tr>
              <tr><td><Link to="#interests"><FontAwesomeIcon icon={solid("circle-exclamation")} />&nbsp;&nbsp;interests</Link></td></tr>
              <tr><td><Link to="#contact"><FontAwesomeIcon icon={solid("envelope")} />&nbsp;&nbsp;contact me</Link></td></tr>
            </tbody>
          </Table>
        </Col>
      </Row>


      {/* GOALS */}

      <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="dreams" tabIndex="-1" /></div>
      <div className="goals">
        <h1 className="sectionTitle">
          dreams <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
          <BackUpArrow />
        </h1>
        <Table striped hover variant={darkMode ? "dark" : "light"} style={{ "textAlign": "center", "width": "50%", "margin": "0 auto" }}>
          <tbody>
            <tr>
              <td>make my own game</td>
            </tr>
            <tr>
              <td>find a job in cs</td>
            </tr>
            <tr>
              <td>visit outside of the us</td>
            </tr>
          </tbody>
        </Table>
      </div>


      {/* INTERESTS */}

      <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="interests" tabIndex="-1" /></div>
      <div className="interests">
        <h1 className="sectionTitle">
          <FontAwesomeIcon icon={solid("crow")} size="lg" /> interests
          <BackUpArrow />
        </h1>
        <Tab.Container activeKey={tab}>
          <Row>
            <Col sm={4}>
              <ListGroup style={{ "textAlign": "center" }}>
                <ListGroup.Item action className={darkMode ? "dark-list" : "light-list"} onClick={() => setTab("code")}>
                  <FontAwesomeIcon icon={solid("code")} />&nbsp;&nbsp;coding&nbsp;&nbsp;<FontAwesomeIcon icon={solid("code")} />
                </ListGroup.Item>
                <ListGroup.Item action className={darkMode ? "dark-list" : "light-list"} onClick={() => setTab("birds")}>
                  <FontAwesomeIcon icon={solid("crow")} />&nbsp;&nbsp;birds&nbsp;&nbsp;<FontAwesomeIcon icon={solid("crow")} flip="horizontal" />
                </ListGroup.Item>
                <ListGroup.Item action className={darkMode ? "dark-list" : "light-list"} onClick={() => setTab("justice")}>
                  <FontAwesomeIcon icon={solid("users")} />&nbsp;&nbsp;social justice&nbsp;&nbsp;<FontAwesomeIcon icon={solid("users")} />
                </ListGroup.Item>
                <ListGroup.Item action className={darkMode ? "dark-list" : "light-list"} onClick={() => setTab("video")}>
                  <FontAwesomeIcon icon={solid("gamepad")} />&nbsp;&nbsp;video games&nbsp;&nbsp;<FontAwesomeIcon icon={solid("gamepad")} />
                </ListGroup.Item>
                <ListGroup.Item action className={darkMode ? "dark-list" : "light-list"} onClick={() => setTab("tabletop")}>
                  <FontAwesomeIcon icon={solid("dice-five")} />&nbsp;&nbsp;tabletop games&nbsp;&nbsp;<FontAwesomeIcon icon={solid("dice-five")} />
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="code">
                  If I could code all day and not have to worry about silly little human needs like eating and drinking, I absolutely would.
                  Whenever I am coding it feels like only minutes have passed while in reality it's been hours.
                  I think what draws me in is the ability to learn something new every time I sit down and the fact that I love to problem solve.
                  <br /><br />
                  With this, some topics that interest me the most are game development, digital accessibility, frontend and backend web development, and more!
                </Tab.Pane>
                <Tab.Pane eventKey="birds">
                  This one might be obvious from the theme going on here but I do love birds. I have been doing some bird-watching lately,
                  and even got some cheap binoculars with an attachment that allows me to take pictures. Spotting a bird and instantly knowing
                  the species and sex despite it being your first time seeing the species in real life is a really cool experience. Same with
                  pouring over photos at home afterwards trying to figure out what bird you saw earlier and then finally figuring it out.
                  My most memorable time of this was with a Nashville warbler!
                </Tab.Pane>
                <Tab.Pane eventKey="justice">
                  I try to keep myself educated on different types of identities, their issues, and what their communities want done.
                  Intersectionality is incredibly important and because of this I actively try to make sure that my activism
                  includes everyone. This means listening to and uplifting the voices (and wallets) of black and indigenous women, as well as
                  other people of color, LGBT+ people, disabled people, autistic/ADHDer people, and more.
                  I know I will make mistakes but I will do my best to make sure they happen as seldom as possible and that I correct
                  accordingly because while I think that should be the bare minimum, it is unfortunately not.
                  <br /><br />
                  Don't hesitate to reach out to me if I ever do anything that makes you uncomfortable!
                </Tab.Pane>
                <Tab.Pane eventKey="video">
                  Video games have been a long favorite of mine, with the first big game in my life being Minecraft, interestingly enough.
                  The Sims 3 and then eventually the Sims 4 have also been long-term favorites of mine. I have a long list of other games I enjoy, but
                  I won't bore and will just say that a lot of my favorites tend to be strategy, survival, life sim, or other similar genres.
                </Tab.Pane>
                <Tab.Pane eventKey="tabletop">
                  My tabletop game obsession probably started with The Game of Life and only continued from there. I am slowly growing a collection!
                  For more complicated board games, Dead of Winter and Betrayal at House on the Hill would have to be my two favorites at the moment.
                  For simpler games, I really enjoy Spot It and MicroMacro: Crime City!
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      {/* CONTACT ME */}

      <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="contact" tabIndex="-1" /></div>
      <div className="contactMe">
        <h1 className="sectionTitle">
          contact me <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
          <BackUpArrow />
        </h1>
        <h4 className={darkMode ? "dark-linkText" : "light-linkText"} style={{ "textAlign": "center" }}>
          Feel free to <Link to="/minecraft/contact-me/">Contact Me here</Link>!
        </h4>
      </div>

      <div className="iconDivider">
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="both" />
        <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} flip="vertical" />
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="vertical" />
      </div>

    </Container>
  );
}