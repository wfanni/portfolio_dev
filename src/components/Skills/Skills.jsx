import React from 'react';
import styled from 'styled-components';
import pattern from '../media/pattern.png';
import smallTriangle from '../media/small-triangle.svg';



const SkillsStructure = ({ className }) => {
    return (
        <div id="skills" className={className}>
            <h2>Skills</h2>
            <div className="web-tech">
                <div className="progress-bar">
                    <div className="html">html5</div>
                </div>
                <div className="progress-bar">
                    <div className="css">css3</div>
                </div>
                <div className="progress-bar">
                    <div className="js">javascript</div>
                </div>
                <div className="progress-bar">
                    <div className="react">reactjs</div>
                </div>
                <div className="progress-bar">
                    <div className="backend">backend tech <span>(node.js, express.js)</span></div>
                </div>
            </div>
            <div className="graphic">
                <div className="progress-bar">
                    <div className="ps">adobe photoshop</div>
                </div>
                <div className="progress-bar">
                    <div className="ai">adobe illustrator</div>
                </div>
                <div className="progress-bar">
                    <div className="figma">figma</div>
                </div>
            </div>
        </div>
    )
}

const Skills = styled(SkillsStructure)`
    position: relative;
    width: 100%;
    height: 100vh;

    background-image: url(${pattern});

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10vh;

    h2 {
        position: absolute;
        top: 5vh;
        font-size: 2em;
    }

    .progress-bar {
        width: 600px;
        height: 40px;
        background-color: #e7e7e7;
        margin-bottom: 2vh;
        box-shadow: -10px 4px 30px rgba(0,0,0,0.05);

        &::after {
            position: absolute;
            bottom: -5vh;
            right: 60vh;
            content: '';
            background-image: url(${smallTriangle});
            background-repeat: no-repeat;
            transform: rotate(20deg) scale(0.7);
            width: 300px;
            height: 300px;
            z-index: 100;
            opacity: 0.2;
        }

        div {
            height: inherit;
            background-color: #ff5d30;
            text-indent: 1vh;
            line-height: 38px;
            color: #fff;
            font-family: monospace;
            font-size: 1.1em;
            font-weight: bold;
        }

        .html {
            width: 95%;
        }

        .css {
            width: 95%;
        }

        .js {
            width: 75%;
        }

        .react {
            width: 75%;
        }

        .backend {
            width: 50%;
        }

        .ps {
            width: 70%;
        }

        .ai {
            width: 70%;
        }

        .figma {
            width: 50%;
        }
    }

    /* @media screen and (max-width: 700px) {
        gap: 0;

        .progress-bar {
            width: 250px;
            height: 25px;

            div {
                font-size: 0.7em;
                line-height: 10px;

            }

            .backend {
                span {
                    font-size: 0.4em;
                }
            }
        }

    } */

`

export default Skills
