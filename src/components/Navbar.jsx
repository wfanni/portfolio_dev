import React from 'react';
import styled from 'styled-components';

const NavbarStructure = ({ className }) => {
    return (
        <div className={className}>
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#works">Works</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
      </div>
    )
}

const Navbar = styled(NavbarStructure)`
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

`

export default Navbar
