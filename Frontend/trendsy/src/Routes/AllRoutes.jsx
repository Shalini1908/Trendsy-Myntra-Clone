import React from 'react';
import {Routes , Route} from "react-router-dom";
import Admin from '../Admin/Admin';
import AdminSignin from '../Admin/AdminSignin';
import Home from '../Pages/Home';

const AllRoutes = () => {
  return (
    <>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/admin' element={<Admin/>}></Route>
  <Route path='/adminsignin' element={<AdminSignin/>}></Route>
  </Routes>
    
  </>
  )
}

export default AllRoutes