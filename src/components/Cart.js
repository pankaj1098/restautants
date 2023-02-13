// import React from "react";
// import { useSelector } from "react-redux";

// const Cart = () => {
//   const cartOrder = useSelector((state) => state.foodOrder.cartItems);
//   console.log(cartOrder);
//   return (
//     <div>
//       {cartOrder.map((item) => (
//         <li>
//           {item.id}
//           {item.title}
//           Total Ammount:-₹{item.price * item.count}
//           <button>-</button>
//           {item.count}
//           <button>-</button>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default Cart;

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../reducer/Counter-slice";
import { Button } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const cartOrder = useSelector((state) => state.foodOrder.cartItems);
  const dispatch = useDispatch();

  const addClickHandeler = (item) => {
    dispatch(increment(item));
  };

  const minusClickHandeler = (item) => {
    dispatch(decrement(item));
  };
  return (
    <div>
      {cartOrder.map((item) => (
        <Paper
          key={item.id}
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  style={{ width: 100, height: 100 }}
                  alt="complex"
                  src={item.image}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                  </Typography>
                </Grid>
                <Grid item sx={{ display: "flex" }}>
                  {/* <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    Remove
                  </Typography>
                </Grid> */}
                  <Button
                    onClick={() => minusClickHandeler(item)}
                    variant="contained"
                    size="small"
                  >
                    -
                  </Button>
                  <Typography sx={{ fontSize: "1.25rem" }}>
                    {item.count}
                  </Typography>
                  <Button
                    onClick={() => addClickHandeler(item)}
                    variant="contained"
                    size="small"
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  ₹{item.price * item.count}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
