import "./Main.css";
import { AiFillGithub} from "react-icons/ai";
export default function Main(){
    return(
        <>
        <div>
            <main className="main">
                <section className="MyName">
                    <h1>Hello, my name is</h1>
                    <h2>Jitender.</h2>
                    <h3>I love exploring new things!</h3>
                    <div className="paragraph">
                        <p>As a <a href="https://masaischool.com/">Masai School</a> graduate, I possess a unique set of skills and knowledge that enable me to innovate new idea's. I have developed a strong foundation in programming languages and technologies, allowing me to review high-quality products.</p>
                        <p>I enjoy learning new skills and implementing them in real life!</p>
                    </div>
                    <div className="Getintouch">
                        <a href="mailto:trademetrader1137@gmail.com">Get In Touch</a>
                    </div>
                </section>
                <section className="Aboutme">
                    <h3>About Me</h3>
                    <div className="AboutPara">
                        <div className="AboutPara1">
                            <div>
                                <p>Hello! I'm <span>Jitender</span>, from <span>Haryana</span>, is known for its agricultural and industrial production.</p>
                                <p>I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.</p>
                                <p></p>
                                <p>I have successfully achieved <span>70%</span> in <span>12th</span> standard(<span>2021-2022</span>), paving the way for a <span>bright future</span>.</p>
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
                <section className="Experence">
                    <h3>My Journy</h3>
                    <div></div>
                </section>
                <section className="Projects">
                    <h3>My Projects.</h3>
                    <div>
                        <div>
                            <a href="https://github.com/jitenderji1137/Github-API-Testing-Project">
                                <img src="https://user-images.githubusercontent.com/113350806/236673378-32a37258-4ccf-48e4-9ae5-046d6004a023.png" alt="" />
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
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            </main>
        </div>
        </>
    );
}