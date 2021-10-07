import React from 'react';
import styled from 'styled-components';
import pattern from '../media/pattern.png';
// import contact_photo from '../media/contact-photo.svg';
import contact_photo from '../media/contactme.svg';
import linkedin from '../media/linkedin.png';

const ContactStructure = ({ className }) => {
    return (
        <div id="contact" className={className}>
            <h2>found me interesting? <span>let's talk!</span></h2>
            <div>
                <span>fanniwihl@gmail.com</span>
                <span>Budapest, Hungary</span>
                <a href="https://www.linkedin.com/in/fanni-wihl/"><img src={linkedin} alt="linkedin-account" /></a>
            </div>
                <img className="contact-photo" src={contact_photo} alt="contact" />
            
        </div>
    )
}

const Contact = styled(ContactStructure)`
    position: relative;
    width: 100%;
    height: 100vh;

    background-image: url(${pattern});

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
        position: absolute;
        top: 15vh;
        font-size: 2rem;

        span {
            position: absolute;
            top: 5vh;
            right: -15vh;
            color: #ff5d30;
        }
    }

    div {
        width: 20%;
        margin-left: -80vh;

        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        gap: 5vh;

        span {
            font-size: 1.5em;
        }

        a {
            width: 40px;
            img {
                width: 100%;
                transition: opacity 0.3s, transform 0.3s;
            }

            &:hover {
                img {
                    opacity: 0.8;
                    transform: translateY(-5px);
                }
            }
        }

        
        
    }
    .contact-photo {
        position: absolute;
        top: 35vh;
        right: 60vh;

    }
    // GOOD ONE
    /* @media screen and (max-width: 1000px) {
        h2 {
            top: 10vh;
            font-size: 1.5rem;
            margin-left: -20vh;
        }
        div {
            width: 50%;
            margin-top: 30vh;
        }
        .contact-photo {
            position: relative;
            top: 0;
            left: 30%;
            order: 2;
            width: 25%;
        }
    } */

    /* @media screen and (max-width: 700px) {
        h2 {
            font-size: 1.5em;

            span {
                right: -2vh;

            }
        }

        div {
            width: 70%;
            margin-left: 0;

            span {
                font-size: 1.1em;
            }
            
        }

        .contact-photo {
            width: 50%;
            top: 60vh;
            left: 10vh;
        }
    } */



`

export default Contact
