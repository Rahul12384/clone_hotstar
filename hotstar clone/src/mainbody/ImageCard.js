import React from 'react'

const ImageCard = (props) => {
    // const clickhandler=()=>{
    //     console.log(props.name)
    // }
    return (
        <div className="imagecard">
            <img className="ima" src={props.url} alt=""  ></img>
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
                <div className="hide__addtowatchlist">
                    <img src="https://www.hotstar.com/assets/316d889ad60190a1ae8948c13352ff9d.svg" alt=""/>
                    <button>ADD TO WATCH LIST</button>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
