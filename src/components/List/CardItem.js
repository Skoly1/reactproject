import React from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import image from "../images/Doc.jpg";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <HoverVideoPlayer
              className="cards__item__img"
              videoSrc={props.src}
              pausedOverlay={
                <img
                  src={image}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
            {/* <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            /> */}
            <div className="cards__item__info">
              <h5 className="cards__item__text">{props.text}</h5>
            </div>
          </figure>
        </Link>
      </li>
    </>
    // <>
    //   <li className="cards__item">
    //     <Link className="cards__item__link" to={props.path}>
    //       <figure className="cards__item__pic-wrap" data-category={props.label}>
    //         <div className="cards__item__img">
    //           {/* <HoverVideoPlayer
    //             className="cards__item__img"
    //             videoSrc={props.src}
    //             muted={false}
    //             volume={0.5}
    //             restartOnPaused
    //             pausedOverlay={
    //               <img
    //                 src={image}
    //                 alt=""
    //                 style={{
    //                   // Make the image expand to cover the video's dimensions
    //                   width: "100%",
    //                   height: "130%",
    //                   objectFit: "cover",
    //                 }}
    //               />
    //             }
    //             // loadingOverlay={
    //             //   <div className="loading-overlay">
    //             //     <div className="loading-spinner" />
    //             //   </div>
    //             // }
    //           /> */}

    //           <img
    //             className="cards__item__img"
    //             alt="Travel Image"
    //             src={image}
    //           />
    //         </div>
    //       </figure>
    //       <div className="cards__item__info">
    //         <h5 className="cards__item__text">{props.text}</h5>
    //       </div>
    //     </Link>
    //   </li>
    // </>
  );
}

export default CardItem;
