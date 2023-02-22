import './App.css';
import {Routes , Route} from "react-router-dom";
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
    
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
 </Routes>



    </div>
  );
}

export default App;
