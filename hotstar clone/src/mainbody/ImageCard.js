import React from 'react'
import "./ImageCard.css";
const ImageCard = (props) => {
    console.log(props.name,"props.name")
    // const clickhandler=()=>{
    //     console.log(props.name)
    // }
    // const [button_text,setButtonText]=useState('ADD TO WATCH LIST')
    // var button_display=<p>ADD TO WATCH LIST</p>
    
    var ab='c_'+props.id
    const onAddWatchlist=()=>{
        var cd=Number(localStorage.getItem(ab))
        cd=cd+1
        localStorage.setItem(ab,String(cd))
        // console.log("in imagecard"+props.id)
        // console.log(props.inwatch)
        // button_display=<p>REMOVE FROM WATCHLIST</p>
        // setButtonText('REMOVE FROM WATCHLIST')
        // props.inwatch=1
        // console.log(props.inwatch)
        props.onClickWatchList(props.id)
    }
    const onRemoveWatchList=()=>{
        var ab='c_'+props.id
        var cd=Number(localStorage.getItem(ab))
        cd=cd+1
        localStorage.setItem(ab,String(cd))
        console.log("in imagecard"+props.id)
        props.onRemoveWatchList(props.id)
    }
    var bu=<button onClick={onAddWatchlist}>ADD TO WATCHLIST</button>
    var im=<img src="https://www.hotstar.com/assets/316d889ad60190a1ae8948c13352ff9d.svg" alt=""/>
    if(Number(localStorage.getItem(ab))%2===0){
        bu=<button onClick={onAddWatchlist}>ADD TO WATCHLIST</button>
        im=<img src="https://www.hotstar.com/assets/316d889ad60190a1ae8948c13352ff9d.svg" alt=""/>
    }
    else{
        bu=<button onClick={onRemoveWatchList} style={{color:'red'}}>REMOVE FROM WATCH LIST</button>
        im=<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Crystal_button_cancel.svg/1024px-Crystal_button_cancel.svg.png" alt=""/>
    }
    
    return (
        <div className="imagecard">
            <a href={props.link}><img className="ima" src={props.url} alt="" ></img>
            </a>
            <div className="hide">
                <div className="hide__title">

                    {props.name}
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
                    {im}
                    {bu}
                </div>
            </div>
        </div>
    )
}

export default ImageCard
