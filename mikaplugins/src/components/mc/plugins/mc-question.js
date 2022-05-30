import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

// props:
// bugLink (link to issues page with tag: bug)
// createLink (link to new issue page)
// darkMode
export default function MCQuestion(props) {

  return (
    <div style={{"textAlign":"center"}}>
      <h4>have a question? follow these instructions:</h4>
      <Accordion className={props.darkMode ? "gray-accordion" : "pink-accordion"} style={{"width":"50rem", "margin": "0 auto", "paddingRight":"3%", "paddingTop":"1%", "textAlign":"left"}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>prerequisite: be logged into a GitHub account</Accordion.Header>
          <Accordion.Body>
            If you don't already have one, head over to: <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href="https://github.com/signup" target="_blank" rel="noopener noreferrer">https://github.com/signup</a></span>.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>view answered questions</Accordion.Header>
          <Accordion.Body>
            {props.questionLinkClosed ?
            <p>
              Head on over to <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href={props.questionLinkClosed} target="_blank" rel="noopener noreferrer">this plugin's Issues page</a></span> and look to see if someone has already asked the same question as you.<br />
              <br />If you don't see your question here, try going to <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href={props.questionLinkOpened} target="_blank" rel="noopener noreferrer">this plugin's Issues page</a></span> and see if it's been asked but not answered yet.<br />If so, feel free to react to the original post or leave a comment to show that you have the same question!
              <br /><br />If you weren't able to find your question at all, move onto the next step!
            </p>
            :
            <p>
              First, find the plugin's page <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><Link to="/minecraft/plugins">here on my website</Link></span>.<br />
              Then from there, find the Table of Contents and click "ask a question". There, you'll find the link to the plugin's Issues page.<br />
              Once you find that link, you can review the currently existing issues and see if someone else has already asked the question {`(`}answered or not{`)`}.<br />
              If you weren't able to find your question at all, move onto the next step!
            </p>}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>ask a question</Accordion.Header>
          <Accordion.Body>
            {props.createLink ?
            <p>
              Couldn't find an issue with your same question or weren't satisifed with the answers you found? No problem! Head to <span className={props.darkMode ? "dark-linkText" : "light-linkText"}><a href={props.createLink} target="_blank" rel="noopener noreferrer">this plugin's open an issue page</a></span> and click on the "Get started" next to "Question".<br />
            </p>
            :
            <p>
              Couldn't find an issue with your same question or weren't satisifed with the answers you found? No problem! From that link you found before, click "New issue". From there, click on the "Get started" next to "Question".<br />
            </p>}

            Here, you'll need to accomplish the following tasks: <br />
            <ul>
              <li>List your questions as clearly as possible {`(`}if you have multiple related questions, list them all in one issue - otherwise make separate issues!{`)`}</li>
              <li>Describe where you've looked to find answers before this {`(`}other issues, certain parts of this site, etc.{`)`}</li>
              <li>Describe why these sources weren't helpful to you</li>
              <li>Add a title to describe your question after "{`[`}QUESTION{`]`}"</li>
              <li>Click "Submit new issue"</li>
            </ul>
            If you're able to do all of that, I'll get back to you as soon as possible about your question!
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}