import "../NavBar.css";
import logo from "../images/netflix-logo.png";
import SVGSelect from "./SVGSelect";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="netflix-logo" width="90px" />
        <ul>
          <li style={{ fontWeight: 700 }}>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right">
        <button>
          <SVGSelect svgName="search" />
        </button>
        <button>
          <SVGSelect svgName="bell" />
        </button>
        <button className="avatar-button">
          <div className="avatar-container" />
          <div className="down-arrow" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
