import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSignin from "../Admin/AdminSignin";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import { Products } from "../Pages/Products";
import AdminNavSide from "../Admin/AdminNavSide";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<AdminNavSide />}></Route>
        <Route path="/adminsignin" element={<AdminSignin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products/:Q" element={<Products />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
