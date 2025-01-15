import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Tooltip } from "react-tooltip";

import github from "../Images/github.png";
import youtube from "../Images/youtube.png";
import instagram from "../Images/instagram.png";
import x from "../Images/x.png";
import twitter from "../Images/twitter.png";
import discord from "../Images/discord.png";
import wordle from "../Images/wordle.png";

import python from "../Images/python.png";
import cs from "../Images/cs.png";
import htmlcssjs from "../Images/htmlcssjs.png";
import react from "../Images/react.png";
import java from "../Images/java.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
    const background = useRef(null);
    const backgroundImg = useRef(null);
    const name = useRef(null);
    const homeText = useRef(null);
    const socials = useRef(null);
    const back = useRef(null);

    const pythonProjects = useRef(null);
    const csProjects = useRef(null);
    const reactProjects = useRef(null);
    const javaProjects = useRef(null);
    const htmlcssjsProjects = useRef(null);

    const currentBackgroundImg = useRef("bolts");

    const location = useLocation();

    // Sleep/delay function
    const timer = ms => new Promise(res => setTimeout(res, ms));

    const [bird, setBird] = useState(x);

    async function devLang(lang) {
        backgroundImg.current.classList.add("hide");
        name.current.classList.add("hide");
        homeText.current.classList.add("hide");
        

        await timer(600);

        backgroundImg.current.classList.remove(currentBackgroundImg.current);
        backgroundImg.current.classList.add(lang);

        switch(lang) {
            case "python":
                pythonProjects.current.classList.remove("hide");
                break;
            case "cs":
                csProjects.current.classList.remove("hide");
                break;
            case "react":
                reactProjects.current.classList.remove("hide");
                break;
            case "java":
                javaProjects.current.classList.remove("hide");
                break;
            case "htmlcssjs":
                htmlcssjsProjects.current.classList.remove("hide");
                break;
        }

        currentBackgroundImg.current = lang;

        backgroundImg.current.classList.remove("hide");
        back.current.classList.remove("hide");
    }

    async function backButton() {
        backgroundImg.current.classList.add("hide");
        back.current.classList.add("hide");

        await timer(600);

        switch(currentBackgroundImg.current) {
            case "python":
                pythonProjects.current.classList.add("hide");
                break;
            case "cs":
                csProjects.current.classList.add("hide");
                break;
            case "react":
                reactProjects.current.classList.add("hide");
                break;
            case "java":
                javaProjects.current.classList.add("hide");
                break;
            case "htmlcssjs":
                htmlcssjsProjects.current.classList.add("hide");
                break;
        }
        
        backgroundImg.current.classList.remove(currentBackgroundImg.current);
        backgroundImg.current.classList.add("bolts");
        currentBackgroundImg.current = "bolts";

        

        backgroundImg.current.classList.remove("hide");
        name.current.classList.remove("hide");
        homeText.current.classList.remove("hide");
    }

    useEffect(() => {
        async function startAnimation() {

            await timer(2500);

            background.current.classList.add("fade");
            backgroundImg.current.classList.remove("show");
            name.current.classList.remove("show");
            
            if(homeText.current != null) {
                homeText.current.classList.remove("hide");
                socials.current.classList.remove("hide");
            }

            backgroundImg.current.classList.remove("boltsAnim");
        }

        startAnimation();
    }, [])

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../index.css";
    
        document.head.appendChild(link);
    
        return () => {
          document.head.removeChild(link); // Cleanup
        };
    }, [location.pathname]);

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
                <div className="backgroundImg bolts boltsAnim show" ref={backgroundImg}></div>
                <div className="name show" ref={name}></div>
            </div>
            
            <div className="homeText hide" ref={homeText}>
                <p className="title">Hi, I'm <span className="yellow"><b>Zeliktric!</b></span></p>
                <p className="subtitle">Full-stack developer and game dev hobbyist</p>

                <br/>

                <div className="about">
                    <div className="devLang" onClick={() => devLang("java")}>
                        <img src={java} />
                    </div>

                    <div className="devLang" onClick={() => devLang("cs")}>
                        <img src={cs} />
                    </div>

                    

                    <div className="devLang" onClick={() => devLang("python")}>
                        <img src={python} />
                    </div>

                    <div className="devLang" onClick={() => devLang("htmlcssjs")}>
                        <img src={htmlcssjs} />
                    </div>

                    <div className="devLang" onClick={() => devLang("react")}>
                        <img src={react} />
                    </div>

                    
                </div>

                {/* <div className="about">
                    <p>
                        I am enthusiastic about developing programs in Python, C#, JavaScript (React) and Java. <br/><br/>
                        <span className="yellow">Python</span>: Made Discord bots and functional websites using discord.py & quart.<br/>
                        <span className="yellow">C#</span>: Experience using Unity to make games. <br/>
                        <span className="yellow">JavaScript (React)</span>: Started using React as a frontend framework to make more functional websites. <br/>
                        <span className="yellow">Java</span>: Used as part of coursework to code a robot maze and develop data structures for an application. <br/>
                        <br/>

                        
                    </p>
                </div> */}
            </div>

            <div class="projects hide" ref={pythonProjects}>
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="wordle logo"
                        height="250"
                        image={python}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Web Dev Coursework (2024)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color="primary" href="https://replit.com/@CoolJames1610/discordpywebdashboardtutorial?v=1#readme.md" target="_blank">
                            Check out the project readme
                        </Button>
                    </CardActions>
                </Card>

                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="wordle logo"
                        height="250"
                        image={python}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Discord.py Web Dashboard Tutorial (2021)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            I made an in-depth tutorial on how you can create a Discord bot using discord.py and have a functional web dashboard to accompany it.<br/>
                            I had made a post about it on replit (no longer exists due to the website changing) and people found it very helpful.<br/><br/>

                            The main template file was corrupted, so I've linked another project that forked from the original!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color="primary" href="https://replit.com/@CoolJames1610/discordpywebdashboardtutorial?v=1#readme.md" target="_blank">
                            Check out the project readme
                        </Button>
                        <Button variant="contained" size="small" color="secondary" href="https://replit.com/@JoshuaAbrego/economybot?v=1#main.py" target="_blank">
                            Check out the project template
                        </Button>
                    </CardActions>
                </Card>

                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="wordle logo"
                        height="250"
                        image={python}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PyChat (2020)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            I made a Discord-like web chat using Python and MongoDB! <br/>
                            You were able to make different servers, manage permissions and chat to others in real time! <br/><br/>

                            This doesn't work anymore sadly, but this was a lot of fun to create!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color="primary" href="https://replit.com/@CoolJames1610/PyChat?v=1#admin.py" target="_blank">
                            Check out the project!
                        </Button>
                    </CardActions>
                </Card>
                
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="wordle logo"
                        height="250"
                        image={python}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Hangman (2020)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            A console game version of hangman!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color="success" href="https://replit.com/@CoolJames1610/Hangman?v=1#main.py" target="_blank">
                            Play Now
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div class="projects hide" ref={csProjects}>
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="wordle logo"
                        height="200"
                        image={cs}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Great Warwick Game Jam (2024)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            I entered The Great Warwick Game Jam 2024 and created a game called Upshot!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color="success" href="https://drive.google.com/drive/folders/1J15edQbEi7W_EBr5RPPcb6bAMmaQmKLh" target="_blank">
                            Download Here
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div class="projects hide" ref={reactProjects}>
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="wordle logo"
                        height="200"
                        image={wordle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Wordle (2024)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            I recreated the popular online game Wordle using React! Check it out by pressing play below.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" size="small" color="success" href="/wordle" target="_blank">
                            Play Now
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div class="projects hide" ref={javaProjects}>
                <Card variant="outlined" sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="wordle logo"
                        height="200"
                        image={java}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Java Coursework (2024)
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                            
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button variant="contained" size="small" color="success">
                            Play Now
                        </Button>
                    </CardActions> */}
                </Card>
            </div>

            <div class="projects hide" ref={htmlcssjsProjects}>
                
            </div>

            <div class="backButton hide" ref={back}>
                <div class="yellow aButton" onClick={() => backButton()}>
                    <h3>Back</h3>
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
                    <Tooltip id="twitter"/>
                    <a href="https://x.com/zeliktric" target="_blank" rel="noreferrer" data-tooltip-id="twitter" data-tooltip-content="Will forever be Twitter!" data-tooltip-place="top">
                        <img src={bird} />
                    </a>
                </div>

                <div className="social">
                    <Tooltip id="discord"/>
                    <a data-tooltip-id="discord" data-tooltip-content="@zeliktric" data-tooltip-place="top">
                        <img src={discord} />
                    </a>
                </div>
                
            </div>
        </div>
        
    </>
}