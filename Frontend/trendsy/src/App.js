import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Products } from "./Pages/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
