import { createSlice } from "@reduxjs/toolkit";

const italianMeals = [
  {
    id: 1,
    name: "Margherita Pizza",
    description:
      "Traditional Italian pizza with tomato sauce, mozzarella cheese, and fresh basil",
    price: 350,
    rating: 4.5,
    count: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    description:
      "Spaghetti served with a rich and meaty tomato sauce with ground beef and parmesan cheese",
    price: 280,
    rating: 4.5,
    count: 0,
    imageUrl:
      "https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1-500x480.jpg",
  },
  {
    id: 3,
    name: "Lasagna",
    description:
      "Layered pasta with beef, tomato sauce, and a blend of mozzarella and parmesan cheese",
    price: 300,
    rating: 4.3,
    count: 0,
    imageUrl:
      "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg",
  },
  {
    id: 4,
    name: "Fettuccine Alfredo",
    description: "Creamy fettuccine pasta with parmesan cheese and butter",
    price: 305,
    rating: 4.2,
    count: 0,
    imageUrl:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg",
  },
  {
    id: 5,
    name: "Chicken Parmesan",
    description:
      "Breaded chicken topped with tomato sauce and melted mozzarella cheese, served with spaghetti",
    price: 250,
    rating: 4.4,
    count: 0,
    imageUrl:
      "https://easychickenrecipes.com/wp-content/uploads/2022/01/Featured-Fried-Chicken-Parmesan-1.jpg",
  },
];

const indianMeals = [
  {
    id: 1,
    name: "Butter Chicken",
    description:
      "Tender chicken pieces cooked in a creamy tomato-based sauce, served with rice or naan bread",
    count: 0,
    price: 250,
    rating: 4.5,
    imageUrl:
      "https://www.simplyrecipes.com/thmb/_yZgZlxc5yH5cDZAVa_oICIokkU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-5-de97119a16124a31a3b99ee16a398612.jpg",
  },
  {
    id: 2,
    name: "Chana Masala",
    description:
      "Spicy and tangy chickpea dish cooked with onion, tomato, and Indian spices, served with rice or naan bread",
    count: 0,
    price: 160,
    rating: 4.2,
    imageUrl:
      "https://holycowvegan.net/wp-content/uploads/2021/01/chana-masala-3-768x877.jpg",
  },
  {
    id: 3,
    name: "Saag Paneer",
    description:
      "Soft Indian cheese cubes cooked in a creamy spinach sauce, served with rice or naan bread",
    count: 0,
    price: 220,
    rating: 4.3,
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saag-paneer-4893170.jpg?quality=90&webp=true&resize=440,400",
  },
  {
    id: 4,
    name: "Aloo Gobi",
    description:
      "Cauliflower and potatoes cooked with Indian spices, served with rice or naan bread",
    count: 0,
    price: 120,
    rating: 4.1,
    imageUrl:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/26-may/Aloo_Gobi_Sabzi_Recipe-4.jpg",
  },
  {
    id: 5,
    name: "Biryani",
    description:
      "Flavorful rice dish cooked with your choice of chicken, lamb, or vegetables, served with raita and papadum",
    count: 0,
    price: 280,
    rating: 4.4,
    imageUrl:
      "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
  },
];

