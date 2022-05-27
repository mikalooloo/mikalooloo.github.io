import "./mc-plugin.css";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../../apis/axios-instance";
import { ThemeContext } from '../../theme';
// bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ProgressBar from "react-bootstrap/ProgressBar";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MCPlugin(props) {
  // loading the correct plugin
  const [plugins, setPlugins] = useState(null);
  const [plugin, setPlugin] = useState(null);
  let { pluginID } = useParams();
  // theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // feather icon 
  const [featherIcon, setFeatherIcon] = useState(solid("feather-pointed"));
  // allows usage of html variables!
  let overviewRef = React.createRef();
  let featuresRef = React.createRef();

  // get plugins list
  useEffect(() => {
    axiosInstance.get("/public/plugins.json")
    .then(response => {
      setPlugins(response.data);
    });
  }, []);

  // get plugin to load
  useEffect(() => {
    if (plugins) setPlugin(plugins[Number(pluginID)]);
  }, [plugins, pluginID]);

  // use html
  useEffect(() => {
    if (plugin) {
      overviewRef.current.innerHTML = plugin.overview;
      featuresRef.current.innerHTML = plugin.features;
    }
  }, [overviewRef, featuresRef, plugin]);

  // allow swapping of feather icon
  const swapFeatherIcon = () => {
    if (featherIcon === solid("feather-pointed")) setFeatherIcon(solid("feather"));
    else setFeatherIcon(solid("feather-pointed"));
  }

  return (
    <Container>
      {plugin ? 
        <Container>

          {/* OPENING */}

          <h1 style={{"textAlign":"center", "paddingBottom":"1%"}}>{plugin.name}</h1>
          <Image
          fluid="true"
          thumbnail="true"
          src={plugin.thumbnail}
          />
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
              <Col style={{"paddingTop":"7%","paddingRight":"3%"}}><div ref={overviewRef} /><br />{plugin.featuresTitle}<div ref={featuresRef} /></Col>
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
                    <tr><td><Link to="#bug">report bug</Link></td></tr>
                    <tr><td><Link to="#question">ask question</Link></td></tr>
                    <tr><td><Link to="#feature">suggest feature</Link></td></tr>
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
          <div style={{"textAlign":"center", "paddingBottom":"2%"}}>
            <a href={plugin.spigotLink} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary">
                <FontAwesomeIcon icon={solid("download")} />&nbsp;&nbsp;download {plugin.name}
              </Button>
            </a>
          </div>

          <Tabs 
            defaultActiveKey="basic" 
            fill 
            transition={false} 
            style={{"backgroundColor":"white", "borderTopLeftRadius":"5px", "borderTopRightRadius":"5px"}}
            className={darkMode ? "gray-tabs" : "pink-tabs"}
            >
            <Tab eventKey="basic" title="Basic">
              <Accordion className={darkMode ? "gray-accordion" : "pink-accordion"}>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>step 1: &nbsp;<FontAwesomeIcon icon={solid("circle-down")} />&nbsp; download</Accordion.Header>
                  <Accordion.Body>
                    First, you'll need to download this plugin. This can be done through Spigot. To get there, you can:<br /><br />
                    <ul style={{"display":"inline-block","textAlign":"left"}}>
                      <li>Click on the "download" button above {`(`}external link to Spigot{`)`}</li>
                      <li>Go to the link <a href={plugin.spigotLink} target="_blank" rel="noopener noreferrer">{plugin.spigotLink}</a> directly</li>
                    </ul><br />
                    Once on Spigot, you should see a "Download Now" button to the right of the title. Click that and you'll be good to go!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>step 2: &nbsp;<FontAwesomeIcon icon={solid("folder")} />&nbsp; move the .jar into your plugins folder</Accordion.Header>
                  <Accordion.Body>
                    Navigate to your server folder. Once there, find the plugins folder (creating one if needed) and place your downloaded .jar into that folder.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>step 3: &nbsp;<FontAwesomeIcon icon={solid("server")} />&nbsp; run server</Accordion.Header>
                  <Accordion.Body>
                    Now, run your server like normal. Once it's fully loaded, the plugin should be installed!<br />
                    Inside your plugins folder, there should now be a new folder that is named "{plugin.name}" or something similar.<br />
                    Any relevant config files will be in there! After editing a config file, either restart your server or use a reload command for it to take effect.<br /><br />
                    
                    If something isn't working right, first try and troubleshoot on your own what's wrong - if you're stumped, feel free to contact me for help!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>

            <Tab eventKey="aternos" title="Aternos">
              <Accordion className={darkMode ? "gray-accordion" : "pink-accordion"}>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>not currently available</Accordion.Header>
                  <Accordion.Body>
                    To add this plugin to Aternos, there needs to be more engagement and downloads on Spigot!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>

            <Tab eventKey="apex" title="Apex Hosting">
              <Accordion className={darkMode ? "gray-accordion" : "pink-accordion"}>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>step 1: &nbsp;<FontAwesomeIcon icon={solid("circle-down")} />&nbsp; download</Accordion.Header>
                  <Accordion.Body>
                    First, you'll need to download this plugin. This can be done through Spigot. To get there, you can:<br /><br />
                    <ul style={{"display":"inline-block","textAlign":"left"}}>
                      <li>Click on the "download" button above {`(`}external link to Spigot{`)`}</li>
                      <li>Go to the link <a href={plugin.spigotLink} target="_blank" rel="noopener noreferrer">{plugin.spigotLink}</a> directly</li>
                    </ul><br />
                    Once on Spigot, you should see a "Download Now" button to the right of the title. Click that and you'll be good to go!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>step 2: &nbsp;<FontAwesomeIcon icon={solid("folder")} />&nbsp; go to FTP File Access</Accordion.Header>
                  <Accordion.Body>
                    First, head to the <a href="https://panel.apexminecrafthosting.com/" target="_blank" rel="noopener noreferrer">Game Panel</a> and click FTP File Access on the left.<br />
                    After logging in, open the plugins folder and click "Upload" on the top left.<br />
                    Drag your downloaded .jar to the right side of the page and wait till it is 100%.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>step 3: &nbsp;<FontAwesomeIcon icon={solid("server")} />&nbsp; restart server</Accordion.Header>
                  <Accordion.Body>
                    Go back to the Game Panel and restart your server. The plugin should be installed!<br /><br />

                    If something isn't working right, feel free to check out the source used to create this guide <a href="https://apexminecrafthosting.com/adding-a-plugin-to-your-server/" target="_blank" rel="noopener noreferrer">here</a>.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
            
            <Tab eventKey="shockbyte" title="Shockbyte">
              <Accordion className={darkMode ? "gray-accordion" : "pink-accordion"}>
                <Accordion.Item eventKey="1">
                <Accordion.Header>step 1: &nbsp;<FontAwesomeIcon icon={solid("circle-down")} />&nbsp; download</Accordion.Header>
                  <Accordion.Body>
                    First, you'll need to download this plugin. This can be done through Spigot. To get there, you can:<br /><br />
                    <ul style={{"display":"inline-block","textAlign":"left"}}>
                      <li>Click on the "download" button above {`(`}external link to Spigot{`)`}</li>
                      <li>Go to the link <a href={plugin.spigotLink} target="_blank" rel="noopener noreferrer">{plugin.spigotLink}</a> directly</li>
                    </ul><br />
                    Once on Spigot, you should see a "Download Now" button to the right of the title. Click that and you'll be good to go!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>step 2: &nbsp;<FontAwesomeIcon icon={solid("folder")} />&nbsp; move the .jar into your plugins folder</Accordion.Header>
                  <Accordion.Body>
                    To upload your plugin to your server directory, Shockbyte suggests you do this via FTP using <a href="https://shockbyte.com/billing/knowledgebase/40/Getting-Started-with-FileZilla.html" target="_blank" rel="noopener noreferrer">FileZilla</a>.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>step 3: &nbsp;<FontAwesomeIcon icon={solid("server")} />&nbsp; restart server</Accordion.Header>
                  <Accordion.Body>
                    Restart your server. The plugin should be installed!<br /><br />

                    If something isn't working right, feel free to check out the source used to create this guide <a href="https://shockbyte.com/billing/knowledgebase/49/How-to-install-Plugins-on-your-Minecraft-Server.html" target="_blank" rel="noopener noreferrer">here</a>.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
          </Tabs>

          {/* HOW TO USE */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="use"/></div>
          <h1 className="sectionTitle">how to use <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" /></h1>
          <Accordion>
            <Accordion.Item eventKey="commands">
              <Accordion.Header>commands</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="config">
              <Accordion.Header>config</Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="permissions">
              <Accordion.Header>permissions</Accordion.Header>
            </Accordion.Item>
          </Accordion>

          {/* CREDITS */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="credits"/></div>
          <h1 className="sectionTitle"><FontAwesomeIcon icon={solid("crow")} size="lg" /> credits</h1>
          <div style={{"textAlign":"center"}}>
            <ProgressBar striped animated variant="danger" now={100} />
            <h4 style={{"paddingTop":"1%"}}>plugin creator<br /></h4>
            <h3 style={{"paddingBottom":"1%"}}>Mikalooloo</h3>
          </div>
          <ProgressBar striped animated variant="danger" now={100} />

          {/* DOCUMENTATION */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="docs"/></div>
          <h1 className="sectionTitle">documentation <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" /></h1>

          {/* HELP */}

          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="help"/></div>
          <h1 className="sectionTitle"><FontAwesomeIcon icon={solid("crow")} size="lg" /> help</h1>
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="bug"/></div>
          <h3 className="sectionTitle">report a bug</h3>
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="question"/></div>
          <h3 className="sectionTitle">ask question</h3>
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="feature"/></div>
          <h3 className="sectionTitle">suggest a feature&nbsp;&nbsp;<FontAwesomeIcon icon={solid("egg")} size="lg" /></h3>
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