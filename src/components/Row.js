import Show from "./Show";
import img0 from "../images/shows/show-0.jpg";
import img1 from "../images/shows/show-1.jpg";
import img2 from "../images/shows/show-2.jpg";
import img3 from "../images/shows/show-3.jpg";
import img4 from "../images/shows/show-4.jpg";
import img5 from "../images/shows/show-5.jpg";

const Row = (props) => {
  const shows = [img0, img1, img2, img3, img4];
  const showCollection = shows.map((e) => <Show image={e} />);
  return (
    <li className="category-row">
      <h4>{props.category}</h4>
      <div className="multi-row-wrapper">
        <div className="shows-container">{showCollection}</div>
        <div className="shows-container">{showCollection}</div>
      </div>
      <button className="left-button">l</button>
      <button className="right-button">r</button>
    </li>
  );
};

export default Row;
