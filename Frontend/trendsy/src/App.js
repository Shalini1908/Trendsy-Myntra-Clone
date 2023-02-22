
import { Products } from "./Pages/Products";
import './App.css';
import AllRoutes from './Routes/AllRoutes';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
 <Navbar/>
    
<AllRoutes/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
    <Route path="/products" element={<Products />}></Route>
 </Routes>

  <Footer/>
    </div>
  );
}

export default App;
