import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CategoryRows from "./components/CategoryRows";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <CategoryRows />
    </div>
  );
}
