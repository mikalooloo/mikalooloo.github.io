import "./pg-plugins-list";
import React from "react";
import { useOutletContext, useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../../theme";
import ToggleAccordion from "../../toggle-accordion";
import StringToHTML from "../../string-to-html";
import PluginInstall from "./plugin-install";
import PluginReport from "./plugin-report";
import PluginQuestion from "./plugin-question";
import PluginFeature from "./plugin-feature";
// bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";


export default function Plugin(props) {
  // loading the correct plugin
  const [plugins] = useOutletContext();
  const [plugin, setPlugin] = React.useState(null);
  let { pluginID } = useParams();

  // setting the theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  // allows usage of html variables!
  let howToUseHTML = React.useMemo(() => {
    if (plugin) {
      let temp = plugin.howToUse.map(dict => {
        return dict;
      });
      return temp;
    }
    else {
      return [];
    }
  }, [plugin]);
  let updateLogHTML = React.useMemo(() => {
    if (plugin) {
      let temp = plugin.updateLog.map(dict => {
        return dict;
      });
      return temp;
    }
    else {
      return [];
    }
  }, [plugin]);

  // allows custom icons in html
  const customIcons = {
    "feather": solid("feather"),
    "feather-pointed": solid("feather-pointed"),
    "terminal": solid("terminal"),
    "sliders": solid("sliders"),
    "user-pen": solid("user-pen"),
  };
  // feather icon state
  const [featherIcon, setFeatherIcon] = React.useState(customIcons["feather-pointed"]);
  // allow swapping of feather icon
  const swapFeatherIcon = () => {
    if (featherIcon === customIcons["feather-pointed"]) setFeatherIcon(customIcons["feather"]);
    else setFeatherIcon(customIcons["feather-pointed"]);
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

  // allows the back button to either take you back to your last page, or if there is no page just takes you to plugins list
  const { key: keyLocation } = useLocation();

  // if plugin cannot be found, helps redirect us 
  const navigate = useNavigate();

  // get the right plugin to load
  React.useEffect(() => {
    if (plugins.length !== 0) {
      if (typeof plugins[Number(pluginID)] === 'undefined') navigate("/minecraft/not-found");
      setPlugin(plugins[Number(pluginID)]);
    }
  }, [plugins, pluginID, plugin, navigate]);

  // RENDER
  return (
    <Container>
      {plugin ?
        <Container className="pluginPage">

          {/* OPENING */}

          <div className="opening">
            <Link to={keyLocation === "default" ? "/minecraft/plugins" : -1}>
              <Button variant="secondary"><FontAwesomeIcon icon={solid("caret-left")} /> back</Button>
            </Link>
            <div style={{ "textAlign": "center", "paddingBottom": "1%" }}>
              <h1>{plugin.name}&nbsp;&nbsp;<Badge bg={darkMode ? "light" : "dark"} text={darkMode ? "dark" : "light"}>{plugin.version}</Badge><br /></h1>
              <div style={{ "paddingTop": "1%" }}>{plugin.tagline}</div>
            </div>
            <Image
              fluid="true"
              thumbnail="true"
              src={plugin.thumbnail} />
            <Stack style={{ "textAlign": "center", "paddingTop": "1%" }}>
              <div>last updated {plugin.updateDate}</div>
              <div>works with {plugin.minecraft}</div>
            </Stack>
            <Stack direction="horizontal" style={{ "justifyContent": "center", "paddingTop": "0.5%" }} gap={3}>
              <FontAwesomeIcon icon={solid("crow")} size="lg" />
              <Link to="#install"><Button variant="secondary"><FontAwesomeIcon icon={solid("download")} />&nbsp;&nbsp;download</Button></Link>
              <Link to="#use"><Button variant="secondary">how to</Button></Link>
              <Link to="#help"><Button variant="secondary">help</Button></Link>
              <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
            </Stack>
            <Stack direction="horizontal" style={{ "justifyContent": "center", "paddingTop": "1%" }} gap={3}>
              <Badge pill bg={darkMode ? "light" : "dark"} text={darkMode ? "dark" : "light"}>{plugin.downloads ? plugin.downloads : "0"}&nbsp;&nbsp;downloads</Badge>
              <Badge pill bg={darkMode ? "light" : "dark"} text={darkMode ? "dark" : "light"}>{plugin.ratings ? plugin.ratings : "0"}&nbsp;&nbsp;ratings</Badge>
            </Stack>
          </div>

          {/* OVERVIEW */}

          <div className="iconDivider" style={{ "paddingTop": "6%" }}>
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="horizontal" />
            <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} id="overview" tabIndex="-1" />
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} />
          </div>

          <div className="overview">
            <Container style={{ "paddingTop": "3%" }}>
              <Row>
                <Col style={{ "paddingTop": "6%", "paddingRight": "3%" }}>
                  <StringToHTML string={plugin.overview} darkMode={darkMode} /><br /><br />
                  <h5 style={{ "textAlign": "center" }}><FontAwesomeIcon icon={solid("crow")} size="xl" /> FEATURES <FontAwesomeIcon icon={solid("crow")} size="xl" flip="horizontal" /> </h5>
                  <div style={{ "textAlign": "center", "paddingTop": "1%", "listStylePosition": "inside" }}><StringToHTML string={plugin.features} darkMode={darkMode} /></div>
                </Col>
                <Col xs={5}>
                  <Table variant={darkMode ? "dark" : "light"} style={{ "textAlign": "center" }}>
                    <thead>
                      <tr><th>Table of Contents</th></tr>
                    </thead>
                    <tbody className={darkMode ? "dark-linkText" : "light-linkText"}>
                      <tr><td><Link to="#overview">overview</Link></td></tr>
                      <tr><td><Link to="#update">update log</Link></td></tr>
                      <tr><td><Link to="#install">how to install</Link></td></tr>
                      <tr><td><Link to="#use">how to use</Link></td></tr>
                      <tr><td><Link to="#credits">credits</Link></td></tr>
                      <tr><td><Link to="#docs">documentation</Link></td></tr>
                      <tr><td><Link to="#help">help</Link></td></tr>
                      <tr><td><b style={{ "color": "gray" }}>help: </b><Link to="#bug">report a bug</Link></td></tr>
                      <tr><td><b style={{ "color": "gray" }}>help: </b><Link to="#question">ask a question</Link></td></tr>
                      <tr><td><b style={{ "color": "gray" }}>help: </b><Link to="#feature">suggest a feature</Link></td></tr>
                      <tr><td><Link to="#support">support</Link></td></tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </div>

          {/* UPDATE LOG */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="update" tabIndex="-1" /></div>
          <div className="updateLog">
            <h1 className="sectionTitle">
              update log <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
              <BackUpArrow />
            </h1>
            <Container>
              <Accordion defaultActiveKey={updateLogHTML[1] ? updateLogHTML[0].version : null} className={darkMode ? "gray-accordion" : "pink-accordion"} style={{ "width": "30rem", "margin": "0 auto", "paddingRight": "3%", "textAlign": "left" }}>
                {updateLogHTML.map(item => {
                  return (
                    <Accordion.Item key={item.version} eventKey={item.version}>
                      <Accordion.Header>Version:&nbsp;<b>{item.version}</b>&nbsp;&nbsp;&nbsp;{`[`}Updated {item.date}{`]`}</Accordion.Header>
                      <Accordion.Body>
                        {item.image ?
                          <div className="image">
                            <Image
                              fluid="true"
                              thumbnail="true"
                              src={item.image} />
                            <br /><br />
                          </div> : ""}
                        <h4><FontAwesomeIcon icon={solid("square-plus")} />&nbsp;&nbsp;New Additions</h4>
                        <div style={{ "textAlign": "center" }}><StringToHTML string={item.new} darkMode={darkMode} /></div>
                        <h4><FontAwesomeIcon icon={solid("wrench")} />&nbsp;&nbsp;Bug Fixes</h4>
                        <div style={{ "textAlign": "center" }}><StringToHTML string={item.fixes} darkMode={darkMode} /></div>
                        {item.toggleAccordion ?
                          <div className="toggleAccordion">
                            <br />
                            <ToggleAccordion title={item.toggleAccordion.title} body={<StringToHTML string={item.toggleAccordion.body} darkMode={darkMode} />} variant={item.toggleAccordion.variant} customMode={item.toggleAccordion.customMode} />
                          </div> : ""}
                        <br />
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </Container>
          </div>

          {/* HOW TO INSTALL */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="install" tabIndex="-1" /></div>
          <div className="howToInstall">
            <h1 className="sectionTitle">
              <FontAwesomeIcon icon={solid("crow")} size="lg" /> how to install
              <BackUpArrow />
            </h1>
            <PluginInstall name={plugin.name} spigotLink={plugin.spigotLink} darkMode={darkMode} />
          </div>

          {/* HOW TO USE */}
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="use" tabIndex="-1" /></div>
          <div className="howToUse">
            <h1 className="sectionTitle">
              how to use <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
              <BackUpArrow />
            </h1>
            <Container>
              {plugin && howToUseHTML ?
                <Accordion defaultActiveKey={howToUseHTML[0].title} className={darkMode ? "gray-accordion" : "pink-accordion"} style={{ "width": "50rem", "margin": "0 auto", "paddingRight": "3%", "textAlign": "left" }}>
                  {howToUseHTML.map(item => {
                    return (
                      <Accordion.Item key={item.title} eventKey={item.title}>
                        <Accordion.Header>{item.icon ? <FontAwesomeIcon icon={customIcons[item.icon]} /> : ""}&nbsp;&nbsp;{item.title}</Accordion.Header>
                        <Accordion.Body>
                          {item.image ?
                            <div className="image">
                              <Image
                                fluid="true"
                                thumbnail="true"
                                src={item.image} />
                              <br /><br />
                            </div> : ""}
                          <StringToHTML string={item.body} darkMode={darkMode} />
                          {item.toggleAccordion ?
                            <div className="toggleAccordion">
                              <br />
                              <ToggleAccordion title={item.toggleAccordion.title} body={<StringToHTML string={item.toggleAccordion.body} darkMode={darkMode} />} variant={item.toggleAccordion.variant} />
                            </div> : ""}
                          <br />
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
                :
                <div style={{ "textAlign": "center" }}>
                  <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
                </div>}
            </Container>
          </div>

          {/* CREDITS */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="credits" tabIndex="-1" /></div>
          <div className="credits">
            <h1 className="sectionTitle">
              <FontAwesomeIcon icon={solid("crow")} size="lg" /> credits
              <BackUpArrow />
            </h1>
            <div className="creditsList" style={{ "textAlign": "center" }}>
              <ProgressBar striped animated className={darkMode ? "dark-bar" : "light-bar"} now={100} />
              <h4 style={{ "paddingTop": "2%" }}>plugin creator<br /></h4>
              <h3 style={{ "paddingBottom": "1%" }}>Mikalooloo</h3>
              <h6>special thanks to:</h6>
              <h6 style={{ "paddingBottom": "2%" }}>Malik {`(`}tester{`)`}</h6>
              <ProgressBar striped animated className={darkMode ? "dark-bar" : "light-bar"} now={100} />
              <div style={{ "paddingTop": "1%" }}><ToggleAccordion title="Want to be featured here?" body="Contact me and let me know if you made a social media post about this plugin and/or have a great suggestion for improvement!" variant="silentButton" /></div>
            </div>
          </div>

          {/* DOCUMENTATION */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="docs" tabIndex="-1" /></div>
          <div className="documentation">
            <h1 className="sectionTitle">
              documentation <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
              <BackUpArrow />
            </h1>
            <p style={{ "textAlign": "center", "paddingBottom": "1%" }}>Looking to view the documentation or the source code of this plugin? Look no further!</p>
            <Stack direction="horizontal" gap={4} style={{ "justifyContent": "center", "paddingRight": "2%" }}>
              <a href={plugin.docsLink} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Documentation</Button>
              </a>
              <a href={plugin.codeLink} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Source Code</Button>
              </a>
            </Stack>
          </div>

          {/* HELP */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="help" tabIndex="-1" /></div>
          <div className="help">
            <h1 className="sectionTitle">
              <FontAwesomeIcon icon={solid("crow")} size="lg" /> help
              <BackUpArrow />
            </h1>
            <p className={darkMode ? "dark-linkText" : "light-linkText"} style={{ "textAlign": "center" }}>
              Need some help with this plugin? You're in the right place!<br />If the following isn't helpful, feel free to <Link to="/minecraft/contact-me">contact me</Link>!
            </p>
            <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="bug" tabIndex="-1" /></div>

            <h3 className="sectionTitle">report a bug</h3>
            <PluginReport bugLink={plugin.codeLink + "issues?q=is%3Aopen+is%3Aissue+label%3Abug"} createLink={plugin.codeLink + "issues/new/choose"} darkMode={darkMode} />
            <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="question" tabIndex="-1" /></div>

            <h3 className="sectionTitle">ask a question</h3>
            <PluginQuestion questionLinkClosed={plugin.codeLink + "issues?q=is%3Aissue+label%3Aquestion+is%3Aclosed"} questionLinkOpened={plugin.codeLink + "issues?q=is%3Aissue+label%3Aquestion+is%3Aopen"} createLink={plugin.codeLink + "issues/new/choose"} darkMode={darkMode} />
            <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="feature" tabIndex="-1" /></div>

            <h3 className="sectionTitle">suggest a feature&nbsp;&nbsp;<FontAwesomeIcon icon={solid("egg")} size="lg" /></h3>
            <PluginFeature featureLinkClosed={plugin.codeLink + "issues?q=is%3Aissue+label%3Aenhancement+label%3Awontfix+is%3Aclosed"} featureLinkOpened={plugin.codeLink + "issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement"} createLink={plugin.codeLink + "issues/new/choose"} darkMode={darkMode} />

          </div>

          {/* SUPPORT */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="support" tabIndex="-1" /></div>
          <div className="support" style={{ "textAlign": "center" }}>
            <h1 className="sectionTitle" style={{ "paddingLeft": "2%" }}>
              support <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
              <BackUpArrow />
            </h1>
            <Stack gap={3}>
              <p>Want to help support me? I really appreciate it! Here are some things you can do: </p>
              <Stack gap={3} direction="horizontal" style={{ "justifyContent": "center" }}>
                <a href={plugin.spigotLink} target="_blank" rel="noopener noreferrer">
                  <Button variant={darkMode ? "light" : "dark"}>leave a {`(`}hopefully kind{`)`} review</Button>
                </a>
                <a href="https://ko-fi.com/mikalooloo" target="_blank" rel="noopener noreferrer">
                  <Button variant={darkMode ? "light" : "dark"}>send me a tip</Button>
                </a>
                <Link to="/minecraft/contact-me">
                  <Button variant={darkMode ? "light" : "dark"}>give me a compliment</Button>
                </Link>
              </Stack>
            </Stack>
          </div>

          <div className="iconDivider">
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="both" />
            <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} flip="vertical" />
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="vertical" />
          </div>
        </Container >
        :
        <div style={{ "textAlign": "center" }}>
          <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
        </div>
      }
    </Container >
  );
}