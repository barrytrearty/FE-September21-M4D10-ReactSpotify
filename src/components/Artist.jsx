import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import SongCard from "./SongCard";

const Artist = ({ match }) => {
  const artistId = match.params.id;
  console.log(artistId);

  const [topTrackArray, setTopTrackArray] = useState([]);
  const [topAlbumArray, setTopAlbumArray] = useState([]);
  const [artistJumbo, setArtistJumbo] = useState("");

  const getArtistObject = async () => {
    try {
      let response1 = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`
      );
      let artistObj = await response1.json();
      setArtistJumbo(artistObj.picture_big);

      let response2 = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=5`
      );
      let topFive = await response2.json();
      setTopTrackArray(topFive.data.slice(0, 5));

      let response3 = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistObj.name}`
      );
      let topAlbums = await response3.json();
      setTopAlbumArray(topAlbums.data.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArtistObject();
  }, []);

  return (
    <div class="artist-container">
      <div>
        {console.log(topTrackArray)}
        <img src={artistJumbo} alt="" />
        <div>
          <p class="ml-auto text-white pt-5 pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle-fill"
              color="#0084b4"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>{" "}
            Verified artist
          </p>
          {/* <h1 class="display-4 text-white" style="font-weight: bolder;">
            ${object.name}
          </h1> */}
          <p class="lead text-white pb-3">37,120,733 monthly listeners.</p>
        </div>
      </div>

      <div class="container-fluid artist-songs-container">
        <div class="top-of-artist-songs mb-3 pt-3">
          <div class="spotify-circle">
            <div class="half-of-pause first-pause"></div>
            <div class="half-of-pause second-pause"></div>
          </div>
          <div class="follow"> FOLLOW </div>
          <div class="dots">
            {" "}
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-9">
            <h2 class="section-heading">Popular</h2>
            <table class="table table-borderless mt-3">
              <tbody id="artist-body">
                {topTrackArray.map((track) => (
                  <tr>
                    <td>1</td>
                    <td>
                      <img src={track.album.cover} alt="" />
                    </td>
                    <td>{track.title}</td>
                    <td>1,012,332,444</td>
                    <td>${track.duration / 100}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="d-none d-md-inline col-md-3 artist-pick mb-3">
            <h2 class="section-heading mb-3">Artist pick</h2>
            <div class="row">
              <div class="col-2">
                <img src="assets/mgmt.png" width="50px" alt="" />
              </div>
              <div class="col-8 artist-description">
                <div class="posted">
                  <img class="round-artist" src="assets/nevermind.png" alt="" />{" "}
                  <p id="postedBy"> Posted by Queen</p>
                </div>
                <h3 id="bestOf">Queen Best of</h3>
                <p id="playlist">Playlist</p>
              </div>
            </div>
          </div>
        </div>

        <button id="artist-row-see" class="see-all-button" onclick="seeMore()">
          <h4 class="see-all mb-4">SEE MORE</h4>
        </button>
        <h2 class="section-heading">Popular releases</h2>

        <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
          {topAlbumArray.map((songObj) => (
            <Col className="px-1" key={songObj.id}>
              <SongCard songObj={songObj} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Artist;
