import { useRef, useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

import github from "./Images/github.png";
import youtube from "./Images/youtube.png";
import instagram from "./Images/instagram.png";
import x from "./Images/x.png";
import twitter from "./Images/twitter.png";
import discord from "./Images/discord.png";

export default function Home() {
    const background = useRef(null);
    const bolts = useRef(null);
    const name = useRef(null);
    const homeText = useRef(null);
    const socials = useRef(null);

    // Sleep/delay function
    const timer = ms => new Promise(res => setTimeout(res, ms));

    const [bird, setBird] = useState(x);

    useEffect(() => {
        async function startAnimation() {

            await timer(2500);

            background.current.classList.add("fade");
            bolts.current.classList.remove("show");
            name.current.classList.remove("show");
            
            if(homeText.current != null) {
                homeText.current.classList.remove("hide");
                socials.current.classList.remove("hide");
            }
        }

        startAnimation();
    }, [])

    const hoverBird = (b) => {
        if(b) {
            setBird(twitter);
        } else {
            setBird(x);
        }
    }

    return <>
        <div className="main">
            <div className="background" ref={background}>
                <div className="bolts show" ref={bolts}></div>
                <div className="name show" ref={name}></div>
            </div>
            
            <div className="homeText hide" ref={homeText}>
                <p className="title">Hi, I'm <span className="yellow"><b>Zeliktric!</b></span></p>
                <p className="subtitle">Full-stack developer and game dev hobbyist</p>

                <br/>

                <div className="about">
                    <p>
                        I am enthusiastic about developing programs in Python, C#, JavaScript (React) and Java. <br/><br/>
                        <span className="yellow">Python</span>: Made Discord bots and functional websites using discord.py & quart.<br/>
                        <span className="yellow">C#</span>: Experience using Unity to make games. <br/>
                        <span className="yellow">JavaScript (React)</span>: Started using React as a frontend framework to make more functional websites. <br/>
                        <span className="yellow">Java</span>: Used as part of coursework to code a robot maze and develop data structures for an application. 
                    </p>
                </div>
            </div>

            <div className="socials hide" ref={socials}>
                <div className="social">
                    <a href="https://github.com/zeliktric" target="_blank" rel="noreferrer">
                        <img src={github} />
                    </a>
                </div>

                <div className="social">
                    <a href="https://youtube.com/@zeliktric" target="_blank" rel="noreferrer">
                        <img src={youtube} />
                    </a>
                </div>

                <div className="social">
                    <a href="https://instagram.com/zeliktric" target="_blank" rel="noreferrer">
                        <img src={instagram} />
                    </a>
                </div>

                <div className="social" onMouseOver={() => hoverBird(true)} onMouseOut={() => hoverBird(false)}>
                    <a href="https://x.com/zeliktric" target="_blank" rel="noreferrer">
                        <img src={bird} />
                    </a>
                </div>

                <div className="social">
                    <Tooltip id="discord"/>
                    <a target="_blank" rel="noreferrer" data-tooltip-id="discord" data-tooltip-content="@zeliktric" data-tooltip-place="top">
                        <img src={discord} />
                    </a>
                </div>
                
            </div>
        </div>
        
    </>
}