import React from 'react';
import meetupLogin from '../img/meetupLogin.png';
import meetupApp from '../img/meetup-app.png';
import moviesApp from '../img/movies-app.png';
import moviesUser from '../img/userInfo-moviesApp.png';
import Pokedox from '../img/Pokedox.png';
import Todo from '../img/Todo.png';

export const Projects = () => {
    return (
        <div className='projects-page' id="projects">
            <h1>Projects</h1>
            <div className='meet-app project'>
                <div className='project-images'>
                    <img src={meetupLogin} width="100%" alt="meet-up login page"></img>
                    <img src={meetupApp} width="100%" alt="meet-up login page"></img>
                </div>
                <div>
                    <h3>Meet-Up App</h3>
                    <div className='project-brief'>
                        <p>Its a serverless, progressive web application (PWA) with React using a
                            test-driven development (TDD) technique. </p>
                        <p> It uses AWS Lambda, OAuth2 through Google, and the Google Calendar API.</p>
                        <p>It shows all the events from a public Google Calendar and allows the user to filter for specific cities.
                            There are also data visualizations from Recharts</p>
                        <p>Tools Used: </p>
                        <ul>
                            <li>React</li>
                            <li>O-Auth</li>
                            <li>Jest</li>
                            <li>Jest-Cucumber</li>
                            <li>Puppeteer</li>
                            <li>Recharts</li>
                            <li>Axios</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/meet-project'>Github Repo</a></button>
                        <button><a href='https://priyanka-koraganji.github.io/meet-project/'>Visit Site</a></button>
                    </div>
                </div>
            </div>
            <div className='movies-app project'>
                <div className='project-images'>
                    <img src={moviesApp} width="100%" alt="movies app"></img>
                    <img src={moviesUser} width="100%" alt="movies app"></img>
                </div>
                <div>
                    <h3>Movies App</h3>
                    <div className='project-brief'>
                        <p>Its a complete web application (client-side and server-side)
                            built using full-stack JavaScript technologies.</p>
                        <p>The tech stack used is  MERN (MongoDB, Express, React, and Node.js) stack and even Redux.</p>
                        <p>This web application will provide users with access to information about different
                            movies, directors, and genres.</p>
                        <p>Users will be able to sign up, update their
                            personal information, and create a list of their favorite movies.</p>
                        <p>Checkout the Backend Code on  <a href='https://github.com/Priyanka-koraganji/movies-app'>Github</a> </p>
                        <p>Tools Used:</p>
                        <ul>
                            <li>React</li>
                            <li>Parcel</li>
                            <li>React-Redux</li>
                            <li>React-Router-Dom</li>
                            <li>Node JS</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/myFlix-client'>Github Repo</a></button>
                        <button><a href='https://priyas-moviessite.netlify.app/'>Visit Site</a></button>
                    </div>
                </div>
            </div>
            <div className='pokedox-app project'>
                <div className='project-images'>
                    <img src={Pokedox} width="100%" alt=""></img>
                </div>
                <div>
                    <h3>Pokedox App</h3>
                    <div className='project-brief'>
                        <p>Its a pokemon display web page. where u display pokemon names which u fetched using api.
                            by clicking on the name u get details of each pokemon</p>
                        <p>Tools Used:</p>
                        <ul>
                            <li>JS</li>
                            <li>HTML</li>
                            <li>Bootstrap</li>
                            <li>Saas</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/simple-js-app'>Github Repo</a></button>
                        <button><a href='https://priyanka-koraganji.github.io/simple-js-app/'>Visit Site</a></button>
                    </div>
                </div>
            </div>
            <div className='todo project'>
                <div className='project-images'>
                    <img src={Todo} width="100%" alt=""></img>
                </div>
                <div>
                    <h3>ToDo App</h3>
                    <div className='project-brief'>
                        <p>Its a To-Do web application.</p>
                        <p>You can add to-do items, delete them, and mark as complete by double clicking on the item.</p>
                        <p>And even you can re-arrange the items</p>
                        <p>Tools Used:</p>
                        <ul>
                            <li>JS</li>
                            <li>JQuery</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/to-do-list-app'>Github Repo</a></button>
                        <button><a href='https://priyanka-koraganji.github.io/to-do-list-app/'>Visit Site</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}