import React from 'react';
import HTML from '../img/html.svg';
import Bootstrap from '../img/bootstrap.svg';
import Css from '../img/css3.svg';
import Github from '../img/Github copy.svg';
import JS from '../img/js.svg';
import MongoDb from '../img/mongodb.png';
import Node from '../img/node.jpg';
import react from '../img/react.svg';
import Redux from '../img/redux.svg';
import Saas from '../img/saas.svg';
import Sql from '../img/sql.svg';


export const About = () => {
    return (
        <div className='about-page' id="about">
            <div>
                <h2 className='about-heading'>About Me</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  </p>
                <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                <p>Things I enjoy doing other than Coding:</p>
                <ul>
                    <li>Painting</li>
                    <li>Travelling</li>
                    <li>Hiking</li>
                    <li>Baking</li>
                </ul>

            </div>
            <div>
                <h2 className='about-heading'>Some of the Tools I Used</h2>
                <div className='tool-imgs'>
                    <a href="#"><img width="50px" height="50px" src={HTML} alt='html'></img></a>
                    <a href="#"><img width="50px" height="50px" src={Css} alt='css'></img></a>
                    <a href="#"><img width="50px" height="50px" src={JS} alt='javascript'></img></a>
                    <a href="#"><img width="50px" height="50px" src={Bootstrap} alt='bootstrap'></img></a>
                    <a href="#"><img width="50px" height="50px" src={Saas} alt='sass'></img></a>
                    <a href="#"><img width="50px" height="50px" src={Node} alt='node'></img></a>
                    <a href="#"><img width="50px" height="50px" src={Sql} alt='postgreSQL'></img></a>
                    <a href="#"><img width="50px" height="50px" src={Github} alt='github'></img></a>
                    <a href="#"><img width="50px" height="50px" src={MongoDb} alt='mongodb'></img></a>
                    <a href="#"><img width="50px" height="50px" src={react} alt='react'></img></a>
                    <a href="#"><img width="50px" height="50px" src={Redux} alt='react-redux'></img></a>

                </div>

            </div>
        </div>
    )
}