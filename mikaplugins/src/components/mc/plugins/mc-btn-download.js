import React from "react";
// bootstrap
import Button from "react-bootstrap/Button";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// props:
// link (assumed given)
// download name (assumed given)
export default function MCDownload(props) {
  let link = props.link;
  let name = props.name;

  return (
    <div style={{"textAlign":"center", "paddingBottom":"2%"}}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button variant="secondary">
          <FontAwesomeIcon icon={solid("download")} />&nbsp;&nbsp;download {name}
        </Button>
      </a>
    </div>
  );
}