const japanesemeals = [
  {
    id: 1,
    name: "Sushi Combo",
    description:
      "A combination of 8 pieces of sushi and 1 roll, served with miso soup and salad",
    price: 390,
    rating: 4.6,
    count: 0,
    imageUrl: "https://m.media-amazon.com/images/I/71u6Gscwy4L._SX522_.jpg",
  },
  {
    id: 2,
    name: "Tempura Udon",
    description:
      "Thick noodles in a hot broth with deep-fried shrimp and vegetables, served with tempura dipping sauce",
    price: 230,
    rating: 4.3,
    count: 0,
    imageUrl:
      "https://www.honestfoodtalks.com/wp-content/uploads/2021/12/Tempura-udon-recipe-including-slices-of-seaweed-chopped-scallions-and-narutomaki-500x500.jpg",
  },
  {
    id: 3,
    name: "Beef Teriyaki",
    description:
      "Grilled steak glazed with teriyaki sauce, served with rice and steamed vegetables",
    price: 430,
    rating: 4.5,
    count: 0,
    imageUrl:
      "http://images.summitmedia-digital.com/yummyph/images/2021/07/08/beefteriyakirecipe2.jpg",
  },
  {
    id: 4,
    name: "Okonomiyaki",
    description:
      "Japanese savory pancake with cabbage, pork, shrimp, and topped with a variety of sauces",
    price: 330,
    rating: 4.1,
    count: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/1200px-Okonomiyaki_001.jpg",
  },
  {
    id: 5,
    name: "Chicken Katsu Curry",
    description:
      "Breaded and deep-fried chicken cutlet served with a rich curry sauce and rice",
    price: 440,
    rating: 4.4,
    count: 0,
    imageUrl:
      "https://images.kitchenstories.io/wagtailOriginalImages/R2498-final-photo-_0.jpg",
  },
];

const frenchMeals = [
  {
    id: 1,
    name: "Coq au Vin",
    description:
      "Braised chicken in red wine sauce, with bacon, mushrooms, and pearl onions",
    price: 150,
    rating: 4.5,
    count: 0,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/2/1/0/IG1005_Coq_Au_Vin_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1404919272117.jpeg",
  },
  {
    id: 2,
    name: "Steak Frites",
    description:
      "Grilled sirloin steak served with French fries and herb butter",
    price: 300,
    rating: 4.3,
    count: 0,
    imageUrl:
      "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/steak-frites-107fe6c3.jpg",
  },
  {
    id: 3,
    name: "Quiche Lorraine",
    description:
      "Classic savory quiche with bacon, cheese, and cream custard filling",
    price: 300,
    rating: 4.2,
    count: 0,
    imageUrl:
      "https://media.houseandgarden.co.uk/photos/6189479a8373470f8394e2e1/master/w_1600,c_limit/mary-berry-vogue-2-25jun13-pr_bt.jpg",
  },
  {
    id: 4,
    name: "Bouillabaisse",
    description:
      "Traditional fish soup with a variety of fish, shellfish, and vegetables, served with bread and rouille",
    price: 290,
    rating: 4.6,
    count: 0,
    imageUrl:
      "https://www.simplyrecipes.com/thmb/W1zW_ak4lXvYJ669Ig_TyMzExN8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Bouillabaisse-LEAD-4-c74e05e003a049c88004c94876ff140e.jpg",
  },
  {
    id: 5,
    name: "Ratatouille",
    description:
      "Vegetable stew with eggplant, zucchini, peppers, and tomatoes, served with bread",
    price: 230,
    rating: 4.1,
    count: 0,
    imageUrl:
      "https://www.allrecipes.com/thmb/B7pwC3xXpocRpwJfkPmDk9_A3nM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222006-disneys-ratatouille-ddmfs-4x3-0747-631622b05b4e4bd196b037aed1c9f776.jpg",
  },
];

const chineseMeals = [
  {
    id: 1,
    name: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and spicy sauce",
    price: 200,
    rating: 4.3,
    count: 0,
    imageUrl:
      "https://www.seriouseats.com/thmb/DHg5hjHYjFKaRCIA2L2eShTDjlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
  },
  {
    id: 2,
    name: "Beef and Broccoli",
    description:
      "Stir-fried beef and broccoli in a savory brown sauce, served with steamed rice",
    price: 320,
    rating: 4.1,
    count: 0,
    imageUrl:
      "https://www.sprinklesandsprouts.com/wp-content/uploads/2021/03/Beef-and-Broccoli-Square.jpg",
  },
  {
    id: 3,
    name: "Shrimp Fried Rice",
    description: "Fried rice with shrimp, peas, carrots, and egg",
    price: 350,
    rating: 4.2,
    count: 0,
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/03/Shrimp-Fried-Rice-main-1.jpg",
  },
  {
    id: 4,
    name: "Wonton Soup",
    description:
      "Clear broth soup with wonton dumplings, vegetables, and sliced pork",
    price: 280,
    rating: 4.4,
    count: 0,
    imageUrl:
      "https://redhousespice.com/wp-content/uploads/2022/07/chinese-pork-wonton-in-soup.jpg",
  },
  {
    id: 5,
    name: "Egg Rolls",
    description: "Crispy fried egg rolls with vegetables and meat filling",
    price: 260,
    rating: 4.0,
    count: 0,
    imageUrl:
      "https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG",
  },
];

