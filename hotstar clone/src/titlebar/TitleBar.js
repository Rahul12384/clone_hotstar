import "./TitleBar.css";
const TitleBar = () => {
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
            </div>
            <div className="titlebar__logo" >
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="Disney+&nbsp;Hotstar"></img>
            </div>
            <div className="titlebar__tv">
                TV
            </div>
            <div className="titlebar__tv">
                Movies
            </div>
            <div className="titlebar__tv">
                Sports
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
                <button className="titlebar__subscribe-button">SUBSCRIBE</button>
            </div>
            <div className="titlebar__login">
                <button>LOGIN</button>
            </div>
        </div>
    );
}

export default TitleBar;