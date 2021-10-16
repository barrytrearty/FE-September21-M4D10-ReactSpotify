// import { useParams } from "react-router";
import { useState, useEffect } from "react";

const Album = ({ match }) => {
  const albumId = match.params.id;
  console.log(albumId);

  const [trackArray, setTrackArray] = useState([]);
  const [albumName, setAlbumName] = useState("");

  const [songPreview, setSongPreview] = useState(null);
  // onClick(setSongPreview(tracklist.track.data.[0].preview))

  const searchTrackList = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "58eb3e9c2amsh5fd41210fbeac96p1bb7bcjsn83e742160779",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      let trackList = await response.json();
      // setTracksArray(tracksList.data.slice(0, 6));
      setAlbumName(trackList.title);
      setTrackArray(trackList.tracks.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchTrackList();
  }, []);

  return (
    <div>
      {console.log(albumName)}
      {console.log(trackArray)}
      <div className=" main-container  album-songs-container">
        <div className="top-of-artist-songs mb-3 pt-3">
          <div className="spotify-circle">
            <div className="half-of-pause first-pause"></div>
            <div className="half-of-pause second-pause"></div>
          </div>
          <div className="album-heart">
            <i className="bi bi-heart"></i>
          </div>
          <div className="album-dots">
            <div className="small-circle"></div>
            <div className="small-circle"></div>
            <div className="small-circle"></div>
          </div>
        </div>
        <div className="row ml-1">
          <table className="table table-borderless ml-3">
            <thead>
              <tr className="border_bottom">
                <td>#</td>
                <td>Title</td>
                <td>
                  <i className="bi bi-clock keep-on-page-clock"></i>
                </td>
              </tr>
            </thead>

            <tbody id="album-table-body">
              {trackArray.map((track) => (
                <tr>
                  <td className="align-middle">1</td>
                  <td>
                    <div className="albumsong">
                      <strong>{track.title}</strong>
                    </div>
                    <div className="artist-name">{track.artist.name}</div>
                  </td>

                  <td className="align-middle keep-on-page">
                    {track.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Album;
