import "./mc-plugin.css";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../../theme";
import MCInstall from "./mc-install";
import ToggleAccordion from "../../toggle-accordion";
import StringToHTML from "../../string-to-html";
// bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import MCReportBug from "./mc-report-bug";
import MCQuestion from "./mc-question";
import MCFeature from "./mc-feature";


export default function MCPlugin(props) {
  // loading the correct plugin
  const [plugins] = React.useState(JSON.parse(localStorage.getItem("plugins")));
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
    }}, [plugin]);

  // allows custom icons in html
  const customIcons = {
    "feather" : solid("feather"),
    "feather-pointed" : solid("feather-pointed"),
    "terminal" : solid("terminal"),
    "sliders" : solid("sliders"),
    "user-pen" : solid("user-pen"),
  };
  // feather icon state
  const [featherIcon, setFeatherIcon] = React.useState(customIcons["feather"]);
  // allow swapping of feather icon
  const swapFeatherIcon = () => {
    if (featherIcon === customIcons["feather-pointed"]) setFeatherIcon(customIcons["feather"]);
    else setFeatherIcon(customIcons["feather-pointed"]);
  };

  // HOOKS
  // get the right plugin to load
  React.useEffect(() => {
    if (plugins) setPlugin(plugins[Number(pluginID)]);
  }, [plugins, pluginID]);

  // RENDER
  return (
    <Container>
      {plugin ? 
        <Container>

          {/* OPENING */}

          <h1 style={{"textAlign":"center", "paddingBottom":"1%"}}>{plugin.name}</h1>
          <Image
          fluid="true"
          thumbnail="true"
          src={plugin.thumbnail} />
          <Stack style={{"textAlign":"center", "paddingTop":"1%"}}>
            <div>last updated {plugin.updateDate}: {plugin.version}</div>
            <div>works with {plugin.minecraft}</div>
          </Stack>
          <Stack direction="horizontal" style={{"justifyContent":"center", "paddingTop":"0.5%"}} gap={3} >
            <FontAwesomeIcon icon={solid("crow")} size="lg" />
            <Link to="#install"><Button variant="secondary"><FontAwesomeIcon icon={solid("download")} />&nbsp;&nbsp;download</Button></Link>
            <Link to="#use"><Button variant="secondary">how to</Button></Link>
            <Link to="#help"><Button variant="secondary">help</Button></Link>
            <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" />
          </Stack>

          {/* OVERVIEW */}

          <div className="iconDivider" style={{"paddingTop":"6%"}}>
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="horizontal" id="overview" />
            <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} />
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} />
          </div>
          <Container style={{"paddingTop":"3%"}}>
            <Row>
              <Col style={{"paddingTop":"5%","paddingRight":"3%"}}>
                <StringToHTML string={plugin.overview} darkMode={darkMode} /><br /><br />
                {plugin.featuresTitle}
                <StringToHTML string={plugin.features} darkMode={darkMode} />
              </Col>
              <Col xs={5}>
                <Table variant={darkMode ? "dark" : "light" } style={{"textAlign":"center"}}>
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
                    <tr><td><Link to="#bug">report a bug</Link></td></tr>
                    <tr><td><Link to="#question">ask a question</Link></td></tr>
                    <tr><td><Link to="#feature">suggest a feature</Link></td></tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>

          {/* UPDATE LOG */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="update"/></div>
          <h1 className="sectionTitle">update log <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" /></h1>

          {/* HOW TO INSTALL */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="install"/></div>
          <h1 className="sectionTitle"><FontAwesomeIcon icon={solid("crow")} size="lg" /> how to install</h1>
          <MCInstall name={plugin.name} spigotLink={plugin.spigotLink} />

          {/* HOW TO USE */}
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="use"/></div>
          <h1 className="sectionTitle">how to use <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" /></h1>
          <Container>
            {plugin && howToUseHTML ? 
            <Accordion defaultActiveKey={howToUseHTML[0].title} className={darkMode ? "gray-accordion" : "pink-accordion"} style={{"width":"50rem", "margin": "0 auto", "paddingRight":"3%", "textAlign":"left"}}>
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
                        <ToggleAccordion title={item.toggleAccordion.title} body={<StringToHTML string={item.toggleAccordion.body} darkMode={darkMode} />} variant={item.toggleAccordion.variant} customMode={item.toggleAccordion.customMode} /> 
                      </div> : ""}
                      <br />
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
            :
            <div style={{"textAlign":"center"}}>
              <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
            </div>}
          </Container>
          
          {/* CREDITS */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="credits"/></div>
          <h1 className="sectionTitle"><FontAwesomeIcon icon={solid("crow")} size="lg" /> credits</h1>
          <div style={{"textAlign":"center"}}>
            <ProgressBar striped animated variant="danger" now={100} />
            <h4 style={{"paddingTop":"2%"}}>plugin creator<br /></h4>
            <h3 style={{"paddingBottom":"1%"}}>Mikalooloo</h3>
            <h6>special thanks to:</h6>
            <h6 style={{"paddingBottom":"2%"}}>Malik {`(`}tester{`)`}</h6>
            <ProgressBar striped animated variant="danger" now={100} />
            <div style={{"paddingTop": "1%"}}><ToggleAccordion title="Want to be featured here?" body="Contact me and let me know if you made a social media post about this plugin and/or have a great suggestion for improvement!" variant="silentButton"/></div>
          </div>

          {/* DOCUMENTATION */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="docs"/></div>
          <h1 className="sectionTitle">documentation <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" /></h1>
          <div style={{"textAlign":"center", "paddingBottom":"1%"}}>Looking to view the documentation or the source code of this plugin? Look no further!</div>
          <Stack direction="horizontal" gap={4} style={{"justifyContent":"center", "paddingRight": "2%"}}>
            <a href={plugin.docsLink} target="_blank" rel="noopener noreferrer">
              <Button variant="light">Documentation</Button>
            </a>
            <a href={plugin.codeLink} target="_blank" rel="noopener noreferrer">
              <Button variant="light">Source Code</Button>
            </a>
          </Stack>

          {/* HELP */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="help"/></div>
          <h1 className="sectionTitle"><FontAwesomeIcon icon={solid("crow")} size="lg" /> help</h1>
          <div style={{"textAlign":"center"}}>
            Need some help with this plugin? You're in the right place!<br />If the following isn't helpful at all, feel free to email me at <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href="mailto: mikaminecraft.official@gmail.com" target="_blank" rel="noopener noreferrer">mikaminecraft.official@gmail.com</a></span>!
          </div>
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="bug"/></div>

          <h3 className="sectionTitle">report a bug</h3>
          <MCReportBug bugLink={plugin.codeLink + "issues?q=is%3Aopen+is%3Aissue+label%3Abug"} createLink={plugin.codeLink + "issues/new/choose"} darkMode={darkMode} />
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="question"/></div>
          
          <h3 className="sectionTitle">ask a question</h3>
          <MCQuestion questionLinkClosed={plugin.codeLink + "issues?q=is%3Aissue+label%3Aquestion+is%3Aclosed"} questionLinkOpened={plugin.codeLink + "issues?q=is%3Aissue+label%3Aquestion+is%3Aopen"} createLink={plugin.codeLink + "issues/new/choose"} darkMode={darkMode} />
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="feature"/></div>

          <h3 className="sectionTitle">suggest a feature&nbsp;&nbsp;<FontAwesomeIcon icon={solid("egg")} size="lg" /></h3>
          <MCFeature featureLinkClosed={plugin.codeLink + "https://github.com/mikalooloo/MikaDirectional/issues?q=is%3Aissue+label%3Aenhancement+label%3Awontfix+is%3Aclosed"} featureLinkOpened={plugin.codeLink + "issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement"} createLink={plugin.codeLink + "issues/new/choose"} darkMode={darkMode} />
          
          <div className="iconDivider">
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="both" />
            <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} flip="vertical" />
            <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="vertical" />
          </div>
        </Container>
        :
        <div style={{"textAlign":"center"}}>
          <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
        </div>}
      </Container>
  );
}

// Overview
// Update Log
// How to Install
// How to Use
// Download
// Credits
// Documentation
// Help ->
// Report Bug
// Ask Question
// Suggest Feature