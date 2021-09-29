import React from 'react';
import styled from 'styled-components';

import bigTriangle from '../media/big-triangle.svg';
import smallTriangle from '../media/small-triangle.svg';

const AboutStructure = ({ className }) => {
    return (
        <div id="about" className={className}>
            <h2>About</h2>
            <p><b>I always loved computers.</b> <span className="first-sentence">Everytime I sat in front of one I felt the unlimited possibilities and <i>creativity</i> that could be done with just one computer and some internet connection.</span> I was always interested in creating websites <span className="comment">(how fun is that!)</span>, but never actually thought I could do it. <q>Oh I'm just a girl, maybe I don't have the brain for it.</q> Despite this thought I started learning <b>HTML</b> and <b>CSS</b> in my teenage years, although I didn't think I would work in the field when the time comes. When the pandemic happened <b>-</b> right after I finished my Tourism course <b>-</b> I knew I had to adapt and learn something that I can really use in the future <span className="comment">(who knows what's coming next!)</span>. I decided to pursue my interest in <span className="web">Web Development</span> and I attended an intensive 4-month <em>Junior Frontend Developer</em> course at <a href="https://codecool.com/en/" target="_blank" rel="noreferrer">Codecool</a>. <span className="last-sentence">I don't know what the future holds and I know I have to learn a <b>LOT</b> more, but I am ready to jump right in!</span></p>
            
        </div>
    )
}

const About = styled(AboutStructure)`
    position: relative;
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5vh;

    &::after {
        position: absolute;
        bottom: 0;
        left: 20vh;
        content: '';
        background-image: url(${smallTriangle});
        background-repeat: no-repeat;
        transform: scale(0.9);
        width: 200px;
        height: 220px;
    }
    
    h2 {
        position: relative;
        margin-top: -2vh;
        font-size: 2em;

        &::after {
            position: absolute;
            top: 0;
            left: 60vh;
            content: '';
            background-image: url(${smallTriangle});
            background-repeat: no-repeat;
            transform: rotate(20deg) scale(0.7);
            width: 300px;
            height: 300px;
            z-index: 100;

        }
    }

    p {
        position: relative;
        max-width: 65%;
        text-align: justify;
        line-height: 5vh;
        font-size: 1.1em;
        background-color: #f1f1f1;
        padding: 3vh;
        font-family: monospace;
        box-shadow: -10px 10px 50px rgba(0, 0, 0, 0.25);

        &::after {
            position: absolute;
            bottom: 0;
            left: -15vh;
            content: '';
            background-image: url(${bigTriangle});
            background-repeat: no-repeat;
            width: 300px;
            height: 300px;
        }

        b:first-child {
            display: inline-block;
            /* text-indent: -5vh; */
            color: #ff5d30;
            font-size: 1.2em;

        }

        b {
            color: #ff5d30;

        }

        .first-sentence {
            display: block;
            margin: 0 0 2vh 10vh;
        }

        i {
            font-weight: bold;
            background: linear-gradient(to right, #e0dd07 0%, #da4c8e 20%, #3114b3 40%, #f02d3e 60%, #4df02d 80%, #e0dd07 100%);
            background-size: 300% auto;

            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            animation: shine 1s linear infinite;           
        }

        .comment {
            font-size: 0.8em;
        }

        q {
            width: 100%;
            display: block;
            text-indent: 22.5%;
            margin: 1vh 0;

            &::before,
            &::after {
                color: #ff5d30;
            }
        }

        em {
            text-decoration: underline;
            text-decoration-style: wavy;
            text-underline-offset: 0.5vh;
            text-decoration-color: #ff5d30;
            
        }

        .web {
            color: #ff5d30;
        }

        a {
            color: #fff;
            background-color: #ff5d30;
            padding: 0.5vh;
            transition: background-color 0.3s;

            &:hover {
                background-color: #f02d3e;
            }
        }

        .last-sentence {
            display: block;
            margin-top: 2vh;
            text-align: end;
            margin: 4vh 0 0 0;
            line-height: 3vh;
            margin-bottom: 0.5vh;
        }
    }


    @keyframes shine {
        to {
        background-position: 300% center;
        }
    }

`

export default About
