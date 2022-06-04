import "./mc-home.css";
import "../plugins/pg-plugin.css";
import React from 'react';
import { ThemeContext } from '../../theme';
import { useOutletContext, Link } from "react-router-dom";
// bootstrap
import Container from "react-bootstrap/Container";
import { Stack } from 'react-bootstrap';
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function MCHome(props) {
  const [plugins] = useOutletContext();
  // get theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  // feather icon state
  const [featherIcon, setFeatherIcon] = React.useState(solid("feather-pointed"));
  // allow swapping of feather icon
  const swapFeatherIcon = () => {
    if (featherIcon === solid("feather-pointed")) setFeatherIcon(solid("feather"));
    else setFeatherIcon(solid("feather-pointed"));
  };


  const [newRelease, setNewRelease] = React.useState();
  const [lastUpdate, setLastUpdate] = React.useState();
  React.useEffect(() => {
    plugins.forEach(item => {
      setNewRelease(plugins.reduce((a, b) => (a.originalDate > b.originalDate ? a : b)));
      setLastUpdate(plugins.reduce((a, b) => (a.updateDate > b.updateDate ? a : b)));
    });
  }, [plugins]);

  return (
    <Container className={darkMode ? "dark-linkText" : "light-linkText"}>
      <Stack gap={1} className="col-md-6 mx-auto" direction="horizontal" style={{ "paddingTop": "4%", "paddingBottom": "4%" }}>
        <h1 style={{ "letterSpacing": "10px", "paddingBottom": "3%" }}>WELCOME!</h1>
        <p style={{ "textAlign": "center" }}>I am a senior CS student making Minecraft plugins for fun and for free!</p>
      </Stack>

      <Stack className="col-md-6 mx-auto" direction="horizontal" style={{ "paddingBottom": "2%" }}>
        <div className={(darkMode ? "dark-" : "light-") + "boxLabel"}>
          NEWEST RELEASE
        </div>
        <div className={(darkMode ? "dark-" : "light-") + "boxValue"}>
          {newRelease ?
            <Link to={"/minecraft/plugins/" + newRelease.id}>{newRelease.name}</Link>
            : "Loading..."}
        </div>
      </Stack >

      <Stack className="col-md-6 mx-auto" direction="horizontal" style={{ "paddingBottom": "2%" }}>
        <div className={(darkMode ? "dark-" : "light-") + "boxLabel"}>
          LAST UPDATED
        </div>
        <div className={(darkMode ? "dark-" : "light-") + "boxValue"}>
          {lastUpdate ?
            <div>
              <Link to={"/minecraft/plugins/" + newRelease.id}>{lastUpdate.name}</Link>
            </div>
            : "Loading..."}
        </div>
      </Stack>

      <Stack className="col-md-6 mx-auto" direction="horizontal">
        <div className={(darkMode ? "dark-" : "light-") + "boxLabel"}>
          CURRENT PROJECT
        </div>
        <div className={(darkMode ? "dark-" : "light-") + "boxValue"}>
          finishing up this website :{`)`}
        </div>
      </Stack>

      <div style={{ "textAlign": "center", "paddingTop": "5%" }}>
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="both" />
        <FontAwesomeIcon icon={featherIcon} size="xl" onClick={swapFeatherIcon} transform={{ rotate: -50 }} flip="vertical" />
        <FontAwesomeIcon icon={featherIcon} size="lg" onClick={swapFeatherIcon} transform={{ rotate: 10 }} flip="vertical" />
      </div>
    </Container>
  );
}
