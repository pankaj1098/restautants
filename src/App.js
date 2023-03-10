import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import OrderList from "./components/OrderList";
import Profile from "./components/Profile";
import RestaurantList from "./components/RestaurantList";
import Signup from "./components/Signup";
import UpdateAccount from "./components/UpdateAccount";
import { getUserDataAction } from "./reducer/asyncUserReducer";
import MenuList from "./components/MenuList";
// import InputForm from "./components/NewForm";
import { ToastContainer } from "react-toastify";

function App() {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData === undefined) {
      // console.log(1);
      dispatch(getUserDataAction());
    } else return;
  }, [userData]);

  return (
    <div>
      <Header />
      {/* <InputForm/> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurantList" element={<RestaurantList />}></Route>
        <Route path="/menuList" element={<MenuList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orderlist" element={<OrderList />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/updateaccount" element={<UpdateAccount />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
