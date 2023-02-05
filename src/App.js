import React from "react";
import { Route, Routes } from "react-router-dom";

import ButtonAppBar from "./components/ButtonAppBar";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import OrderList from "./components/OrderList";
import Restaurants from "./components/Restaurants";
import Signup from "./components/Signup";
import UpdateAccount from "./components/UpdateAccount";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Routes>
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
