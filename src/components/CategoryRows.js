import "../CategoryRows.css";
import Row from "./Row";

const CategoryRows = () => {
  return (
    <ul className="category-row-list">
      <Row category="Trending Now" />
    </ul>
  );
};

export default CategoryRows;
