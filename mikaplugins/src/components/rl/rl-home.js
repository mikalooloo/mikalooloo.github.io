import "./rl-home.css";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";
// bootstrap
import Stack from "react-bootstrap/Stack";

export default function RLHome(props) {

    return (
        <div className="sky">
            <Stack>

                {/* SUN */}

                <div className="sun">
                    <Parallax
                        speed={-15}

                    >
                        <h1>Mikaela Dean</h1>
                        <h3><Link to={{ pathname: "https://www.linkedin.com/in/mikaela-dean/" }} target="_blank">linkedin</Link></h3>
                        <h3><Link to={{ pathname: "https://github.com/mikalooloo" }} target="_blank">github</Link></h3>
                        <h3>software engineer</h3>
                    </Parallax>
                </div>
                <div className="sun-waves"><li></li>
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
                    translateX={[2, 17, "easeIn"]}
                    translateY={[-275, 15, "easeInOut"]} // -215, 125
                >
                    <div className="shadow">

                    </div>
                </Parallax>

                <Parallax
                    translateX={[5, 20, "easeIn"]}
                    translateY={[-180, -45, "easeInOut"]} // -200, 0
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

                {/* SUN SETTING */}

                <div className="sky-sunset">
                    {/* CENTER TEXT BOX: ABOUT ME */}

                    <div className="textBox" style={{ "margin": "0 auto", "marginTop": "10vh" }}>
                        ABOUT ME
                        <p style={{ "marginTop": "5vh" }}>
                            BS in Computer Science, Mathematics Minor<br />
                            Interested in full stack web development, game design/development, digital accessibility<br />
                            Looking for employment opportunities<br />
                            Connect with me at mikaeladean.graduate@gmail.com<br /><br />
                            Looking for my Minecraft plugins? Click <b><Link to="/minecraft/" style={{ "color": "white", "textDecorationThickness": "2px" }}>here</Link></b>
                        </p>
                    </div>
                </div>
            </Stack>
        </div>
    );
}
