import { useState } from "react";
import SearchBox from "../../components/SearchBox";
import Tile from "../../components/Tile";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState("");
  const [item, setItem] = useState(null);
  let discount = "40% off on first order";

  const search = () => {
    setItem({ title: restaurant, price: 199 });
  };
  return (
    <div className="restaurant">
      <h1>Restaurant</h1>
      <p>Welcome to Restaurant, your one-stop shop for all your needs!</p>
      <SearchBox
        value={restaurant}
        onChange={setRestaurant}
        placeholder="Search for Restaurants..."
      />
      <button className="searchBtn" onClick={search}>
        Search
      </button>
      {item && <Tile title={item.title} discount={discount} />}
    </div>
  );
};
export default Restaurant;