const southIndianMeals = [
  {
    id: 1,
    name: "Dosas: paper-thin crepes",
    description:
      "It’s accompanied by sambar (a hot lentil soup) and coconut chutney.",
    price: 70,
    rating: 4.0,
    count: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Dosa_at_Sri_Ganesha_Restauran%2C_Bangkok_%2844570742744%29.jpg",
  },
  {
    id: 2,
    name: "Idlis: steamed rice cakes",
    description:
      "Soft, fluffy and ivory-coloured idlis are served with sambar and chutneys.",
    price: 50,
    rating: 4.2,
    count: 0,
    imageUrl:
      "https://deih43ym53wif.cloudfront.net/large_idly-food-india-shutterstock_101041240_7bd8a6703f.jpeg",
  },
  {
    id: 3,
    name: "Vadas: savoury doughnuts",
    description:
      "Made from a batter of black lentils, gently spiced with peppercorns, curry leaves, cumin, chilli and onion, this crunchy fritter tastes best when smeared generously with coconut chutney.",
    price: 60,
    rating: 4.6,
    count: 0,
    imageUrl:
      "https://deih43ym53wif.cloudfront.net/large_vada-south-indian-food-shutterstock_1073156264_6a1987aa83.jpeg",
  },
  {
    id: 4,
    name: "Uttapams: pizza-pancake hybrids",
    description:
      "fluffy, porous, delicious uttapam, softer than a dosa, and tastes great with chutneys or without.",
    price: 90,
    rating: 4.0,
    count: 0,
    imageUrl:
      "https://deih43ym53wif.cloudfront.net/large_food-uttapam-india-shutterstock_1133148674_2ab6b2fc65.jpeg",
  },
  {
    id: 5,
    name: "Appamsand ishtu: pancakes and stew",
    description:
      "Appams are like thin crepes, made from a batter of fermented rice flour and coconut milk served with veggies, shallots, mild spices and meat of your choice.",
    price: 100,
    rating: 4.0,
    count: 0,
    imageUrl:
      "https://deih43ym53wif.cloudfront.net/large_appam-palappam-masala-bread-egg-curry-india-shutterstock_1236041524_e6097f6095.jpeg",
  },
];

