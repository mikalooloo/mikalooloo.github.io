import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from '../../theme';

export default function MCPluginCard(props) {
  const plugin = props.plugin;
  //theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Link to={"/minecraft/plugins/" + plugin.id}>
      <Card bg={darkMode ? "dark" : "light"} text={darkMode ? "white" : "black"} border={plugin.border} style={{ cursor: "pointer" }}>
        <Card.Img variant="top" src={plugin.thumbnail} alt={plugin.alt}/>
        <Card.Body>
          <Card.Title>{plugin.name}</Card.Title>
          <Card.Text>
            {plugin.desc}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated {plugin.updateDate}</small>
        </Card.Footer>
      </Card>
    </Link>
  );
}