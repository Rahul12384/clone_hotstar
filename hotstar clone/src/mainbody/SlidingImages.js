// import React from 'react'
// //import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
// //import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import Images from './Images';
import './ImageCard.css';
import ImageCard from './ImageCard';
import "./SlidingImages.css";
import WatchlistCard from "./WatchlistCard";

const SlidingImages = () => {
    const [watchlist, setWatchlist] = useState([]);
    console.log('watchList:')
    console.log(watchlist)
    // const button_display=<button onClick={onAddWatchlist}>{button_display}</button>
    const onClickRemoveWatchList=(removeid) => {
        const removeWatchItem = watchlist.filter((lis) => lis[0].id !== removeid)
        setWatchlist(removeWatchItem)
    }
    const onPressWatchList = (itemid) => {
        console.log("in sliding" + itemid)
        const addWatchItem = Images.filter((image) => image.id === itemid)
        console.log(addWatchItem)
        const newWatchItem = {
            ...addWatchItem,
            // id: Math.random().toString(),
        }

        console.log("new item:")
        console.log(newWatchItem)
        console.log(Images)

        setWatchlist((prevWatchlist) => {
            const ab = [newWatchItem, ...prevWatchlist]
            console.log("ab:")
            console.log(ab)
            return (ab);
        }
        )
    }
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 800, itemsToShow: 4 },
        { width: 1000, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 },
    ];
    const breakPoints_watchlist = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow:2 },
        { width: 600, itemsToShow: 3 },
        { width: 800, itemsToShow: 3 },
        { width: 1000, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 },
    ];
    var he=<p></p>
    var content_watchlist = []
    if (watchlist.length > 0) {
        
        he=<h2>Watchlist:</h2>
        content_watchlist = < Carousel breakPoints={breakPoints_watchlist} >
            {
                watchlist.map(li =>
                    <WatchlistCard onRemoveWatchList={onClickRemoveWatchList}
                        key={li[0].id} id={li[0].id} url={li[0].url} link={li[0].link} title={li[0].title} description={li[0].description} subtitle={li[0].subtitle} duration={li[0].duration}  inwatch={li[0].inwatch}></WatchlistCard>
                )
            }
        </Carousel >

    }
    //     return (
    // //         <div className="slidingimages">
    // //             {/* <div>
    // //             {Images.map(image=><img className="ima" key={image.id} src={image.url} alt=""/>)}
    // //             </div> */}

    // // <div className='card1'><div>{Images.map(fun)}</div></div>
    // //             {/* <ImageCard>
    // //                 {Images.map(image=><img src={image.url} alt=""></img>)}
    // //             </ImageCard> */}
    // //         </div> 
    //     <div className="outer">
    //         {Images.map(image =>
    //         <ImageCard key={image.id} url={image.url} name={image.name}></ImageCard>
    //         )
    //         }

    //     </div>
    //     );

    return (
        <div className="outer">
            {he}
            {
            content_watchlist}
            <Carousel breakPoints={breakPoints}>
                {Images.map(image =>
                    <ImageCard onClickWatchList={onPressWatchList}
                        key={image.id} id={image.id} inwatch={image.inwatch} 
                        url={image.url} link={image.link} title={image.title} description={image.description} subtitle={image.subtitle} duration={image.duration} ></ImageCard>
                )}
            </Carousel>
        </div>);
}

export default SlidingImages;


