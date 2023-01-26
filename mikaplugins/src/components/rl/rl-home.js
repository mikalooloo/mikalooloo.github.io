import "./rl-home.css";
import React from "react";
import CurvedText from "./curved-text";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
// bootstrap
import Stack from "react-bootstrap/Stack";

export default function RLHome(props) {

    return (
        <div>
            <div className="sky">
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
                        <li></li></div>

                    {/* TOP-RIGHT CLOUD */}

                    <Parallax
                        translateX={[83, 28]}
                        translateY={[-249, -100]}
                    >
                        <div className="shadow-top" style={{ "marginLeft": "3vh", "scale": "0.98" }}>

                        </div>
                    </Parallax>

                    <Parallax
                        translateX={[80, 20]}
                        translateY={[-160, -80]}
                    >
                        <div className="cloud">

                        </div>

                    </Parallax>

                    {/* FIRST TEXT BOX: 4 QUALITIES */}

                    <div className="textBox-right">
                        passionate<br />skillful<br />driven<br />creative
                    </div>

                    {/* LEFT CLOUD */}

                    <Parallax
                        translateX={[2, 17, "easeIn"]} // '-20vw', '17vw'
                        translateY={[-275, 15, "easeInOut"]} // '-600vh', '4vh'
                    >
                        <div className="shadow">

                        </div>
                    </Parallax>

                    <Parallax
                        translateX={[5, 20, "easeIn"]}
                        translateY={[-180, -45, "easeInOut"]}
                    >
                        <div className="cloud">

                        </div>

                    </Parallax>

                    {/* SECOND TEXT BOX: 4 MORE QUALITIES */}

                    <div className="textBox-left">
                        resourceful<br />meticulous<br />positive<br />empathetic
                    </div>

                    {/* RIGHT CLOUD */}

                    <Parallax
                        translateX={[18, -20]}
                        translateY={[-160, 100, "easeOut"]}
                    >
                        <div className="shadow" style={{ "marginLeft": "100vh" }}>

                        </div></Parallax>

                    <Parallax
                        translateX={[20, -20]}
                        translateY={[-175, -25, "easeOut"]}
                    >
                        <div className="cloud" style={{ "marginLeft": "100vh" }}>

                        </div></Parallax>

                </Stack>
            </div>

            {/* SUN SETTING */}

            <div className="sky-sunset">
                <Stack>

                    {/* CENTER TEXT BOX: ABOUT ME */}

                    <div className="textBox" style={{ "margin": "0 auto", "marginTop": "10vh", "paddingRight": "1vh" }}>
                        ABOUT ME
                    </div>

                    {/* RAINBOW: ABOUT ME */}

                    <Parallax>
                        <div className="rainbow off">
                            <ul>
                                <li>
                                    <p style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"Mikaela Dean"} />
                                    </p>
                                </li>

                                <li>
                                    <p style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"BS in Computer Science, Minor in Mathematics"} />
                                    </p>
                                </li>
                                <li>
                                    <p style={{ "fontSize": "25%" }}>
                                        <CurvedText text={"interested in full stack web development, game design/development, digital accessibility"} />
                                    </p>
                                </li>
                                <li>
                                    <p style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"looking for full-time employment opportunities"} />
                                    </p>
                                </li>
                                <li>
                                    <p style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"connect with me at mikaeladean.graduate@gmail.com"} />
                                    </p>
                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>
                    </Parallax>
                </Stack>
            </div>
        </div >
    );
}
