import "./Main.css";
import { AiFillGithub,AiOutlineFolderOpen} from "react-icons/ai";
import { FaExternalLinkAlt} from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import Typewriter from "typewriter-effect";
export default function Main(){
    return(
        <>
        <div>
            <main className="main">
                <section className="MyName">
                    <h1>Hello, my name is</h1>
                    <h2>Jitender.</h2>
                    <h3> <Typewriter
                            options={{
                            strings: ["Welcome to my Portfolio","Software Development Engineer in Test (SDET)","Quality assurance | Software testing","Cypress | Selenium | WebdriverIO | And-More","Always learning new things"],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50
                            }}
                        /></h3>
                    <div className="paragraph">
                        <p>As a <a href="https://masaischool.com/">Masai School</a> graduate, I possess a unique set of skills and knowledge that enable me to innovate new ideas. I have developed a strong foundation in programming languages and technologies, allowing me to review high-quality products.</p>
                        <p>I enjoy learning and implementing new skills in real life!</p>
                    </div>
                    <div className="Getintouch">
                        <a href="mailto:trademetrader1137@gmail.com">Get In Touch</a>
                    </div>
                </section>
                <section className="Aboutme" id="about">
                    <h3>About Me</h3>
                    <div className="AboutPara">
                        <div className="AboutPara1">
                            <div>
                                <p>Hello! I'm <span>Jitender</span>, from <span>Haryana</span>, which is known for its agricultural and industrial production.</p>
                                <p>I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethics and a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.</p>
                                <p></p>
                                <p>I have successfully achieved <span>68%</span> in <span>12th</span> standard(<span>2021-2022</span>), paving the way for a <span>bright future</span>.</p>
                                <p>Here are few of the activities that <span>I love to do</span>!</p>
                            </div>
                            <ul>
                                <li>Coding</li>
                                <li>Problem Solving</li>
                                <li>Team Management</li>
                                <li>Discipline</li>
                                <li>Creativity</li>
                                <li>Decision Making</li>
                                <li>Communication</li>
                            </ul>
                        </div>
                        <div className="AboutPara2">
                            <a href="https://github.com/jitenderji1137">
                                <div>
                                    <img src="https://github.com/jitenderji1137/nested-loop/assets/113350806/6d0a36f0-a468-45c8-ba4c-61f8c886dcd0" alt=""></img>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                <section className="Experence" id="Journey">
                    <h3>My Journy</h3>
                    <div className="myjourny">
                        <div className="myjournydiv">
                            <h4>My Journey towards Becoming an SDET</h4>
                            <h5>May 27, 2023</h5>
                            <ul>
                                <li>Today, I sit down to reflect upon my journey so far, who aspire to become a <span>Software Development Engineer in Test (SDET)</span>. It has been a transformative path filled with challenges, learning, and growth.</li>
                                <li>Looking back, it all began in 2020 when I successfully completed my <span>10th-grade examinations</span>. I dedicated myself to further studies, aiming to build a promising future.</li>
                                <li>In 2022, after clearing my <span>12th-grade examinations</span>, I felt a strong inclination towards the world of coding and <span>software Engineer</span>. I took a leap of faith and joined <span>Masai School</span> in 2022. This decision marked the beginning of a new chapter in my life.</li>
                                {/* <li>Embracing the immersive learning environment at Masai School, I embarked on a rigorous journey to acquire <span>coding skills</span> and develop a solid foundation in <span>software engineering</span>. The curriculum was designed to equip students with practical knowledge and industry-relevant expertise, ensuring we were well-prepared for <span>real-world challenges</span>.</li> */}
                                <li>In January 2023, I made a pivotal decision by joining the <span>SDET</span> batch. The <span>Software Development Engineer in Test</span> role fascinated me, as it combined my passion for coding with my desire to ensure software quality and reliability. I realized that as an SDET, I could contribute to the development process by writing effective <span>test cases</span>, <span>automating tests</span>, and identifying and resolving <span>software defects</span>.</li>
                                <li>Since then, my days have been filled with engaging lessons, <span>hands-on projects</span>, and <span>collaborative work</span> with fellow Members. I've learned various programming languages and honed my <span>problem-solving</span> skills. Each step has brought me closer to <span>my goal of becoming an SDET</span>.</li>
                                <li>While my journey is far from over, I am excited about the road ahead. I look forward to continuing my learning, exploring <span>new technologies</span>, and eventually making a positive impact in the software development industry as an SDET. Each day, I grow more confident in my abilities and more inspired to reach <span>new heights</span>.</li>
                                <li>Now I can say, I can achieve my dreams and make a meaningful contribution to <span>the world of software Engineer</span>.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="Projects" id="projects">
                    <h3>My Projects.</h3>
                    <div className="myrealtimeproject">
                        <div id="realtext">Real-time LMS Project</div>
                        <div id="realabout">About this project</div>
                        <div id="realtimepara">During my time at Masai School, I had the chance to lead a team of four students in a LMS project. Our project was all about testing a Learning Management System (LMS), which helps people learn online. To make sure the LMS worked perfectly, we used a special tool called pytest. As the student lead, I guided our team in testing every part of the LMS to check if it was working well and without any errors. With our hard work and teamwork, we successfully tested the LMS and made sure it was reliable and user-friendly. This experience not only improved my testing skills but also taught me how to lead and collaborate effectively in a group project, which I'm proud to include in my portfolio.</div>
                        <ul id="realul">
                                <li>Python</li>
                                <li>Pytest</li>
                                <li>Selenium</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <a href="https://github.com/jitenderji1137/Github-API-Testing-Project">
                                <img src="https://user-images.githubusercontent.com/113350806/236556146-ea476d1a-954e-4aa0-ac13-3b88b90b87db.png" alt="" />
                            </a>
                            <div>
                                <h4>API Testing Project.</h4>
                                <h5>
                                    <a href="/">Github API Testing Project</a>
                                </h5>
                                <div className="float">
                                    <p>Streamline your GitHub API testing and integration by leveraging powerful GitHub APIs. Enhance collaboration, automate workflows, and unlock the full potential of your projects with seamless API interactions.</p>
                                    <p>Tested all the <span>API requests</span> of GitHub</p>
                                </div>
                                <ul>
                                    <li>Postman</li>
                                    <li>Cypress</li>
                                    <li>REST Assured</li>
                                </ul>
                                <div>
                                <a href="https://github.com/jitenderji1137/Github-API-Testing-Project" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                        </div>
                        <div className="Projects2">
                            <div>
                                <h4>Mobile App Testing </h4>
                                <h5>
                                    <a href="/">Hybrid App Testing Project</a>
                                </h5>
                                <div className="float-left">
                                    <p>Mobile app testing is important to ensure app functionality, usability, and reliability. It involves testing features, performance, security, and compatibility across devices for a smooth user experience.</p>
                                    <p>Tested all the <span>necessary features</span> of the app</p>
                                </div>
                                <ul>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Appium</li>
                                    <li>WebdriverIO</li>
                                </ul>
                                <div>
                                <a href="https://github.com/jitenderji1137/MobileTestingProject" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                            <a href="https://github.com/jitenderji1137/MobileTestingProject">
                                <img src="https://user-images.githubusercontent.com/113350806/241374678-2def7547-304c-4b24-a295-421fdf068e58.png" alt="" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/jitenderji1137/Performance-Testing-Using-JMeter">
                                <img src="https://user-images.githubusercontent.com/113350806/243560914-176e6ce8-c50f-41e3-944f-6e061fe78594.png" alt="" />
                            </a>
                            <div>
                                <h4>Performance Testing Project.</h4>
                                <h5>
                                    <a href="/">Performance Testing Using JMeter</a>
                                </h5>
                                <div className="float">
                                    <p>As This Project was related to Performance testing, We need to test JPetStore Demo and Github API using JMeter.</p>
                                    <p>Tested all the <span>API requests</span> using JMeter</p>
                                </div>
                                <ul>
                                    <li>JMeter</li>
                                    <li>MySQL</li>
                                    <li>Grafana</li>
                                </ul>
                                <div>
                                <a href="https://github.com/jitenderji1137/Performance-Testing-Using-JMeter" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                        </div>
                        <div className="Projects2">
                            <div>
                                <h4>Cypress Project.</h4>
                                <h5>
                                    <a href="/">Thesouledstore with Cypress , Project</a>
                                </h5>
                                <div className="float-left">
                                    <p>I used Cypress to test the login and navigation functions of Thesouledstore. The tests were successful, ensuring that users can log in to the website and navigate through its pages without any issues.</p>
                                    <p>Tested two modules of <span>Thesouledstore</span> with Cypress</p>
                                </div>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Cypress</li>
                                </ul>
                                <div>
                                <a href="https://github.com/jitenderji1137/Thesouledstore-Automation" target="_blank" rel="nofollow noopener noreferrer"><AiFillGithub/></a>
                                </div>
                            </div>
                            <a href="https://github.com/jitenderji1137/Thesouledstore-Automation">
                                <img src="https://user-images.githubusercontent.com/113350806/247505686-b7d07041-c3f7-480b-aa07-f44cbfc86cd3.png" alt="" />
                            </a>
                        </div>
                    </div>
                </section>
                <section className="otherprojects">
                    <h4>Other Noteworthy Projects</h4>
                    <a className="viewcode" href="https://github.com/jitenderji1137">View Complete List of Projects/Codes</a>
                    <div>
                        <div>
                            <div>
                                <header>
                                    <div className="fileone">
                                        <div className="fileicon"><AiOutlineFolderOpen/></div>
                                        <div className="fileones">
                                            <a href="https://github.com/jitenderji1137/Free-Netflix"><AiFillGithub/></a>
                                            <a href="https://free-netflix.vercel.app/"><FaExternalLinkAlt/></a>
                                        </div>
                                    </div>
                                    <h5 className="nowforh5">Movie Streaming Site</h5>
                                    <div className="nowfordiv">A platform offering a diverse range of online streaming content similar to NetFlix</div>
                                    <ul className="forultag">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JS</li>
                                        <li>REACT</li>
                                    </ul>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <div className="fileone">
                                        <div className="fileicon"><AiOutlineFolderOpen/></div>
                                        <div className="fileones">
                                            <a href="https://github.com/jitenderji1137/Fun-4_Zee-5_Clone"><AiFillGithub/></a>
                                            <a href="https://fun-4-zee-5-clone.pages.dev/"><FaExternalLinkAlt/></a>
                                        </div>
                                    </div>
                                    <h5 className="nowforh5">Zee-5 Clone name as Fun-4</h5>
                                    <div className="nowfordiv">Enjoy a seamless streaming experience with a wide variety of video content, identical to Zee-5</div>
                                    <ul className="forultag">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JAVASCRIPT</li>
                                    </ul>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <div className="fileone">
                                        <div className="fileicon"><AiOutlineFolderOpen/></div>
                                        <div className="fileones">
                                            <a href="https://github.com/jitenderji1137/trending-Eagle"><AiFillGithub/></a>
                                            <a href="https://trending-eagle.pages.dev/"><FaExternalLinkAlt/></a>
                                        </div>
                                    </div>
                                    <h5 className="nowforh5">Clone of American Eagle</h5>
                                    <div className="nowfordiv">A visually replicated American Eagle website with its unique user interface and user experience.</div>
                                    <ul className="forultag">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JS</li>
                                        <li>REACT</li>
                                    </ul>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <div className="fileone">
                                        <div className="fileicon"><AiOutlineFolderOpen/></div>
                                        <div className="fileones">
                                            <a href="https://github.com/jitenderji1137/Chat-Application"><AiFillGithub/></a>
                                            <a href="https://web-chat-free.pages.dev/"><FaExternalLinkAlt/></a>
                                        </div>
                                    </div>
                                    <h5 className="nowforh5">Real Time Web Chat</h5>
                                    <div className="nowfordiv">A real-time web chat application that enables instant communication</div>
                                    <ul className="forultag">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JS</li>
                                        <li>REACT</li>
                                        <li>FIREBASE</li>
                                    </ul>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <div className="fileone">
                                        <div className="fileicon"><AiOutlineFolderOpen/></div>
                                        <div className="fileones">
                                            <a href="https://github.com/jitenderji1137/jitenderji1137"><AiFillGithub/></a>
                                            <a href="https://jitenderji1137.pages.dev/"><FaExternalLinkAlt/></a>
                                        </div>
                                    </div>
                                    <h5 className="nowforh5">My Portfolio</h5>
                                    <div className="nowfordiv">My portfolio website showcasing my skills, projects, and achievements in a visually appealing</div>
                                    <ul className="forultag">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JS</li>
                                        <li>REACT</li>
                                    </ul>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <div className="fileone">
                                        <div className="fileicon"><AiOutlineFolderOpen/></div>
                                        <div className="fileones">
                                            <a href="https://github.com/jitenderji1137/Netflix"><AiFillGithub/></a>
                                            <a href="https://cyan-anxious-sheep.cyclic.app/NetFlixAPI"><FaExternalLinkAlt/></a>
                                        </div>
                                    </div>
                                    <h5 className="nowforh5">Free Netflix JSON Server</h5>
                                    <div className="nowfordiv">A JSON server API specifically designed for movies, providing endpoints to access, search, and manage movie data efficiently.</div>
                                    <ul className="forultag">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                    </ul>
                                </header>
                            </div>
                        </div>
                    </div>
                    <button onClick={event =>  window.location.href='https://github.com/jitenderji1137'} className="moreprojects">View More on Github</button>
                </section>
                <section className="contactinf">
                    <h4>Days I Code</h4>
                </section>
                <img src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=jitenderji1137&show_icons=true&theme=dark" style={{borderRadius: "20px"}} width="100%" alt=""/>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=jitenderji1137&show_icons=true&theme=dark" style={{ borderRadius: "20px", margin: "10px"}} width="50%" alt=""/>
                    <img src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=jitenderji1137&show_icons=true&theme=dark" style={{ borderRadius: "20px", margin: "10px"}} width="50%" alt=""/> 
                </div>
                <GitHubCalendar style={{width:"100%"}} username="jitenderji1137" blockSize={17} blockMargin={8} fontSize={16}/>
                <div style={{display:"flex"}}>
                    <button onClick={event =>  window.location.href='https://github.com/jitenderji1137'} className="moreprojects">View More on Github</button>
                </div>
                <section className="contactinfo" id="contact">
                    <h3>Contact Info.</h3>
                    <h4>Get In Touch</h4>
                    <div>Feel free to reach out to me anytime. I'm here to help and will do my best to respond. Feel confident to send me any inquiries, or job updates, or simply say hello. I look forward to hearing from you!</div>
                    <a href="mailto:trademetrader1137@gmail.com">Mail Me</a>
                </section>
            </main>
            <footer>
                <a href="https://github.com/jitenderji1137">Made with <span style={{color:"red",margin:"0 5px"}}>❤</span> By Jitender</a>
            </footer>
        </div>
        </>
    );
}
