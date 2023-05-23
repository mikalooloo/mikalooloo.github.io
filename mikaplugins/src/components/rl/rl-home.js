import "./rl-home.css";
import React from "react";
import CurvedText from "./curved-text";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
// bootstrap
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function RLHome(props) {

    return (
        <Container className="sky justify-content-center">
            <Stack>

                {/* SUN */}

                <div className="sun">
                    <Parallax
                        translateY={[-50, 50]}
                    >
                        <h1>Mikaela Dean</h1>
                        <h3>software engineer</h3>
                        <h3><br />feel free to check out my</h3>
                        <h3><b><a href="https://www.linkedin.com/in/mikaela-dean/" target="_blank" rel="noreferrer" style={{ "color": "black", "textDecorationThickness": "2px" }}>linkedin</a></b> or <b><a href="https://github.com/mikalooloo" target="_blank" rel="noreferrer" style={{ "color": "black", "textDecorationThickness": "2px" }}>github</a></b></h3>
                        <h3><b><Link to="/minecraft/" style={{ "color": "black", "textDecorationThickness": "2px", "font-size": "75%" }}>other portfolio website</Link></b></h3>
                    </Parallax>
                </div>
                <div className="sun-waves">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>

                {/* FIRST TEXT BOX: 4 QUALITIES */}
                <Row>
                    <Col></Col>
                    <Col>
                        <Stack className="textBox-right d-flex align-items-end me-5"
                            style={{"backgroundColor": "rgb(158, 182, 228)", "borderRadius":"15px", "border":"10px solid rgb(158, 182, 228)"}}>
                            <div>passionate</div>
                            <div>skillful</div>
                            <div>driven</div>
                            <div>creative</div>
                        </Stack>
                    </Col>
                </Row>

                {/* SECOND TEXT BOX: 4 MORE QUALITIES */}

                <Row>
                    <Col>
                        <Stack className="textBox-left d-flex align-items-start"
                            style={{"backgroundColor": "rgb(158, 182, 228)", "borderRadius":"15px", "border":"10px solid rgb(158, 182, 228)"}}>
                            <div>resourceful</div>
                            <div>meticulous</div>
                            <div>positive</div>
                            <div>empathetic</div>
                        </Stack>
                    </Col>
                    <Col></Col>
                </Row>
                
            {/* TOP-RIGHT CLOUD */}

            <Row>
                <Col></Col>
                <Col>
                    <Parallax
                        translateX={[70, -65]}
                        translateY={[-225, -88]}
                    >
                        <div className="shadow-top" style={{ "scale": "0.98" }} />
                    </Parallax>

                    <Parallax
                        translateX={[50, -60]}
                        translateY={[-223, -100]}
                    >
                        <div className="cloud" />
                    </Parallax>
                </Col>
            </Row>
                
            {/* TOP-LEFT CLOUD */}

            <Row>
                <Col>
                    <Parallax
                        translateX={[-10, 55, "easeIn"]}
                        translateY={[-250, -75, "easeOut"]}
                    >
                        <div className="shadow" />
                    </Parallax>

                    <Parallax
                        translateX={[0, 70, "easeIn"]}
                        translateY={[-240, -93, "easeOut"]}
                    >
                        <div className="cloud" />
                    </Parallax>
                </Col>
                <Col></Col>
            </Row>

            {/* RIGHT CLOUD */}

            <Row>
                <Col></Col>
                <Col>
                    <Parallax
                        translateX={[30, -20]}
                        translateY={[-180, -75, "easeOut"]}
                    >
                        <div className="shadow" />
                    </Parallax>

                    <Parallax
                        translateX={[30, -20]}
                        translateY={[-190, -100, "easeOut"]}
                    >
                        <div className="cloud" />

                    </Parallax>
                </Col>
            </Row>
                
            <div className="sky-sunset" style={{ "marginTop": "-85vh" }}>

                {/* CENTER TEXT BOX: ABOUT ME */}
                <Stack>
                    <div className="textBox mx-auto" style={{ }}>
                        ABOUT ME
                    </div>

                    {/* RAINBOW: ABOUT ME */}

                    <Parallax>
                        <div className="rainbow pastel">
                            <ul>
                                <li>
                                    Mikaela Dean
                                </li>
                                <li>
                                    Bachelor of Science in Computer Science
                                    Minor in Mathematics
                                </li>
                                <li>
                                    interested in full stack development, game design/development, digital accessibility
                                </li>
                                <li>
                                    looking for full-time employment opportunities
                                </li>
                                <li>
                                    connect with me at mikaeladean.graduate@gmail.com
                                </li>
                            </ul>
                        </div>
                    </Parallax>
                </Stack>
            </div>
            
            
            </Stack>

        {/* SUN SETTING */}

        </Container >
    );
}
