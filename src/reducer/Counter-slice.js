import { createSlice } from "@reduxjs/toolkit";

const menuList = [
  {
    id: "c39ad4a1-929f-4ed1-9b43-8d77f895b102",
    count: 0,
    title: "Vegetable Biryani",
    description:
      "A fragrant and flavorful Indian rice dish with mixed vegetables, herbs, and spices.",
    price: 999,
    image: "https://www.example.com/images/vegetable-biryani.jpg",
    rating: 4.3,
  },
  {
    id: "7aeb3383-4216-4d1e-bc22-75452b3d3c7e",
    count: 0,
    title: "Spinach and Feta Stuffed Mushrooms",
    description:
      "Mushroom caps filled with a delicious mixture of spinach, feta cheese, and herbs.",
    price: 699,
    image: "https://www.example.com/images/stuffed-mushrooms.jpg",
    rating: 4.1,
  },
  {
    id: "fc4a4bf4-408d-4d8d-99db-2e78b2993b11",
    count: 0,
    title: "Vegetarian Pad Thai",
    description:
      "A classic Thai dish made with rice noodles, vegetables, and peanuts in a sweet and tangy sauce.",
    price: 1099,
    image: "https://www.example.com/images/pad-thai.jpg",
    rating: 4.5,
  },
  {
    id: "6cf5f6db-b7a9-4246-a13c-7876890a3073",
    count: 0,
    title: "Caprese Salad",
    description:
      "A fresh and simple Italian salad made with sliced tomatoes, fresh mozzarella, and basil leaves.",
    price: 799,
    image: "https://www.example.com/images/caprese-salad.jpg",
    rating: 4.0,
  },
  {
    id: "c45578c1-1f28-447c-8a63-702f67aa9da2",
    count: 0,
    title: "Roasted Vegetable Sandwich",
    description:
      "A hearty sandwich with roasted bell peppers, zucchini, eggplant, and pesto mayo.",
    price: 549,
    image: "https://www.example.com/images/vegetable-sandwich.jpg",
    rating: 4.2,
  },
  {
    id: "6c8bb56b-747d-4c9b-9b8c-64a18452e5df",
    count: 0,
    title: "Grilled Portobello Mushroom Burger",
    description:
      "A meaty and satisfying vegetarian burger made with grilled portobello mushrooms, cheese, and veggies.",
    price: 799,
    image: "https://www.example.com/images/mushroom-burger.jpg",
    rating: 4.4,
  },
  {
    id: "12911f9c-893d-4d45-91c5-2e5d5c5e5d5c",
    count: 0,
    title: "Vegan Lentil Soup",
    description:
      "A hearty and flavorful soup made with lentils, vegetables, and spices.",
    price: 499,
    image: "https://www.example.com/images/lentil-soup.jpg",
    rating: 4.3,
  },
];

const foodOrderSlice = createSlice({
  name: "foodOrder",
  initialState: {
    list: menuList,
    cartItems: [],
    orderList: [],
  },
  reducers: {
    //increasemented
    increment(state, action) {
      const item = action.payload;

      const updateItems = { ...item, count: 1 };
      const itemIdx = state.list.findIndex((obj) => obj.id === updateItems.id);

      state.list[itemIdx].count += 1;

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

      if (item.count < 2) {
        state.cartItems = state.cartItems.filter(
          (order) => order.id !== item.id
        );
      } else {
        const objIdx = state.cartItems.findIndex((obj) => obj.id === item.id);
        state.cartItems[objIdx].count -= 1;
        console.log(JSON.parse(JSON.stringify(state.cartItems[objIdx])));
      }
    },
    orderNow(state, action) {
      state.orderList.push(action.payload);
      state.cartItems = [];
      const newRestaurantList = [...state.list];
      const restaurants = newRestaurantList.map((item) => {
        return { ...item, count: 0 };
      });
      state.list = restaurants;
    },
  },
});

export default foodOrderSlice;
export const { increment, decrement, orderNow } = foodOrderSlice.actions;
export const selectOrderList = (state) => state.foodOrder.orderList;
