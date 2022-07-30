import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import { useSelector } from "react-redux";
import AdminTemplate from "../template/Admintemplate/AdminTemplate";
import UserTemplate from "../template/UserTemplate/UserTemplate";
import LoginPage from "../pages/Login";
import NotFound from "../pages/NotFound/NotFound";

function RouterMain() {
  const dataUser = useSelector((state) => state.user);
  const condition = (component) =>
    // eslint-disable-next-line no-unused-expressions
    dataUser?.typeUser === "QuanTri" ? (
      <AdminTemplate />
    ) : dataUser?.typeUser === "KhachHang" ? (
      <UserTemplate />
    ) : (
      component
    );

  return (
    
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<LoginPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default RouterMain;
