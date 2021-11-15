import React from 'react'
import "./WatchlistCard.css"
const WatchlistCard = (props) => {
    // const clickhandler=()=>{
    //     console.log(props.name)
    // }
    const onRemoveWatchList=()=>{
        console.log("in imagecard"+props.id)
        props.onRemoveWatchList(props.id)
    }

    return (
        <div className="imagecard">
            <a href={props.link}><img className="ima" src={props.url} alt=""></img>
            </a>
            <div className="hide">
                <div className="hide__title">
                    {props.title}
                </div>
                <div className="hide__duration">
                    {props.duration}
                </div>
                <div className="hide__subtitle">
                    {props.subtitle}
                </div>
                <div className="hide__description">
                    {props.description}
                </div>
                <div className="hide__watchmovie">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDIwIDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS00IDBoMjR2MjRILTR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgeDI9IjUwJSIgeTI9IjQwJSIgZD0iTTAgMjEuMDdjMCAyLjIwOSAxLjUzNSAzLjA1OSAzLjQwNiAxLjkxM2wxNC41MzctOC44OTdjMS44ODEtMS4xNTIgMS44NzEtMy4wMjUgMC00LjE3bC0xNC41MzctOC45QzEuNTI2LS4xMzMgMCAuNzI5IDAgMi45M3YxOC4xNHoiIG9wYWNpdHk9IjEiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="" />
                    <button>WATCH MOVIE</button>
                </div>
                <div className="hide__addtowatchlist" >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Crystal_button_cancel.svg/1024px-Crystal_button_cancel.svg.png" alt=""/>
                    <button onClick={onRemoveWatchList} style={{color:'red'}}>REMOVE FROM WATCH LIST</button>
                </div>
            </div>
        </div>
    )
}

export default WatchlistCard
