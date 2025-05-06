import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Instamart from "./Instamart/Instamart";

function App() {
  return (
    <div className="App">
      <h2>Hello App</h2>
      <Router>
        <Routes>
          <Route path="/" element={<Instamart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
