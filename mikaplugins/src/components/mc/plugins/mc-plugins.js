import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axios-instance";
import MCPluginCard from "./mc-plugin-card";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MCPlugins(props) {
  const [plugins, setPlugins] = useState(null);

  // get plugins list
  useEffect(() => {
    axiosInstance.get("/public/plugins.json")
    .then(response => {
      setPlugins(response.data);
    });
  }, []);

  return (
    <Container>
      <h1 className="text-center" style={{'paddingBottom':'2%'}}>Plugins</h1>
      <Row>
        {plugins ? 
        plugins.map(item => {
          return (
            <Col key={item.id}>
              <MCPluginCard plugin={item} />
            </Col> 
          );
        }) 
        : 
        <div style={{"textAlign":"center"}}>
          <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
        </div>}
      </Row>
    </Container>  
  );
}