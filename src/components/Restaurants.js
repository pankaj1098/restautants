import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { decrement, increment } from "../reducer/Counter-slice";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function Restaurants() {
  const foodItems = useSelector((state) => state.foodOrder.list);
  // const cartItems = useSelector((state) => state.foodOrder.cartItems);

  const dispatch = useDispatch();

  const addClickHandeler = (item) => {
    dispatch(increment(item));
  };

  const minusClickHandeler = (item) => {
    dispatch(decrement(item));
  };

  return (
    <div>
      {foodItems.map((item) => (
        <Paper
          key={item.id}
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 400,
            maxHeight: 400,
            flexGrow: 1,
            marginTop: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Box sx={{ width: 100, height: 100 }}>
                <Img
                  style={{ width: 100, height: 100 }}
                  alt="complex"
                  src={item.image}
                />
              </Box>
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
                  <Typography sx={{ fontSize: "1.25rem" }} variant="body2">
                    ₹{item.price}
                  </Typography>
                  &nbsp;
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
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
