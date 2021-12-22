import Popup from "./Popup";
import "./TitleBar.css";
import LoginButton from "./LoginButton";
import { useState } from "react";
// import { Auth0Provider } from "@auth0/auth0-react";
import {Route,Routes,Link} from 'react-router-dom'
import Welcome from "../Welcome";
// import VerifierChallenger from "../VerifierChallenger";
import Login from "../Login";
// import Welcome from "../Welcome";
// import App from "../App";
      

const TitleBar = () => {
    const [trigger, setTrigger] = useState(false)

    return (
        <div className="titlebar">
            <div className="titlebar__3lines">
                <div className="titlebar__3lines-line">
                    <div className="line"></div>
                </div>
                <div className="titlebar__3lines-line">
                    <div className="line"></div>
                </div>
                <div className="titlebar__3lines-line">
                    <div className="line"></div>
                </div>
                <div className="titlebar__3lines-content">
                <a href="" style={{ textDecorationColor: 'transparent' }}>
                    {/* <img src="" alt=""></img> */}
                    <div className="titlebar__3lines-content-link">Channels</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__3lines-content-link">Languages</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__3lines-content-link">Genres</div></a>
                </div>
            </div>
            <div className="titlebar__logo" >
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"></img>
            </div>
            <div className="titlebar__tv">
                <span>TV</span>
                <div className="titlebar__tv-content">
                    <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Hotstar Specials</div></a>
                    <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Quix</div></a>
                    <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Star Maa</div></a>
                    <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Star Plus</div></a>
                    <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Star Parivar</div></a>
                    <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Asian</div></a>
                    <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">more...</div></a>
                </div>
            </div>
            <div className="titlebar__tv">
                <span>Movies</span>
                <div className="titlebar__tv-content">
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Hindi</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Telugu</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">English</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Malayalam</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Tamil</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Bengali</div></a>
                </div>
            </div>
            <div className="titlebar__tv">
                <span>Sports</span>
                <div className="titlebar__tv-content">
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Cricket</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Football</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Badminton</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Kabbadi</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Formula 1</div></a>
                <a href="" style={{ textDecorationColor: 'transparent' }}><div className="titlebar__tv-content-link">Tennis</div></a>
                </div>

            </div>
            <div className="titlebar__tv">
                Disney+
            </div>
            <div className="titlebar__kids">
                <img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="kids&nbsp;Hotstar"></img>
            </div>
            <div className="titlebar__searchbox">
                <input className="titlebar__searchbox-inp" type="search" placeholder="Search"></input>
            </div>
            <div className="titlebar__subscribe">
                <a href="https://www.hotstar.com/in/subscribe/get-started">
                    <button className="titlebar__subscribe-button">SUBSCRIBE</button>
                </a>
            </div>
            <div className="titlebar__login">
                <button onClick={()=>setTrigger(true)}>LOGIN</button>
            </div>
            {/* <Link to="/Welcome">welcome</Link> */}
            <Link to="/login">login</Link>
            <LoginButton/>
            <Routes>
            {/* :code/:state */}
                {/* <Route path="/Welcome/:code/:state" element={<Welcome/>}>
                </Route> */}
                <Route path="/Welcome" element={<Welcome/>}>
                </Route>
                <Route path="/login" element={<Login/>}>
                </Route>
                {/* <Route path="/" element={<App/>}>
                </Route> */}
            </Routes>
            {/* <LoginButton/> */}
            <Popup trigger={trigger} setTrigger={setTrigger}>
            </Popup>
            {/* <VerifierChallenger/> */}
        </div>
    );
}

export default TitleBar;