const restaurantList = [
  {
    uuid: "4a2ccf05-0db5-4c5a-bcaf-aa5c0b688bee",
    name: "ASAP : As Spicy As Possible",
    location: "New York, NY",
    type: "Italian",
    rating: 4.2,
    imageUrl:
      "https://media-cdn.tripadvisor.com/media/photo-s/19/f5/00/86/mediterranean-platter.jpg",
    description:
      "For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine.",
    country: italianMeals,
  },
  {
    uuid: "2d2ce0f8-747b-4371-a71f-ec88ac9c0d97",
    name: "North South Ka Tadka",
    location: "San Francisco, CA",
    type: "Indian",
    rating: 4.8,
    imageUrl:
      "https://recipesinhindi.net/wp-content/uploads/2018/02/Chhole-Bhature14334.jpg",
    description:
      "Indian restaurants are known for their aromatic spices, vibrant colors, and bold flavors that provide a sensory experience for diners.",
    country: indianMeals,
  },
  {
    uuid: "d146c5e5-1f5c-4e49-bdd5-cd7ce541f116",
    name: "Soo Yung By The Backyard",
    location: "Los Angeles, CA",
    type: "Japanese",
    rating: 3.7,
    imageUrl:
      "https://b.zmtcdn.com/data/pictures/chains/8/309188/caa14aee13ddf691e5007366d1997c28.jpeg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    description:
      "We present you traditional japanese dishes, including sushi, sashimi, tempura, ramen, udon, soba noodles, and more.",
    country: japanesemeals,
  },
  {
    uuid: "e2db2c27-00f5-42e7-9d80-955f9878e0d6",
    name: "Le Bistro Français",
    location: "Chicago, IL",
    type: "French",
    rating: 4.2,
    imageUrl:
      "https://media.cnn.com/api/v1/images/stellar/prod/220530155153-07-a-classic-french-dishes-escargots-de-bourgogne-restricted.jpg?c=original",
    description:
      "French dishes, such as escargots, foie gras, coq au vin, beef bourguignon, and dishes that reflect the diverse culinary regions of France.",
    country: frenchMeals,
  },
  {
    uuid: "f757af8a-450c-4a0a-9c48-f8588d0cdd70",
    name: "Chinese Garden",
    location: "Boston, MA",
    type: "Chinese",
    rating: 3.5,
    imageUrl:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
    description:
      "Our menu features savory dim sum and noodle soups to rich and flavorful stir-fries, chinese cuisine, steaming, boiling and seafood dishes. ",
    country: chineseMeals,
  },
  {
    uuid: "f757af8a-450c-4a0a-9c48-f8588d0cdd71",
    name: "South indian cafe",
    location: "Boston, MA",
    type: "South Indian",
    rating: 4.5,
    imageUrl:
      "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3091%2Ftrend20210322132626.jpg",
    description:
      "Our cafe present you  food, the use of lentils and spices, dried red chilies and fresh green chillies, coconut, and native traditional food.",
    country: southIndianMeals,
  },
];

const foodOrderSlice = createSlice({
  name: "foodOrder",
  initialState: {
    // list: menuList,
    restList: restaurantList,
    menuItems: undefined,
    cartItems: [],
    orderList: [],
    restaurantName: undefined,
  },
  reducers: {
    //increasemented
    increment(state, action) {
      const item = action.payload;
      // console.log("increase in reducer", action.payload.country);

      const updateItems = { ...item, count: 1 };
      const itemIdx = state.menuItems.findIndex(
        (obj) => obj.id === updateItems.id
      );

      state.menuItems[itemIdx].count += 1;

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
      const itemIdx = state.menuItems.findIndex((obj) => obj.id === item.id);
      if (state.menuItems[itemIdx].count === 0) {
        state.menuItems[itemIdx].count = 0;
        alert("pls add item in cart");
      } else {
        state.menuItems[itemIdx].count--;
      }

      // console.log(itemIdx);

      if (item.count < 2) {
        state.cartItems = state.cartItems.filter(
          (order) => order.id !== item.id
        );
      } else {
        const objIdx = state.cartItems.findIndex((obj) => obj.id === item.id);
        state.cartItems[objIdx].count -= 1;
        // console.log(JSON.parse(JSON.stringify(state.cartItems[objIdx])));
      }
    },
    orderNow(state, action) {
      console.log("reducer orderNow", action.payload);
      state.orderList.push(action.payload);
      console.log(state.orderList);
      state.cartItems = [];

      // const newRestaurantMenuList = [...state.menuItems];
      // const restaurants = newRestaurantMenuList.map((item) => {
      //   return { ...item, count: 0 };
      // });
      // state.menuItems.country = restaurants;
    },

    menuItems(state, action) {
      const response = action.payload.country;
      state.restaurantName = action.payload.name;
      console.log(response);
      state.menuItems = response;
    },
  },
});

export default foodOrderSlice;
export const { increment, decrement, orderNow, menuItems } =
  foodOrderSlice.actions;
export const selectOrderList = (state) => state.foodOrder.orderList;
