//import { Carousel } from "react-bootstrap";
//import Images from "./Images";
//import ImageCard from "./ImageCard";

import './Thumbnails.css'; 

const Thumbnails=(props)=>{
    
    // const onAddWatchlist=()=>{
    //     console.log("in imagecard"+props.id)
    //     console.log(props.inwatch)
    //     // button_display=<p>REMOVE FROM WATCHLIST</p>
    //     // setButtonText('REMOVE FROM WATCHLIST')
    //     // props.inwatch=1
    //     // console.log(props.inwatch)
    //     props.onClickWatchList(props.id)
    // }

    // console.log(props.url)
    return (
        <div className="thumbnailcard">
            <a href={props.link}><img className="thumb_ima" src={props.url} alt="" ></img>
            </a>
            <div className="thumb_hide">
                <div className="thumb_hide__title">
                    {props.name}
                    {props.title}
                </div>
                <div className="thumb_hide__duration">
                    {props.duration}
                </div>
                <div className="thumb_hide__subtitle">
                    {props.subtitle}
                </div>
                <div className="thumb_hide__description">
                    {props.description}
                </div>
                {/* <div className="hide__watchmovie">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDIwIDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS00IDBoMjR2MjRILTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgeDI9IjUwJSIgeTI9IjQwJSIgZD0iTTAgMjEuMDdjMCAyLjIwOSAxLjUzNSAzLjA1OSAzLjQwNiAxLjkxM2wxNC41MzctOC44OTdjMS44ODEtMS4xNTIgMS44NzEtMy4wMjUgMC00LjE3bC0xNC41MzctOC45QzEuNTI2LS4xMzMgMCAuNzI5IDAgMi45M3YxOC4xNHoiIG9wYWNpdHk9IjEiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="" />
                    <button>WATCH MOVIE</button>
                </div>
                <div className="hide__addtowatchlist" >
                    <img src="https://www.hotstar.com/assets/316d889ad60190a1ae8948c13352ff9d.svg" alt=""/>
                    <button onClick={onAddWatchlist}>ADD TO WATCHLIST</button>
                </div> */}
            </div>
        </div>
    )

}

export default Thumbnails;