// import React from 'react'
// //import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
// //import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { useState,useEffect } from "react";
import Images from "./Images";
import "./ImageCard.css";
import ImageCard from "./ImageCard";
import "./SlidingImages.css";
import WatchlistCard from "./WatchlistCard";
import Thumbnails from "./Thumbnails";
import ThumbnailImages from "./ThumbnailImages";
import ApiData from "./ApiData";
import VerifierChallenger from "../VerifierChallenger";


const SlidingImages = () => {

  const [movie, setMovie] = useState([]);
  const [trending, setTrending] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [docu, setDocu] = useState([]);
  const [horrorMovies, setHorrorMovie] = useState([]);
  const [romanceMovies, setRomanceMovie] = useState([]);
  const [back_img, setBackImg] = useState("");
  // const [ban_name, setBanName] = useState("");
  // const [ban_dec, setBanDes] = useState("");
  // const [watchlist, setToWatchlist] = useState([]);
  const rand =0;
  // const carouselRef = useRef(0)
  const [watchlist, setWatchlist] = useState([]);
  // console.log('watchList:')
  // console.log(watchlist)
  // const button_display=<button onClick={onAddWatchlist}>{button_display}</button>
  const onClickRemoveWatchList = (removeid) => {
    const removeWatchItem = watchlist.filter((lis) => lis.id !== removeid);
    setWatchlist(removeWatchItem);
  };
  const onPressWatchList = (itemid) => {
    //console.log("in onpress" + itemid)
    //console.log("movie",movie)
    movie.filter((image) => {if (image.id === itemid){
      //console.log(image)
      setWatchlist([...watchlist,image])}
      return
      // console
    });
    // console.log("addwatchitem",addWatchItem)
    // const newWatchItem = {
    //   ...addWatchItem,
      // id: Math.random().toString(),
    // };

    // console.log("new item:")
    // console.log(newWatchItem)
    // console.log(Images)

    
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 1000, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];

  var he = <p></p>;
  var content_watchlist = [];
  if (watchlist.length > 0) {
    he = <h1 className="slidingimages-heading">Watchlist</h1>;
    content_watchlist = (
      <Carousel breakPoints={breakPoints} itemPosition="START" renderPagination={({pages,activePage,onClick})=>{return <div/>}}>
        {watchlist.map((li) => (
          <WatchlistCard
            onRemoveWatchList={onClickRemoveWatchList}
            key={li.id}
            id={li.id}
            url={"https://image.tmdb.org/t/p/original"+li.poster_path}
            link={li.link}
            title={li.title}
            description={li.overview.substr(0,60)+"..."}
            subtitle={li.subtitle}
            duration={li.duration}
            inwatch={li.inwatch}
          ></WatchlistCard>
        ))}
      </Carousel>
    );
  }
  const breakPoints_thumbnails = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 },
    { width: 800, itemsToShow: 1 },
    { width: 1000, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
  ];

  // const itemsPerPage = 1
  const carouselRef = useRef(null);
  // const totalPages = Math.ceil(Images.length / itemsPerPage)
  // let resetTimeout;
  const onNextStart = (currentItem, nextItem) => {
    // console.log("start");
    // console.log(nextItem);
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(Images.length);
    }
  };
  const onNextEnd = (currentItem, nextItem) => {
    // console.log("end");
    // console.log(nextItem, ThumbnailImages.length - 1);
    if (currentItem.index === ThumbnailImages.length - 1) {
      // we hit the last item, go to first item
      setTimeout(() => {
        carouselRef.current.goTo(0);
      }, 4000);
    }
  };
  const onPrevEnd = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(Images.length);
    }
  };

  // const [movie, setMovie] = useState([]);
  // const [trending, setTrending] = useState([]);
  // const [comedy, setComedy] = useState([]);
  // const [docu, setDocu] = useState([]);
  // const [horroMovies, setHorrorMovie] = useState([]);
  // const [romanceMovies, setRomanceMovie] = useState([]);
  // const [back_img, setBackImg] = useState("");
  // // const [ban_name, setBanName] = useState("");
  // // const [ban_dec, setBanDes] = useState("");
  // // const [watchlist, setToWatchlist] = useState([]);
  // const rand =0;

  useEffect(() => {
    fetch(ApiData.fetchTrending)
      .then((res) => res.json())
      .then(
        (data) => {
          // console.log(data.results)
          setMovie(data.results);
          setBackImg(
            "https://image.tmdb.org/t/p/original"+
              data.results[rand].backdrop_path
          );
          // setBanName(data.results[rand].name);
          // setBanDes(data.results[rand].overview);
        },
        fetch(ApiData.fetchTrending)
          .then((res) => res.json())
          .then((data) => {
            setTrending(data.results);
          }),
        fetch(ApiData.fetchHorrorMovies)
          .then((res) => res.json())
          .then(
            (data) => {
              setHorrorMovie(data.results);
            },
            fetch(ApiData.fetchDocumentaries)
              .then((res) => res.json())
              .then(
                (data) => {
                  setDocu(data.results);
                },
                fetch(ApiData.fetchComedyMovies)
                  .then((res) => res.json())
                  .then(
                    (data) => {
                      setComedy(data.results);
                    },
                    fetch(ApiData.fetchRomanceMovies)
                      .then((res) => res.json())
                      .then((data) => {
                        setRomanceMovie(data.results);
                      })
                  )
              )
          )
      );
  }, []);

  //console.log(movie)
  return (
    <div className="outer">
      
      <Carousel
        breakPoints={breakPoints_thumbnails}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onPrevEnd={onPrevEnd}
        onNextEnd={onNextEnd}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
      >
        {movie.map((image) => (
          <Thumbnails
            // onClickWatchList={onPressWatchList}
            key={image.id}
            id={image.id}
            inwatch={image.inwatch}
            url={"https://image.tmdb.org/t/p/original"+image.backdrop_path}
            link={image.link}
            title={image.title}
            name={!image.title?image.name:""}
            description={image.overview.substr(0,80)+"..."}
            subtitle={image.release_date?image.media_type+", "+image.release_date:"Series"}
            duration={image.duration}
          ></Thumbnails>
        ))}
      </Carousel>
      {he}
      {content_watchlist}
      <h1 className="slidingimages-heading">Trending</h1>
      <Carousel breakPoints={breakPoints} >
        {movie.map((image) => (
          <ImageCard
            onClickWatchList={onPressWatchList}
            onRemoveWatchList={onClickRemoveWatchList}
            key={image.id}
            id={image.id}
            inwatch={image.inwatch}
            url={"https://image.tmdb.org/t/p/original"+image.poster_path}
            link={image.link}
            title={image.title}
            name={!image.title?image.name:""}
            description={image.overview.substr(0,60)+"..."}
            subtitle={image.subtitle}
            duration={image.duration}
          ></ImageCard>
        ))}
      </Carousel>
      <h1 className="slidingimages-heading">Comedy</h1>
      <Carousel breakPoints={breakPoints} >
        {comedy.map((image) => (
          <ImageCard
            onClickWatchList={onPressWatchList}
            onRemoveWatchList={onClickRemoveWatchList}
            key={image.id}
            id={image.id}
            inwatch={image.inwatch}
            url={"https://image.tmdb.org/t/p/original"+image.poster_path}
            link={image.link}
            title={image.title}
            name={!image.title?image.name:""}
            description={image.overview.substr(0,60)+"..."}
            subtitle={image.subtitle}
            duration={image.duration}
          ></ImageCard>
        ))}
      </Carousel>
      <h1 className="slidingimages-heading">Horror</h1>
      <Carousel breakPoints={breakPoints} >
        {horrorMovies.map((image) => (
          <ImageCard
            onClickWatchList={onPressWatchList}
            onRemoveWatchList={onClickRemoveWatchList}
            key={image.id}
            id={image.id}
            inwatch={image.inwatch}
            url={"https://image.tmdb.org/t/p/original"+image.poster_path}
            link={image.link}
            title={image.title}
            name={!image.title?image.name:""}
            description={image.overview.substr(0,60)+"..."}
            subtitle={image.subtitle}
            duration={image.duration}
          ></ImageCard>
        ))}
      </Carousel>
      <h1 className="slidingimages-heading">Romance</h1>
      <Carousel breakPoints={breakPoints} >
        {romanceMovies.map((image) => (
          <ImageCard
            onClickWatchList={onPressWatchList}
            onRemoveWatchList={onClickRemoveWatchList}
            key={image.id}
            id={image.id}
            inwatch={image.inwatch}
            url={"https://image.tmdb.org/t/p/original"+image.poster_path}
            link={image.link}
            title={image.title}
            name={!image.title?image.name:""}
            description={image.overview.substr(0,60)+"..."}
            subtitle={image.subtitle}
            duration={image.duration}
          ></ImageCard>
        ))}
      </Carousel>
      <h1 className="slidingimages-heading">Documentary</h1>
      <Carousel breakPoints={breakPoints} >
        {docu.map((image) => (
          <ImageCard
            onClickWatchList={onPressWatchList}
            onRemoveWatchList={onClickRemoveWatchList}
            key={image.id}
            id={image.id}
            inwatch={image.inwatch}
            url={"https://image.tmdb.org/t/p/original"+image.poster_path}
            link={image.link}
            title={image.title}
            name={!image.title?image.name:""}
            description={image.overview.substr(0,60)+"..."}
            subtitle={image.subtitle}
            duration={image.duration}
          ></ImageCard>
        ))}
      </Carousel>
      {/* <VerifierChallenger></VerifierChallenger> */}
    </div>
  );
};

export default SlidingImages;
