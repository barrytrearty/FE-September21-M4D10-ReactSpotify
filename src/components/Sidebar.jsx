import SpotifyLogo from "../data/spotifiy.png";
import { IoMdHome } from "react-icons/io";
import { BsSearch, BsHeartFill } from "react-icons/bs";
import { VscLibrary } from "react-icons/vsc";
// import { ImBooks } from "react-icons/im";
import { AiFillPlusSquare } from "react-icons/ai";
import { CgArrowDownO } from "react-icons/cg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container" id="sidebar">
      <div className="sidebar">
        <ul className="nav flex-column navbar-dark d-flex  h-60">
          <li className="nav-item mb-4 text-white">
            <img
              className="pt-3"
              src={SpotifyLogo}
              height="60px"
              width="auto"
              alt=""
              srcset=""
            />
          </li>
          <Link to="/Home">
            <li className="nav-item text-white activehome ">
              <p>
                <IoMdHome className="react-icon" />
                Home
              </p>
            </li>
          </Link>
          {/* <li className="nav-item text-white">
            <p>
              <a href="#Details">
                <input
                  id="input"
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  onchange="searchAlbums(this.value)" // NEEDS REFACTORED
                />
                <BsSearch id="search-icon" className="react-icon" />
              </a>
            </p>
          </li> */}
          <a href="#Details">
            <li className="nav-item text-white">
              <p>
                <BsSearch className="react-icon" />
                Search
              </p>
            </li>
          </a>
          <a href="#Details">
            <li className="nav-item text-white mb-4">
              <p>
                {/* <ImBooks className="react-icon" /> */}
                <VscLibrary className="react-icon" />
                Your Library
              </p>
            </li>
          </a>
          <a href="#Details">
            <li className="nav-item text-white">
              <p>
                <AiFillPlusSquare className="react-icon" />
                Create Playlist
              </p>
            </li>
          </a>
          <a href="#Details">
            <li className="nav-item text-white mb-0">
              <p>
                <BsHeartFill className="react-icon" />
                Liked Songs
              </p>
            </li>
          </a>
        </ul>
        <div id="scrollbar-list" className="pl-4 pb-5 mb-5">
          <a className="click-me" href="#Album">
            <p>The Rise and Fall of Ziggy Stardust</p>
          </a>
          <a className="click-me " href="#Album">
            <p>My Beautiful Dark Twisted Fantasy</p>
          </a>

          <a className="click-me " href="#Album">
            <p>In Love With You-</p>
          </a>

          <a className="click-me" href="#Album">
            <p>This Is Rod Stewart</p>
          </a>

          <a className="click-me" href="#Album">
            <p>FRANCHISE ft.Young Thug...</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Your Top Songs 2019</p>
          </a>
          <a className="click-me" href="#Album">
            <p>Palleggio</p>
          </a>
          <a className="click-me" href="#Album">
            <p>An Awesome Wave</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Planet Caravan</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Jack 30th Party 2</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Jack 30th Party</p>
          </a>
          <a className="click-me" href="#Album">
            <p>This is Opeth</p>
          </a>
          <a className="click-me" href="#Album">
            <p>Matal Ballads</p>
          </a>
          <a className="click-me" href="#Album">
            <p>New Playlist</p>
          </a>

          <a className="click-me" href="#Album">
            <p>You Top Songs 2018</p>
          </a>

          <a className="click-me" href="#Album">
            <p>What People Say I Am, That Is What I Am Not</p>
          </a>

          <div id="install-app" className="text-white pl-4 p-1">
            <p>
              <a className="text-white" href="#Details">
                {" "}
                <CgArrowDownO className="react-icon" />
                Install App
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//Get rid of ps
//Have each link go to a different album page

export default Sidebar;
