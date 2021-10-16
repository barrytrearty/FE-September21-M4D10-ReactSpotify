// import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SongCard = ({ songObj }) => {
  return (
    <Link to={"/Album/" + songObj.album.id}>
      <div className="album-card2-cont">
        <div className="album-card2">
          <img src={songObj.album.cover_medium} alt="" />
          <h5>{songObj.artist.name}</h5>
          <p>{songObj.title}</p>
          <div className="play-button-div">
            <div className="play-button-bg"></div>
            <i className="bi bi-play-circle-fill play-button"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
