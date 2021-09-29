import React from 'react';
import styled from 'styled-components';
// import links from './links.json';

import create_character from '../media/create-character.png';
import beer_logo from '../media/beer-logo.png';
import nasa from '../media/nasa.png';
import weather from '../media/weather.png';
import ngo from '../media/ngo.png';
import odyssey from '../media/odyssey.png';
import shelter from '../media/shelter.png';
import login from '../media/login.png';
import pacific_calm from '../media/pacific-calm.png';
import rick from '../media/rick.png';
import starwars from '../media/starwars.png';
import napoletana from '../media/napoletana.png';


const WorksStructure = ({ className }) => {
    return (
        <div id="works" className={className}>
            <h2>Works</h2>

            <div>

                <a className="works" href="https://github.com/wfanni/create-character.github.io">
                    <img src={create_character} alt="create-character" />
                    <a className="live" href="https://wfanni.github.io/create-character.github.io/">live</a>
                </a>
                <a className="works" href="https://github.com/wfanni/beer-logo-design.github.io">
                    <img src={beer_logo} alt="beer-logo" />
                    <a className="live" href="https://wfanni.github.io/beer-logo-design.github.io/">live</a>
                </a>
                <a className="works" href="https://github.com/wfanni/nasa-potd.github.io">
                    <img src={nasa} alt="nasa" />
                    <a className="live" href="https://wfanni.github.io/nasa-potd.github.io/">live</a>
                </a>
                <a className="works" href="https://github.com/wfanni/weather-app.github.io">
                    <img src={weather} alt="weather" />
                    <a className="live" href="https://wfanni.github.io/weather-app.github.io/">live</a>
                </a>
                <a className="works" href="https://github.com/wfanni/first-ever-landing-page.github-io">
                    <img src={ngo} alt="ngo" />
                    <a className="live" href="https://wfanni.github.io/first-ever-landing-page.github-io/">live</a>
                </a>
                <a className="works" href="https://github.com/wfanni/odyssey-surf-club.github.io">
                    <img src={odyssey} alt="odyssey" />
                    <a className="live" href="https://wfanni.github.io/odyssey-surf-club.github.io/">live</a>
                </a>
                <a className="works" href="https://github.com/wfanni/dog-shelter-landing-page.github.io">
                    <img src={shelter} alt="animal-shelter" />
                    <a className="live" href="https://wfanni.github.io/dog-shelter-landing-page.github.io/">live</a>
                </a>

                <a className="works" href="https://github.com/wfanni/pacific-calm"><img src={pacific_calm} alt="pacific-calm" /></a>
                <a className="works" href="https://github.com/wfanni/login-form"><img src={login} alt="login-form" /></a>
                <a className="works" href="https://github.com/wfanni/rick-and-morty-api"><img src={rick} alt="rick-and-morty" /></a>
                <a className="works" href="https://github.com/wfanni/star-wars-api"><img src={starwars} alt="starwars" /></a>
                <a className="works" href="https://github.com/wfanni/napoletana-pizzeria"><img src={napoletana} alt="napoletana-pizzeria" /></a>

            </div>

        </div>
    )
}

const Works = styled (WorksStructure)`
    position: relative;
    width: 100%;
    height: 210vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 5vh;


    h2 {
        margin-top: 5vh;
        font-size: 2em;
    }

    div {
        width: 70%;
        min-height: 65vh;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(5, 1fr);
        /* grid-auto-flow: column; */
        gap: 10vh;
        
        
    }
    
    .works {
        position: relative;
        cursor: default;
        text-align: center;
        
        img {
            width: 65%;
            box-shadow: -10px 10px 50px rgba(0, 0, 0, 0.25);
            cursor: pointer;            
            transition: opacity 0.3s;

            &:hover {
                opacity: 0.8;
            }
        }

        a {
            position: absolute;
            padding: 1vh;
            color: #fff;

            background: linear-gradient(to left, #ff5d30 0%, #ffa58c 45%, #ffa58c 50%, #ffa58c 65%, #ff5d30 100%);
            background-size: 300% auto;
            animation: shine 2.5s linear infinite;      
            
        }

    }

    @keyframes shine {
        to {
        background-position: 300% center;
        }
    }

    
    /* @media screen and (max-width: 700px) {
        height: 375vh;
        
        h2 {
            margin-top: 0;
            
        }
        
        div {
            margin-top: 0;
            margin-bottom: 10vh;
            gap: 15vh;
        }
        .works {
            img {
                width: 75%;
            }

            a {
                bottom: -6.5vh;
                left: 50%;
                transform: translateX(-50%);

            }

            
        }
    } */


`

export default Works
