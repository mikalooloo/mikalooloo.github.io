import React from "react";
import Accordion from "react-bootstrap/Accordion";

// props:
// bugLink (link to issues page with tag: bug)
// createLink (link to new issue page)
// darkMode
export default function PluginReport(props) {

  return (
    <div className={props.darkMode ? "dark-linkText" : "light-linkText"} style={{ "textAlign": "center" }}>
      <h4>ready to report a bug? follow these instructions:</h4>
      <Accordion className={props.darkMode ? "gray-accordion" : "pink-accordion"} style={{ "width": "50rem", "margin": "0 auto", "paddingRight": "3%", "paddingTop": "1%", "textAlign": "left" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>prerequisite: be logged into a GitHub account</Accordion.Header>
          <Accordion.Body>
            If you don't already have one, head over
            to: <a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">https://github.com/signup</a>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>view existing bug reports</Accordion.Header>
          <Accordion.Body>
            <p>
              Head on over
              to <a href={props.bugLink} target="_blank" rel="noopener noreferrer">this plugin's Issues page</a> and
              look to see if there are already any existing bug reports for the same issue you're already having.<br /><br />
              If you're having the same issue, feel free to react to the original post.
              If you have differing or more information to provide, feel free to leave a comment!<br /><br />
              If you weren't able to find your bug already reported, move onto the next step!
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>write your own bug report</Accordion.Header>
          <Accordion.Body>
            <p>
              Couldn't find an issue with your same problem? No problem!
              Head to <a href={props.createLink} target="_blank" rel="noopener noreferrer">this plugin's open an issue page</a> and
              click on the "Get started" next to "Bug Report".<br />
            </p>
            Here, you'll need to accomplish the following tasks: <br />
            <ul>
              <li>Describe the bug</li>
              <li>List how to repeat the bug</li>
              <li>What you expected to happen {`(`}why you think this is a bug {`)`}</li>
              <li>Attach helpful screenshots if possible</li>
              <li>Provide details about what versions of Minecraft, my plugin, etc. you're running</li>
              <li>List any other details or context applicable</li>
              <li>Add a title to describe the bug after "{`[`}BUG{`]`}"</li>
              <li>Click "Submit new issue"</li>
            </ul>
            If you're able to do all of that, I'll get back to you as soon as possible about the bug!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}