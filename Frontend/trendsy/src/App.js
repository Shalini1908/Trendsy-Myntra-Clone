
import { Products } from "./Pages/Products";
import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>


   <Footer/>

    </div>
  );
}

export default App;
