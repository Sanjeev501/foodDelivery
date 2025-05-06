import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Instamart from "./pages/Instamart/Instamart";
import FoodDelivery from "./pages/FoodDelivery/FoodDelivery";
import Restaurant from "./pages/Restaurant/Restaurant";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <h2>Bringing Restaurants & Groceries to Your Doorstep.</h2>
            }
          />
          <Route path="/instamart" element={<Instamart />} />
          <Route path="/foodDelivery" element={<FoodDelivery />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
