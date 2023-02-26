import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSignin from "../Admin/AdminSignin";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import { Products } from "../Pages/Products";
import AdminNavSide from "../Admin/AdminNavSide";
import { SingleProduct } from "../Pages/SingleProduct";
import Graph from "../Admin/Graph";

import Admin from "../Admin/Admin";
import Address from "../Pages/Address";
import Payment from "../Pages/Payment";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/adminsignin" element={<AdminSignin/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/products/:Q" element={<Products />}></Route>
        <Route
          path="/products/:Q/:title/:_id"
          element={<SingleProduct />}
        ></Route>
        <Route path="/graph" element={<Graph/>}></Route>
         <Route path="/address" element={<Address/>}></Route>
         <Route path="/payment" element={<Payment/>}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
