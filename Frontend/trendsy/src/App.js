import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from './Pages/Home';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
 </Routes>





 <Footer/>

    </div>
  );
}

export default App;
