// import React from 'react'
// //import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
// //import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-elastic-carousel";

import Images from './Images';
import './ImageCard.css';
import ImageCard from './ImageCard';
import "./SlidingImages.css"

// // function fun(val){

// //     return (


// // <div className='card_img'>
// // {/* <img src={val.url}></img> */}
// // </div>
// //     );

// // }
const SlidingImages = () => {
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
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width:600, itemsToShow:3},
        { width: 800, itemsToShow: 4 },
        { width: 1000, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 },
    ];
    return(
    <Carousel breakPoints={breakPoints}>
        {Images.map(image =>
            <ImageCard key={image.id} url={image.url} title={image.title} description={image.description} subtitle={image.subtitle} duration={image.duration} ></ImageCard>
        )}
    </Carousel>);

}
export default SlidingImages;


