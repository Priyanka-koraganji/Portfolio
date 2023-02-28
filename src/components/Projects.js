import React from 'react';
import meetupLogin from '../img/meetupLogin.png';
import moviesApp from '../img/movies-app.png';
import Pokedox from '../img/Pokedox.png';
import Todo from '../img/Todo.png';
import BackendAPI from '../img/backend-api.png';
import AngularMovies from '../img/Angular-movies.png';
import ChatApp from '../img/chat-app.png';


export const Projects = () => {
    return (
        <div className='projects-page' id="projects">
            <h1>Some of my Projects</h1>
            <div className='myFlix-api project'>

                <div>
                    <h3>Movies API</h3>
                    <div className='project-brief'>
                        <p>Its a Server side application. This web application will provide users with access to information
                            about different
                            movies, directors, and genres. It was built with JavaScript running on Node.js with Express
                            framework. Used MongoDB non-relational database to store and retrive data. And have used
                            Mongoose for
                            business logic. All the routes were checked using Postman. User authentication was built with
                            Passport. And it is deployed using Heroku.</p>
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

                        <div className='project-btn'>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/Priyanka-koraganji/movies-app.git'>Github Repo</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://yourmoviescollection.herokuapp.com/'>Visit Site</a></div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img className='api-img' src={BackendAPI} alt="mongoDB collections"></img>
                    {/* <img className='api-img' src={MoviesList} width="100%" alt="mongoDB collections"></img> */}
                </div>
            </div>

            <div className='movies-app project'>

                <div>
                    <h3>MyFlix App</h3>
                    <div className='project-brief'>
                        <p>Its a complete web application (client-side and server-side)
                            built using full-stack JavaScript technologies. The tech stack used is MERN (MongoDB, Express,
                            React, and Node.js) stack and even Redux. This web application will provide users with access to
                            information about different
                            movies, directors, and genres. Users will be able to sign up, update their
                            personal information, and create a list of their favorite movies. You can also check the website using login credentials Username:"Srini" and Password:"srini123" </p>
                        <p>Checkout the Backend Code on
                            <a className="git-link" href='https://github.com/Priyanka-koraganji/movies-app'>Github</a></p>
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

                        <div className='project-btn'>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/Priyanka-koraganji/myFlix-client'>Github Repo</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyas-moviessite.netlify.app/'>Visit Site</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/Case-studies/movies.html'>Details</a> </div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img className='img' src={moviesApp} alt="movies app"></img>
                    {/* <img className='img' src={moviesUser} width="100%" alt="movies app"></img> */}
                </div>
            </div>

            <div className='movie-app-angular project'>

                <div>
                    <h3>MyFlix App Using Angular</h3>
                    <div className='project-brief'>
                        <p>Its a client side web application
                            based on server-side REST API and database built with Angular and Material Desgin. This web
                            application will provide users with access to information about different
                            movies, directors, and genres. Users will be able to sign up, register, update their
                            personal information, view data about the movies as well as create a list of their favorite
                            movies. You can also check the website using login credentials Username:"Srini" and Password:"srini123" </p>
                        <p>Checkout the Backend Code on <a target="_blank" rel="noopener noreferrer" className="git-link"
                            href='https://github.com/Priyanka-koraganji/movies-app'>Github</a> </p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>Angular</li>
                            <li>Typescript</li>
                            <li>Angular CLI</li>
                            <li>Material Design</li>
                            <li>Angular-cli-ghpages</li>
                            <li>typedoc</li>
                        </ul>

                        <div className='project-btn'>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/Priyanka-koraganji/MyFlix-Angular.git'>Github Repo</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/MyFlix-Angular/'>Visit Site</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/Case-studies/movies-angular.html'>Details</a> </div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img src={AngularMovies} alt="movies app"></img>
                    {/* <img src={angularDialog} width="100%" alt="movies app"></img> */}
                </div>
            </div>

            <div className='chat-app project'>

                <div>
                    <h3>Chat App</h3>
                    <div className='project-brief'>
                        <p>It was developed with React Native, supported by Expo. The app provides users with a chat
                            interface and options to share images and their location. It uses the services of Google
                            Firestore for storing/retrieving data and for authentication. Chat mobile application also
                            provides offline functionality.</p>
                        <p>Tools and Technologies Used:</p>
                        <ul>
                            <li>React</li>
                            <li>Gifted chat</li>
                            <li>Expo</li>
                            <li>Google Firebase</li>
                            <li>IOS and Android simulators</li>
                        </ul>
                        <div className='project-btn'>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/Priyanka-koraganji/Chat-App.git'>Github Repo</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/Case-studies/chat-app.html'>Details</a> </div>
                        </div>
                    </div>


                </div>
                <div className='project-images chat-images'>
                    <img src={ChatApp} alt="movies app"></img>
                    {/* <img src={OfflineChat} width="100%" margin-left="20px" alt="movies app"></img> */}
                </div>
            </div>


            <div className='meet-app project'>
                <div>
                    <h3>Meet-Up App</h3>
                    <div className='project-brief'>
                        <p>Its a serverless, progressive web application (PWA) with React using a
                            test-driven development (TDD) technique. It uses AWS Lambda, OAuth2 through Google, and the
                            Google Calendar API. It shows all the events from a public Google Calendar and allows the user
                            to filter for specific
                            cities.
                            There are also data visualizations from Recharts </p>
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

                        <div className='project-btn'>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/Priyanka-koraganji/meet-project'>Github Repo</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/meet-project/'>Visit Site</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/Case-studies/meet-app.html'>Details</a> </div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img src={meetupLogin} alt="meet-up login page"></img>
                </div>
            </div>



            <div className='pokedox-app project'>

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

                        <div className='project-btn'>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/Priyanka-koraganji/simple-js-app'>Github Repo</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/simple-js-app/'>Visit Site</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/Case-studies/pokedex.html'>Details</a> </div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img className='poke-img' src={Pokedox} alt=""></img>
                </div>
            </div>

            {/* <div className='todo project'>

                <div>
                    <h3>ToDo App</h3>
                    <div className='project-brief'>
                        <p>Its a To-Do web application. You can add to-do items, delete them, and mark as complete by double
                            clicking on the item. And even you can re-arrange the items.</p>
                        <p>Tools Used:</p>
                        <ul>
                            <li>JS</li>
                            <li>JQuery</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>

                        <div className='project-btn'>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://github.com/Priyanka-koraganji/to-do-list-app'>Github Repo</a></div>
                            <div><a target="_blank" rel="noopener noreferrer" href='https://priyanka-koraganji.github.io/to-do-list-app/'>Visit Site</a></div>
                        </div>
                    </div>

                </div>
                <div className='project-images'>
                    <img src={Todo} width="100%" alt=""></img>
                </div>
            </div> */}
        </div>
    )
}