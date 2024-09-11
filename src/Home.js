import { useRef, useEffect } from "react";

export default function Home() {
    const list = ["Full-stack Developer", "Game Dev Hobbyist", "Gamer", "Man United Fan", "Creative", "Sporty"];

    const background = useRef(null);
    const bolts = useRef(null);
    const name = useRef(null);
    const homeText = useRef(null);

    // Sleep/delay function
    const timer = ms => new Promise(res => setTimeout(res, ms));

    useEffect(() => {
        async function startAnimation() {
            // if(bolts.current.style != null) {
            //     name.current.style.cssText = "opacity: 0%";
            //     bolts.current.style.cssText = "top: -50em !important;";
                
            // }

            // await timer(1000);

            // if(bolts.current != null) {
            //     bolts.current.style.cssText = "";
            //     bolts.current.classList.add("show");
            // }

            // await timer(1500);
            
            // name.current.style.cssText = "transition: opacity 1s, background-size 1s";
            // name.current.classList.add("show");

            await timer(5000);

            background.current.classList.add("fade");
            bolts.current.classList.remove("show");
            name.current.classList.remove("show");
            
            if(homeText.current != null) {
                homeText.current.classList.remove("hide");
            }
        }

        startAnimation();
    }, [])

    return <>
        <div className="main">
            <div className="background" ref={background}>
                <div className="bolts show" ref={bolts}></div>
                <div className="name show" ref={name}></div>
            </div>
            
            <div className="homeText hide" ref={homeText}>
                <p className="title">Hi, I'm <span id="zeliktric"><b>Zeliktric</b></span></p>
                <p className="subtitle">{list[Math.floor(Math.random() * list.length)]}</p>

                <br/>

                <div className="navigation">
                    <div className="navLink active">
                        <p>Home</p>
                        <div className="underline"></div>
                    </div>
                    <div className="navLink">
                        <p>About</p>
                        <div className="underline"></div>
                    </div>
                    <div className="navLink">
                        <p>Projects</p>
                        <div className="underline"></div>
                    </div>
                    <div className="navLink">
                        <p>Contact</p>
                        <div className="underline"></div>
                    </div>
                </div>
            </div>
            

            {/* <div className="zeliktricLogo">
                <img src={zeliktricLogo} alt="zeliktric logo"/>
            </div> */}
        </div>
        
    </>
}