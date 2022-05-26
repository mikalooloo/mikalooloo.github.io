import "./mc-plugin.css";
import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { ThemeContext } from '../../theme';
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function MCPlugin(props) {
  const [plugin] = useOutletContext();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container>
      {/* OPENING */}
      <h1 style={{"text-align":"center", "padding-bottom":"1%"}}>{plugin.name}</h1>
      <Image
      fluid="true"
      thumbnail="true"
      src={plugin.thumbnail}
      />
      <Stack style={{"text-align":"center"}}>
        <div>last updated {plugin.updateDate}: {plugin.version}</div>
        <div>works with {plugin.minecraft}</div>
      </Stack>
      <Stack direction="horizontal" style={{"justify-content":"center", "padding-top":"0.5%"}} gap={3} >
        <Button variant="secondary">download</Button>
        <Button variant="secondary">how to</Button>
        <Button variant="secondary">help</Button>
      </Stack>
      {/* OVERVIEW */}
      <Container style={{"padding-top":"3%"}}>
        <Row>
          <Col>{plugin.desc}</Col>
          <Col>
            <Table variant={darkMode ? "dark" : "light" } style={{"text-align":"center"}}>
              <thead>
                <tr><th>Table of Contents</th></tr>
              </thead>
              <tbody>
                <tr><td>overview</td></tr>
                <tr><td>how to install</td></tr>
                <tr><td>how to use</td></tr>
                <tr><td>credits</td></tr>
                <tr><td>documentation</td></tr>
                <tr><td>report bug</td></tr>
                <tr><td>ask question</td></tr>
                <tr><td>suggest feature</td></tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      {/* HOW TO INSTALL */}
      <h1 className="sectionTitle">how to install</h1>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>step 1</Accordion.Header>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>step 2</Accordion.Header>
        </Accordion.Item>
      </Accordion>
      {/* HOW TO USE */}
      <h1 className="sectionTitle">how to use</h1>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>commands</Accordion.Header>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>config</Accordion.Header>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>permissions</Accordion.Header>
        </Accordion.Item>
      </Accordion>
      {/* CREDITS */}
      <h1 className="sectionTitle">credits</h1>
      <div style={{"text-align":"center", "padding-top": "2%"}}>
        <ProgressBar striped animated variant="danger" now={100} />
        <h4 style={{"padding-top":"1%"}}>plugin creator<br /></h4>
        <h3 style={{"padding-bottom":"1%"}}>Mikalooloo</h3>
      </div>
      <ProgressBar striped animated variant="danger" now={100} />
      {/* DOCUMENTATION */}
      <h1 className="sectionTitle">documentation</h1>
      {/* HELP */}
      <h1 className="sectionTitle">help</h1>
      <h3 className="sectionTitle">report a bug</h3>
      <h3 className="sectionTitle">ask question</h3>
      <h3 className="sectionTitle">suggest a feature</h3>
    </Container>
  );
}

// Overview
// How to Install
// How to Use
// Download
// Credits
// Documentation
// Help ->
// Report Bug
// Ask Question
// Suggest Feature