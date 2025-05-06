import { useState } from "react";
import SearchBox from "../../components/SearchBox";
import Tile from "../../components/Tile";

const FoodDelivery = () => {
  const [dish, setDish] = useState("");
  const [item, setItem] = useState(null);

  const search = () => {
    setItem({ title: dish, price: 199 });
  };

  return (
    <div className="foodDelivery">
      <h1>FoodDelivery</h1>
      <p>Welcome to FoodDelivery, your one-stop shop for all your needs!</p>
      <SearchBox
        value={dish}
        onChange={setDish}
        placeholder="Search for Food Items..."
      />
      <button className="searchBtn" onClick={search}>
        Search
      </button>
      {item && <Tile title={item.title} price={item.price} />}
    </div>
  );
};
export default FoodDelivery;
