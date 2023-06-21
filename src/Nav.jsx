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
                            <li onClick={event =>  window.location.href='#about'} ><span>About</span></li>
                            <li onClick={event =>  window.location.href='#Journy'} ><span>Journy</span></li>
                            <li onClick={event =>  window.location.href='#projects'} ><span>Projects</span></li>
                            <li onClick={event =>  window.location.href='#contact'} ><span>Contact</span></li>
                        </ol>
                        <button className="resume"><a href="https://drive.google.com/file/d/1vd2NLE51182ycV2jCtDVyJyic6peyA3E/view?usp=share_link">Resume</a></button>
                    </div>
                </nav>
            </header>
        </>
    );
}