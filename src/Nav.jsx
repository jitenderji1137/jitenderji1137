import "./Nav.css";
export default function Nav(){
    return(
        <>
            <header className="header">
                <nav className="Nav">
                    <div className="fCfEdx">
                        <a href="/">
                            <img src="https://user-images.githubusercontent.com/113350806/238052085-12765808-f51d-40e0-b2e9-ba2a27fa8c84.png" alt="" />
                        </a>
                    </div>
                    <div className="NavMenue">
                        <ol>
                            <li><span>About</span></li>
                            <li><span>Experience</span></li>
                            <li><span>Projects</span></li>
                            <li><span>Contact</span></li>
                        </ol>
                        <button className="resume">Resume</button>
                    </div>
                </nav>
            </header>
        </>
    );
}