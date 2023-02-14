import React from "react";
import { useSelector } from "react-redux";
import { selectOrderList } from "../reducer/Counter-slice";

const OrderList = () => {
  const orderList = useSelector(selectOrderList);
  console.log(orderList)
  return <div>OrderList</div>;
};

export default OrderList;
