import "./Trailer.css";
import VideoCard from "./VideoCard";

const Trailer = () => {
  return (
    <div className="trailer">
      <h2>Rec</h2>
      <div className="rec_videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default Trailer;
