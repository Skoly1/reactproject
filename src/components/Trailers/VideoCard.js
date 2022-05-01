import image from "../images/Doc.jpg";
import "./VideoCard.css";

const VideoCard = (props) => {
  return (
    <div className="videocard">
      <img className="videocard_thumbnail" src={image} alt="" />
      <div className="video_title">
        <h4>Doctor Strange 2 Trailer</h4>
      </div>
    </div>
  );
};

export default VideoCard;
