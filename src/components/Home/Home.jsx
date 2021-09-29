import React, {useEffect} from 'react';
import styled from 'styled-components';

// import hero from '../media/hero_photo.svg';
import hero from '../media/hero2.svg';
import pattern from '../media/pattern.png';


const HomeStructure = ({ className }) => {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('myName').style.transform = "translateX(50px)";
            document.getElementById('myName').style.opacity = "1";
        }, 1000);

        setTimeout(() => {
            document.getElementById('whoAmI').style.transform = "translateX(-50px)";
            document.getElementById('whoAmI').style.opacity = "1";
        }, 2000);

        setTimeout(() => {
            document.getElementById('hero').style.transform = "translateY(5vh)";
            document.getElementById('hero').style.opacity = "1";
        }, 500);
    })
    return (
        <div id="home" className={className}>
            <img id="hero" src={hero} alt="hero" />
            <div className="welcome">
                <span>Hi <b>-</b></span>
                <span id="myName">I'm Fanni</span>
                <span id="whoAmI">I'm a <em>Junior Frontend Developer</em></span>
            </div>
        </div>
    )
}

const Home = styled(HomeStructure)`
    width: 100%;
    height: 100vh;

    background-image: url(${pattern});

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50vh;
    
    #hero {
        transform: translateY(-10vh);
        opacity: 0;
        /* clip-path: polygon(50% 0, 100% 0, 94% 62%, 55% 100%, 4% 63%, 0 32%); */
        transition: transform 1.5s, opacity 1.5s;
    }

    .welcome {
        margin-top: -10vh;
        width: 50vh;
        height: 15vh;

        span {
            display: block;
            font-size: 2em;
            em {
                display: inline;
            }
        }

        span:first-child {
            font-size: 2.5em;
            margin-bottom: 1vh;

            b {
                color: #ff5d30;
            }
        }

        #myName {
            text-indent: 5vh;
            opacity: 0;
            transition: transform 0.5s, opacity 0.5s;
        }

        #whoAmI {
            margin-top: 3vh;
            text-indent: -20vh;
            font-size: 1.5em;
            opacity: 0;
            transition: transform 0.5s, opacity 0.5s;

            em {
                color: #ff5d30;
            }
        }
    }

    /* @media screen and (max-width: 700px) {
        flex-direction: column;
        gap: 10vh;


        #hero {
            width: 50%;
            order: 2;
        }

        .welcome {
            margin-top: 0;
            width: 100%;

            span:first-child {
                font-size: 2em;
                text-indent: 12vh;
            }

            #myName {
                font-size: 1.5em;
                text-indent: 17vh;

            }

            #whoAmI {
                text-indent: 15vh;
                font-size: 1em;


            }
        }
    } */

`

export default Home
