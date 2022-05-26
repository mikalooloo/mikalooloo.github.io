import React, { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axios-instance";
import MCPluginCard from "./mc-plugin-card";
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MCPlugins(props) {
  const [plugins, setPlugins] = useState(null);
  const [plugin, setPlugin] = useState(null);
  let location = useLocation();

  useEffect(() => {
    if (location.pathname.endsWith("plugins")) {
      // set to null so all plugins are shown
      setPlugin(null); 
      // get plugins list
      axiosInstance.get("/public/plugins.json")
      .then(response => {
        setPlugins(response.data);
      });
    }
  }, [location]);

  return (
    <Container>
      {plugin ? 
        <div className="plugin">
          <Outlet context={[plugin]} />
        </div>
        :
        <div className="plugins">
          <h1 className="text-center" style={{'padding-bottom':'2%'}}>Plugins</h1>
          <Row>
            {plugins ? plugins.map(item => {
              return (
                <Col>
                  <MCPluginCard plugin={item} click={setPlugin} />
                </Col> 
              );
            }) 
            : 
            <div style={{"text-align":"center"}}>
              <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin /> Loading <FontAwesomeIcon icon={solid("asterisk")} size="lg" spin />
            </div>}
          </Row>
        </div>
      }
    </Container>  
  );
}