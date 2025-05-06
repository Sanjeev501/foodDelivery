import { useState } from "react";
import Tile from "../../components/Tile";
import SearchBox from "../../components/SearchBox";

const Instamart = () => {
  const [grocery, setGrocery] = useState("");
  const [item, setItem] = useState(null);

  const search = () => {
    setItem({ title: grocery, price: 99 });
  };

  return (
    <div className="instamart">
      <h1>Instamart</h1>
      <p>Welcome to Instamart, your one-stop shop for all your needs!</p>
      <SearchBox
        value={grocery}
        onChange={setGrocery}
        placeholder="Search for Groceries..."
      />
      <button className="searchBtn" onClick={search}>
        Search
      </button>
      {item && <Tile title={item.title} price={item.price} />}
    </div>
  );
};
export default Instamart;
