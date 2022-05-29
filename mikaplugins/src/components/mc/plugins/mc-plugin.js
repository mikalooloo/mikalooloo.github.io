import "./mc-plugin.css";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ThemeContext } from "../../theme";
import MCInstall from "./mc-install";
import ToggleAccordion from "../../toggle-accordion";
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
// using html
import parse, { attributesToProps, domToReact } from 'html-react-parser';
import DOMPurify from 'dompurify';

export default function MCPlugin(props) {
  // loading the correct plugin
  const [plugins] = useState(JSON.parse(localStorage.getItem("plugins")));
  const [plugin, setPlugin] = useState(null);
  let { pluginID } = useParams();
  // theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // feather icon 
  const [featherIcon, setFeatherIcon] = useState(solid("feather-pointed"));
  // allows usage of html variables!
  let howToUseHTML = useMemo(() => { 
    if (plugin) { 
      let temp = plugin.howToUse.map(dict => {
        return dict;
      });
      return temp;
    }
    else {
      return [];
    }}, [plugin]);

  // use to sanitize and parse a html string
  const cleanHTML = (htmlString) => {
    return parse(DOMPurify.sanitize(htmlString, sanitizeOptions), parseOptions);
  }
  // replaces tags with the right color mode
  const parseOptions = {
    replace: domNode => {
      if (!domNode.attribs) {
        return;
      }

      // adds quote blocking
      if (domNode.attribs.id === "q") {
        return darkMode ? <div className="dark-colorBlocked">{domToReact(domNode.children, parseOptions)}</div> : <div className="light-colorBlocked">{domToReact(domNode.children, parseOptions)}</div>;
      }

      // adds custom link coloring
      if (domNode.name === "a") {
        const props = attributesToProps(domNode.attribs);
        return darkMode ? <span className="dark-linkText"><a {...props}>{domToReact(domNode.children, parseOptions)}</a></span> : <span className="light-linkText"><a {...props}>{domToReact(domNode.children, parseOptions)}</a></span>;
      }
    }
  };
  // allows more tags/attributes/etc when sanitizing
  const sanitizeOptions = {
    ADD_ATTR: [ "style", "class", "className", "quote" ],
    ADD_TAGS: [ "backgroundColor", "id" ]
  }
  // allows custom icons in html
  const customIcons = {
    "terminal" : solid("terminal"),
    "sliders" : solid("sliders"),
    "user-pen" : solid("user-pen"),
  };
  // uses the above 

  // get plugin to load
  useEffect(() => {
    if (plugins) setPlugin(plugins[Number(pluginID)]);
  }, [plugins, pluginID]);

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
                {cleanHTML(plugin.overview)}<br /><br />
                {plugin.featuresTitle}
                {cleanHTML(plugin.features)}
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
          <MCInstall name={plugin.name} spigotLink={plugin.spigotLink} />

          {/* HOW TO USE */}
          <div className="iconDivider"><FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} id="use"/></div>
          <h1 className="sectionTitle">how to use <FontAwesomeIcon icon={solid("crow")} size="lg" flip="horizontal" /></h1>
          <Container>
            {plugin && howToUseHTML ? 
            <Accordion defaultActiveKey={howToUseHTML[0].title} className={darkMode ? "gray-accordion" : "pink-accordion"} style={{"width":"50rem", "margin": "0 auto", "paddingRight":"3%", "textAlign":"left"}}>
              {howToUseHTML.map(item => {
                return (
                  <Accordion.Item eventKey={item.title}>
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
                      {cleanHTML(item.body)}
                      {item.toggleAccordion ? 
                      <div className="toggleAccordion">
                        <br />
                        <ToggleAccordion title={item.toggleAccordion.title} body={cleanHTML(item.toggleAccordion.body)} variant={item.toggleAccordion.variant} customMode={item.toggleAccordion.customMode} /> 
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

/*
plugin.howToUse.map(item => {
              return (
                <Accordion.Item eventKey={item.title}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body>
                    {item.image ? 
                    <Image
                      fluid="true"
                      thumbnail="true"
                      src={item.image}
                    /> : ""}
                    {item.body}
                    {item.toggleAccordion ? 
                    <ToggleAccordion
                      title={item.toggleAccordion.title}
                      body={item.toggleAccordion.body}
                      variant={item.toggleAccordion.variant}
                    />
                    : ""}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })
            
            
            plugin.howToUse.map((dict, i) => {
        return howToUseRef.current[i].innerHTML = dict.map(item => {
          return item;
        })
      })

      plugin.howToUse.map((itemId, id) => {
        return (
          howToUseRef = map((item, i) => {
          return item;
        }))
        howToUseRef.current[i][0].innerHTML = item.title;
        howToUseRef.current[i][1].innerHTML = item.body;
        howToUseRef.current[i][2].innerHTML = item.image ? item.image : null;
        howToUseRef.current[i][3].innerHTML = item.toggleAccordion ? item.toggleAccordion : null;
      })
      
      plugin.howToUse.map((item, i) => {
              return (<Accordion.Item key={i}>
                <Accordion.Header><div ref={(el) => {howToUseRef.current[i].innerHTML = item.title; el = howToUseRef.current[i];}}/></Accordion.Header> 
                <Accordion.Body><div ref={(el) => {howToUseRef.current[i].innerHTML = item.body; el = howToUseRef.current[i];}}/></Accordion.Body>
              </Accordion.Item>);
            })
            */