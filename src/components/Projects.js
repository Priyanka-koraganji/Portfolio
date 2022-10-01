import React from 'react';
import meetupLogin from '../img/meetupLogin.png';
import meetupApp from '../img/meetup-app.png';
import moviesApp from '../img/movies-app.png';
import moviesUser from '../img/userInfo-moviesApp.png';
import Pokedox from '../img/Pokedox.png';
import Todo from '../img/Todo.png';
import BackendAPI from '../img/backend-api.png';
import AngularMovies from '../img/Angular-movies.png';
import angularDialog from '../img/angular-dialog.png';
import MoviesList from '../img/movies-list.png';
import OfflineChat from '../img/offline-chatApp.png';
import ChatApp from '../img/chat-app.png';

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
                            <li>AWS</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/meet-project'>Github Repo</a></button>
                        <button><a href='https://priyanka-koraganji.github.io/meet-project/'>Visit Site</a></button>
                    </div>
                </div>
            </div>

            <div className='myFlix-api project'>
                <div className='project-images'>
                    <img className='api-img' src={BackendAPI} width="100%" alt="mongoDB collections"></img>
                    <img className='api-img' src={MoviesList} width="100%" alt="mongoDB collections"></img>
                </div>
                <div>
                    <h3>MyFlix API</h3>
                    <div className='project-brief'>
                        <p>Its a Server side application.</p>
                        <p>This web application will provide users with access to information about different
                            movies, directors, and genres.</p>
                        <p>It was built with JavaScript running on Node.js with Express framework.</p>
                        <p>Used MongoDB non-relational database to store and retrive data. And have used Mongoose for business logic.</p>
                        <p>All the routes were checked using Postman.</p>
                        <p>User authentication was built with Passport. And it is deployed using Heroku.</p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>JavaScript</li>
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>Mongoose</li>
                            <li>MongoDB</li>
                            <li>Postman</li>
                            <li>Passport</li>
                            <li>Heroku</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/movies-app.git'>Github Repo</a></button>
                        <button><a href='https://yourmoviescollection.herokuapp.com/'>Visit Site</a></button>
                    </div>
                </div>

            </div>

            <div className='movies-app project'>
                <div className='project-images'>
                    <img className='img' src={moviesApp} width="100%" alt="movies app"></img>
                    <img className='img' src={moviesUser} width="100%" alt="movies app"></img>
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

            <div className='movie-app-angular project'>
                <div className='project-images'>
                    <img src={AngularMovies} width="100%" alt="movies app"></img>
                    <img src={angularDialog} width="100%" alt="movies app"></img>
                </div>
                <div>
                    <h3>Movies App Using Angular</h3>
                    <div className='project-brief'>
                        <p>Its a client side web application
                            based on server-side REST API and database built with Angular and Material Desgin.</p>
                        <p>This web application will provide users with access to information about different
                            movies, directors, and genres.</p>
                        <p>Users will be able to sign up, register, update their
                            personal information, view data about the movies as well as create a list of their favorite movies.</p>
                        <p>Checkout the Backend Code on  <a href='https://github.com/Priyanka-koraganji/movies-app'>Github</a> </p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>Angular</li>
                            <li>Typescript</li>
                            <li>Angular CLI</li>
                            <li>Material Design</li>
                            <li>Angular-cli-ghpages</li>
                            <li>typedoc</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/MyFlix-Angular.git'>Github Repo</a></button>
                        <button><a href='https://priyanka-koraganji.github.io/MyFlix-Angular/'>Visit Site</a></button>
                    </div>
                </div>

            </div>

            <div className='chat-app project'>
                <div className='chat-images'>
                    <img src={ChatApp} width="100%" alt="movies app"></img>
                    <img src={OfflineChat} width="100%" margin-left="20px" alt="movies app"></img>
                </div>
                <div>
                    <h3>Chat App</h3>
                    <div className='project-brief'>
                        <p>It was developed with React Native, supported by Expo</p>
                        <p>The app provides users with a chat interface and options to share images and their location.</p>
                        <p>It uses the services of Google Firestore for storing/retrieving data and for authentication.</p>
                        <p>Chat mobile application also provides offline functionality.</p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>React</li>
                            <li>Gifted chat</li>
                            <li>Expo</li>
                            <li>Google Firebase</li>
                            <li>IOS and Android simulators</li>
                        </ul>
                    </div>

                    <div className='project-btn'>
                        <button><a href='https://github.com/Priyanka-koraganji/Chat-App.git'>Github Repo</a></button>
                    </div>
                </div>

            </div>

            <div className='pokedox-app project'>
                <div className='project-images'>
                    <img className='poke-img' src={Pokedox} width="100%" alt=""></img>
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