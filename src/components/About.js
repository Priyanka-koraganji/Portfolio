import React from 'react';
import Art1 from '../img/art1.jpg';
import Art2 from '../img/art2.jpg';
import Art3 from '../img/art4.jpg';
import Art4 from '../img/art5.jpg';
import Art6 from '../img/art7.jpg';
import Art9 from '../img/Art9.jpg';
import Travel from '../img/travel.jpg';

export const About = () => {
    return (
        <div className='about-page' id="about">
            <h2 className='about-heading'>Who I am</h2>
            <div className='about-explore'>
                <div>

                    <p><span className="color">Experience and Explore….</span> It is all about experiencing and exploring
                        something
                        new.</p>
                    <p> For me, life is living in the moment and enjoying the moment.</p>
                    <p>I like to explore new places, cultures, and new tastes. Traveling
                        to new places and spending time in nature brings out inner joy and peace. I like to capture the
                        beauty
                        and different colors of nature.</p>
                </div>
                <img src={Travel} className="travel-img" alt="travel"></img>
            </div>

            <div className="about-art">
                <div className='about-colordes'>
                    <img src={Art9} width="30%" alt="art"></img>
                    <div>
                        <p><span className="color">Color</span> is everything to me, especially in nature where I like to capture
                            beauty through
                            painting.</p>
                        <p>In free time you can find me with a cup of coffee and painting.</p>
                        <p>As a developer, I find inspiration in different art forms that can help me create exciting web pages,
                            after all,
                            there is a color to everything around us!</p>
                        <p>Here are some of my paintings driven by my love for colors.</p>
                    </div>

                </div>
                <div className="about-imgs">
                    <div className='column'>
                        <img className='item1' src={Art1} alt="abstract"></img>
                        <img className='item2' src={Art2}  alt="landscape" width="100%"></img>
                    </div>
                    <div className='column'>
                        <img className='item4' src={Art4}  alt="ganesh" width="100%"></img>
                    </div>
                    <div className='column'>
                        <img className='item3' src={Art3}  alt="landscape" width="100%"></img>
                        <img className='item6' src={Art6}  alt="landscape" width="100%"></img>
                    </div>
                </div>

            </div>

            <div className="about-background">
                <h3>My Background</h3>
                <p>I’m a full-stack web developer with a background in engineering. I worked as an Assistant professor in an
                    Engineering college and mentored students with their different projects.</p>
                <p> I developed excellent skills in
                    active listening, understanding, researching, and resolving issues when facing technical problems within
                    projects. I have gained great experience in coordinating and tracking the performance of other faculty
                    members and introducing effective teaching plans to complete the course syllabus before examinations.
                </p>
            </div>

            <div className="about-developer">
                <h3>Turning into a web developer</h3>
                <p>As an amateur artist, while looking at some art pages I got curious to learn the functionality of the web
                    page. The visually attractive pages and challenging code inspired me to develop one for myself. My
                    curiosity to learn new things adding a strong background in technical skills turned me into a software
                    developer. It also satisfies my joy in solving problems and crafting useful, innovative things.
                </p>
            </div>

            <p className="goals">Starting as a junior developer, I want to start with an employer where there are more chances
                for learning
                and creating things. I value respect, hard work, personal growth, financial independence, and a comfortable
                income, and therefore reflect these attributes in my work and abilities. I’m looking for remote or hybrid
                positions so that I can stay near my family and take care of my daughter. </p>
            <div className='about-contact'><a target="_blank"  rel="noopener noreferrer"  href="#contact"> Get in touch</a></div>


            <div className='tools'>
                <h2 className='about-heading'>My Skills and Software</h2>
                <p>I can build web sites and apps from concept, layout and interactive elements to backend/server-side and databases.</p>

                <div className='tool-imgs'>
                    <div>
                        <h6>Languages</h6>
                        <div>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Typescript</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div>
                        <h6>Frontend libraries & frameworks</h6>
                        <div>
                        <p>Bootstrap</p>
                        <p>Jquery</p>
                        <p>Angular</p>
                        <p>Angular Material</p>
                        <p>React</p>
                        <p>React Redux</p>
                        </div>
                                
                    </div>
                    <div>
                        <h6>Backend and other libraries</h6>
                        <div>
                        <p>Node JS</p>
                        <p>CORS</p>
                        <p>Axios</p>
                        <p>Parcel</p>
                        <p>serverless</p>
                        <p>propTypes</p>
                        <p>Recharts</p>
                        </div>
                    </div>
                    <div>
                        <h6>Testing & QA</h6>
                        <div>
                            <p>Postman</p>
                            <p>Jest</p>
                            <p>Enzyme</p>
                            <p>Cucumber</p>
                            <p>Puppeteer</p>
                        </div>
                    </div>
                    <div>
                        <h6>Documentation</h6>
                        <div>
                            <p>JSDoc</p>
                            <p>TypeDoc</p>
                        </div>
                    </div>
                    <div>
                        <h6>Web services & databases</h6>
                        <div>
                            <p>GitHub</p>
                            <p>AWS</p>
                            <p>MongoDb</p>
                            <p>postgreSQL</p>
                            <p>Goggle Firestore</p>
                            <p>Heroku</p>
                            <p>Netlify</p>
                        </div>
                    </div>
                    <div>
                        <h6>Mobile Apps</h6>
                        <div>
                            <p>PWA</p>
                            <p>React Native</p>
                            <p>Android Studio</p>
                            <p>Expo</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}