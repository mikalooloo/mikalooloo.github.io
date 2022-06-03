import "./pg-plugin.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../theme";
import PluginDownload from "./plugin-btn-download";
// bootstrap
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Accordion from "react-bootstrap/Accordion";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function PluginInstall(props) {
  let name = props.name ? props.name : "";
  let spigotLink = props.spigotLink ? props.spigotLink : "";
  // theme
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;

  const downloadSpiel = () => {
    return (
      <div>
        First, you'll need to download the desired plugin. This can be done through Spigot. To get there, you can:<br /><br />
        <ul style={{ "display": "inline-block", "textAlign": "left" }}>
          <li>Click on the download button above {`(`}external link to Spigot{`)`}</li>
          <li>Or go to the link <a href={spigotLink} target="_blank" rel="noopener noreferrer">{spigotLink}</a> directly</li>
        </ul>
        <br />Once on Spigot, you should see a "Download Now" button to the right of the title. Click that and you'll be good to go!
      </div>
    );
  };

  return (
    <div>
      <PluginDownload link={spigotLink} name={name} />
      <Tabs
        defaultActiveKey="basic"
        fill
        transition={false}
        style={{ "backgroundColor": "white", "borderTopLeftRadius": "5px", "borderTopRightRadius": "5px" }}
        className={darkMode ? "gray-tabs" : "pink-tabs"}
      >
        <Tab eventKey="basic" title="Basic">
          <Accordion className={darkMode ? "gray-accordion" : "pink-accordion"}>
            <Accordion.Item eventKey="1">
              <Accordion.Header>step 1: &nbsp;<FontAwesomeIcon icon={solid("circle-down")} />&nbsp; download</Accordion.Header>
              <Accordion.Body>
                {downloadSpiel()}
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
                Inside your plugins folder, there should now be a new folder that is named "{name}" or something similar.<br />
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
                {downloadSpiel()}
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
                {downloadSpiel()}
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
    </div>
  );
}