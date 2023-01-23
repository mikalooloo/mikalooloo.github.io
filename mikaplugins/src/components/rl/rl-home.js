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
                            <h3>full-stack developer</h3>
                            <h3>game designer</h3>
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
<<<<<<< HEAD
                        <div className="shadow-top" style={{ "marginLeft": "3vh", "scale": "0.98" }}>

                        </div>
=======
                        <h1>Mikaela Dean</h1>
                        <h3><Link to={{ pathname: "https://www.linkedin.com/in/mikaela-dean/" }} target="_blank">linkedin</Link></h3>
                        <h3><Link to={{ pathname: "https://github.com/mikalooloo" }} target="_blank">github</Link></h3>
                        <h3>software engineer</h3>
>>>>>>> 99c8acbe4b1736d729cae3e2646b2ba9a2483fc6
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

                    <div className="textBox" style={{ "margin": "0 auto", "marginTop": "10vh" }}>
                        ABOUT ME
<<<<<<< HEAD
=======
                        <p style={{ "marginTop": "5vh" }}>
                            BS in Computer Science, Mathematics Minor<br />
                            Interested in full stack web development, game development, digital accessibility<br />
                            Looking for employment opportunities<br />
                            Connect with me at mikaeladean.graduate@gmail.com<br /><br />
                            Looking for my Minecraft plugins? Click <b><Link to="/minecraft/" style={{ "color": "white", "textDecorationThickness": "2px" }}>here</Link></b>
                        </p>
>>>>>>> 99c8acbe4b1736d729cae3e2646b2ba9a2483fc6
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
                                    <p className="label" style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"education"} />
                                    </p>
                                    <p className="value" style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"BS in Computer Science, Mathematics Minor"} />
                                    </p>
                                </li>
                                <li>
                                    <p style={{ "fontSize": "25%" }}>
                                        <CurvedText text={"interests: game design/development, full stack web development, digital accessibility"} />
                                    </p>
                                </li>
                                <li>
                                    <p style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"looking for: internships and employment opportunities"} />
                                    </p>
                                </li>
                                <li>
                                    <p style={{ "fontSize": "30%" }}>
                                        <CurvedText text={"connect at: mikaeladean10@gmail.com"} />
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </Parallax>
                </Stack>
            </div>
        </div>
    );
}
