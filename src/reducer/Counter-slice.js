import { createSlice } from "@reduxjs/toolkit";

const menuList = [
  {
    id: "1",
    count: 0,
    title: "chilliPotato",
    description: "Dish",
    price: "90",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: "2",
    count: 0,
    title: "Maal Pua",
    description: "Dish",
    price: "140",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "3",
    count: 0,
    title: "Salad",
    description: "Dish",
    price: "70",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  },
  {
    id: "4",
    count: 0,
    title: "Fruit Cake",
    description: "Dish",
    price: "190",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
  },
];

const foodOrderSlice = createSlice({
  name: "foodOrder",
  initialState: {
    list: menuList,
    cartItems: [],
  },
  reducers: {
    //increasemented
    increment(state, action) {
      const item = action.payload;

      const updateItems = { ...item, count: 1 };
      const itemIdx = state.list.findIndex((obj) => obj.id === updateItems.id);

      state.list[itemIdx].count += 1;
      // console.log(updateItems);
      // state.count += 1;
      // console.log(action.payload);
      if (state.cartItems.length === 0) {
        state.cartItems.push(updateItems);
      } else {
        const objIdx = state.cartItems.findIndex(
          (obj) => obj.id === updateItems.id
        );
        // console.log(objIdx);
        if (objIdx === -1) {
          state.cartItems.push(updateItems);
        } else {
          state.cartItems[objIdx].count += 1;
        }
      }
      // console.log(state.cartItems);
    },
    //decreasement
    decrement(state, action) {
      const item = action.payload;

      // const updateItems = { ...item };
      const itemIdx = state.list.findIndex((obj) => obj.id === item.id);
      if (state.list[itemIdx].count === 0) {
        state.list[itemIdx].count = 0;
        alert("pls add item in cart");
      } else {
        state.list[itemIdx].count--;
      }

      // console.log(itemIdx);

      // console.log(JSON.parse(JSON.stringify(state.list[itemIdx])));
      if (item.count < 2) {
        state.cartItems = state.cartItems.filter(
          (order) => order.id !== item.id
        );
      } else {
        const objIdx = state.cartItems.findIndex((obj) => obj.id === item.id);
        state.cartItems[objIdx].count -= 1;
        console.log(JSON.parse(JSON.stringify(state.cartItems[objIdx])));
      }

      // if (state.cartItems.length === 0) {
      //   state.cartItems.pop(updateItems);
      // } else {
      //   const objIdx = state.cartItems.findIndex(
      //     (obj) => obj.id === updateItems.id
      //   );
      //   // console.log(objIdx);
      //   if (objIdx === -1) {
      //     state.cartItems.pop(updateItems);
      //   } else {
      //     state.cartItems[objIdx].count -= 1;
      //   }
      // }
    },
  },
});

export default foodOrderSlice;
// export const foodOrderActions = foodOrderSlice.actions;
export const { increment, decrement } = foodOrderSlice.actions;
