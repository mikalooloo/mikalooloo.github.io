import "../plugins/mc-plugin.css";
import React from "react";
import { ThemeContext } from "../../theme";
import { Stack, ToggleButton, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import emailjs from "@emailjs/browser";
import ReCAPTCHAv2 from "react-google-recaptcha";

export default function MCEmail() {
  const [wantResponse, setWantResponse] = React.useState(false);

  // setting the theme
  const theme = React.useContext(ThemeContext);
  const darkMode = theme.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_MESSAGE, "#myForm", process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container className="email" style={{ "paddingLeft": "20%", "paddingRight": "20%" }}>
      <Form onSubmit={sendEmail} id="myForm">

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control name="message" as="textarea" rows={6} placeholder="What do you want to message me about?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNickname">
          <Form.Label>From:</Form.Label>
          <Form.Control name="from_name" placeholder="Nickname" />
        </Form.Group>

        <Stack gap={3} direction="horizontal" style={{ "display": "flex", "placeContent": "center" }}>
          Request a response?
          <ToggleButton
            className="mb-2"
            id="toggle-response"
            type="checkbox"
            variant="outline-secondary"
            checked={wantResponse}
            value="1"
            onChange={(e) => setWantResponse(e.currentTarget.checked)}
          >
            {wantResponse ? "Yes" : "No"}
          </ToggleButton>
        </Stack>
        {wantResponse ?
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name="from_email" placeholder="name@example.com" />
          </Form.Group>
          :
          ""}

        <div className="recaptcha" style={{ "paddingTop": "3%", "paddingBottom": "1%", "display": "flex", "placeContent": "center" }}>
          <ReCAPTCHAv2 sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} />
        </div>
        <p className={darkMode ? "dark-linkText" : "light-linkText"} style={{ "textAlign": "center" }}>
          This site is protected by reCAPTCHA and <br />
          Google's <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
        </p>

        <div style={{ "paddingTop": "5%", "textAlign": "center" }}>
          <Button aria-label="Submit" variant="secondary" type="submit">
            Send Message
          </Button>
        </div>
      </Form>
    </Container>
  );
}