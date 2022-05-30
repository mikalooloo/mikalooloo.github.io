import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

// props:
// bugLink (link to issues page with tag: bug)
// createLink (link to new issue page)
// darkMode
export default function MCFeature(props) {

  return (
    <div style={{"textAlign":"center"}}>
      <h4>have a great idea? follow these instructions:</h4>
      <Accordion className={props.darkMode ? "gray-accordion" : "pink-accordion"} style={{"width":"50rem", "margin": "0 auto", "paddingRight":"3%", "paddingTop":"1%", "textAlign":"left"}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>prerequisite: be logged into a GitHub account</Accordion.Header>
          <Accordion.Body>
            If you don't already have one, head over to: <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">https://github.com/signup</a></span>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>view existing feature requests</Accordion.Header>
          <Accordion.Body>
            {props.featureLinkOpened ?
            <p>
              Head on over to <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href={props.featureLinkOpened} target="_blank" rel="noopener noreferrer">this plugin's Issues page</a></span> and look to see if anyone else has already requested this feature already.<br /><br />If someone has, feel free to comment your support or additional ideas/details!<br />
              If someone hasn't, then check out <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href={props.featureLinkClosed} target="_blank" rel="noopener noreferrer">this plugin's Issues page</a></span> to see if your idea has already been requested but had been rejected. If the rejection was due to lack of popularity, feel free to leave a comment with your support! Otherwise, you're out of luck unfortunately.
              <br /><br />If you weren't able to find your idea, move onto the next step!
            </p>
            :
            <p>
              First, find the plugin's page <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><Link to="/minecraft/plugins">here on my website</Link></span>.<br />
              Then from there, find the Table of Contents and click "request a feature". There, you'll find the link to the plugin's Issues page.<br />
              Once you find that link, you can review the currently existing issues and see if someone else has already requested the feature {`(`}rejected or not{`)`}.<br />
              If you weren't able to find your idea, move onto the next step!
            </p>}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>write your own feature request</Accordion.Header>
          <Accordion.Body>
            {props.createLink ?
            <p>
              No one else has posted about your ingenious idea? Awesome! Head to <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href={props.createLink} target="_blank" rel="noopener noreferrer">this plugin's open an issue page</a></span> and click on the "Get started" next to "Feature Request".<br />
            </p>
            :
            <p>
              No one else has posted about your ingenious idea? Awesome! From that link you found before, click "New issue". From there, click on the "Get started" next to "Feature Request".<br />
            </p>}

            Here, you'll need to accomplish the following tasks: <br />
            <ul>
              <li>Describe if your idea is related to fixing a problem for you</li>
              <li>Describe your idea</li>
              <li>Describe alternate ideas you've considered</li>
              <li>Provide any extra context as needed</li>
              <li>Add a title to describe your idea after "{`[`}FEATURE{`]`}"</li>
              <li>Click "Submit new issue"</li>
            </ul>
            If you're able to do all of that, I'll try to review your idea as soon as possible!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}