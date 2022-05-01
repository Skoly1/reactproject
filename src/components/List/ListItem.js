import "./ListItem.css";
import HoverVideoPlayer from "react-hover-video-player";
import video from "../../videos/DocStrange.mp4";
import image from "../images/Doc.jpg";
const ListItem = () => {
  return (
    <div className="listItem">
      <div className="video-container">
        <HoverVideoPlayer
          videoSrc={video}
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
      </div>
    </div>
  );
};

export default ListItem;
