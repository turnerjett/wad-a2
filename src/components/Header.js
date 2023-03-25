import headImg from "../images/netflix-header.jpg";
import "../Header.css";
import titleImg from "../images/netflix-title.png";
import SVGSelect from "./SVGSelect";
// import useFetch from "../hooks/useFetch";

const Header = () => {
  return (
    <header>
      <img className="header-image" src={headImg} alt="netflix header" />
      <div className="header-content">
        <img
          className="title-image"
          src={titleImg}
          alt="stranger things title"
        />
        <div className="subtitle-container">
          <SVGSelect svgName="top10" />
          <h3>No. 1 in TV Shows Today</h3>
        </div>
        <p className="header-description">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces and one strange
          little girl.
        </p>
        <div className="header-buttons-container">
          <button className="header-play-button">
            <SVGSelect svgName="play" />
            Play
          </button>
          <button className="header-more-info-button">
            <SVGSelect svgName="info" />
            More info
          </button>
        </div>
      </div>
      <div className="rating-container">
        <h5>MA 15+</h5>
      </div>
    </header>
  );
};

export default Header;
