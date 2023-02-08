import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

// import ButtonAppBar from "./components/ButtonAppBar";
import Cart from "./components/Cart";
// import Footer from "./components/Footer";
import Header from "./components/Header";
// import MenuAppBar from "./components/Header";
import Home from "./components/Home";
// import Home from "./components/Home";
import LogIn from "./components/LogIn";
import OrderList from "./components/OrderList";
import Restaurants from "./components/Restaurants";
import Signup from "./components/Signup";
import UpdateAccount from "./components/UpdateAccount";
import { getUserDataAction } from "./reducer/asyncUserReducer";

function App() {
  const userLogInData = useSelector((state) => state.user.userLogInData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogInData === undefined) {
      console.log(1);
      dispatch(getUserDataAction());
    } else return;
  }, []);

  return (
    <div>
      <Header />
      {/* <MenuAppBar /> */}

      {/* <ButtonAppBar /> */}
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurants" element={<Restaurants />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/orderlist" element={<OrderList />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/updateaccount" element={<UpdateAccount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
