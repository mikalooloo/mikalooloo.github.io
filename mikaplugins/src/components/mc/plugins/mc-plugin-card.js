import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function MCPluginCard(props) {
  const plugin = props.plugin;
  const navigate = useNavigate();

  const handleClick = () => {
    props.click(plugin);
    navigate("/minecraft/plugins/" + plugin.id);
  };

  return (
    <Card bg={"dark"} text={"white"} border={plugin.border} onClick={handleClick} style={{ cursor: "pointer" }}>
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
  );
}