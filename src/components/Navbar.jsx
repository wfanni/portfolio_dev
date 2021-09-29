import React from 'react';
import styled from 'styled-components';

const NavbarStructure = ({ className }) => {

    const menuToggle = () => {
        document.getElementById("menu").classList.toggle("open");
        document.querySelector("nav").classList.toggle("open");
    }

    const closeMenu = () => {
        document.getElementById("menu").classList.remove("open");
        document.querySelector("nav").classList.remove("open");
    }
    

    return (
        <div className={className}>
            <button id="menu" onClick={menuToggle}>
                <div id="upper"></div>
                <div id="middle"></div>
                <div id="lower"></div>
            </button>
            <nav>
                <ul>
                    <li>
                        <a onClick={closeMenu} href="#home">Home</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="#about">About</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="#skills">Skills</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="#works">Works</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
      </div>
    )
}

const Navbar = styled(NavbarStructure)`
    #menu {
        display: none;
        position: fixed;
        top: 4vh;
        right: 17vh;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50vh;
        background-color: #ff5d30;

        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 7px;

        cursor: pointer;
        z-index: 1001;

        div {
            background-color: #fff;
            width: 30px;
            height: 2.5px;
        }

        &.open {
            #upper {
                transform: rotate(45deg) translate(4px, 3px);
            }
            #middle {
                display: none;
            }
            #lower {
                transform: rotate(-45deg) translate(4px, -3px);

            }
        }

    }
    nav {        
        position: fixed;
        top: 0;
        width: 100%;
        height: 75px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        background-color: #fff;
        z-index: 1000;

        ul {
            width: 100%;
            height: 75px;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10vh;

            li {
                position: relative;
                padding-bottom: 0.5vh;
                transition: padding-bottom 0.2s;

                a {
                    text-transform: lowercase;
                    font-size: 1.5em;

                    &::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 1.7px;
                        width: 100%;
                        background-color: #ff5d30;
                        transform: scaleX(0);
                        transition: transform 0.3s;
                    }
                }

                &:hover,
                &:focus {
                    padding-bottom: 1.5vh;

                    a::after {
                        transform: scaleX(1.5);
                    }
                }
            }
        }

    }

    /* @media screen and (max-width: 500px) {
        #menu {
            display: flex;
        }

        nav {
            display: none;

            position: fixed;
            top: 0;
            width: 100%;
            height: 200px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
            background-color: #fff;
            z-index: 1000;

            ul {
                width: 100%;
                height: 200px;
                margin-left: 10vh;

                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                gap: 2vh;

                li {
                    position: relative;
                    padding-bottom: 0.5vh;
                    transition: padding-bottom 0.2s;

                    a {
                        text-transform: lowercase;
                        font-size: 1.1em;

                        &::after {
                            display: none;
                        }
                    }

                    &:hover,
                    &:focus {
                        color: #ff5d30;
                    }
                }
            }

            
            &.open {
                display: flex;
            }
        }
    } */

`

export default Navbar
