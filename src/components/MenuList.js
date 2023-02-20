import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { decrement, increment } from "../reducer/Counter-slice";
import Rating from "@mui/material/Rating";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function MenuList() {
  const restaurantMenu = useSelector((state) => state.foodOrder.menuItems);
  const restaurantName = useSelector((state) => state.foodOrder.restaurantName);

  const dispatch = useDispatch();

  const addClickHandeler = (item) => {
    dispatch(increment(item));
  };

  const minusClickHandeler = (item) => {
    dispatch(decrement(item));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white", marginTop: "15px" }}>
        Welcome to '{restaurantName}!!!'
      </h1>
      {/* <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}> */}
      {restaurantMenu &&
        restaurantMenu.map((item) => (
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
                <Box sx={{ width: 100, height: 150 }}>
                  <Img
                    style={{ width: 100, height: 150 }}
                    alt="complex"
                    src={item.imageUrl}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      <h4>{item.name}</h4>
                      <Rating name="read-only" value={item.rating} readOnly />
                      <p style={{ justifyContent: "center", display: "flex" }}>
                        {item.description}
                      </p>
                    </Typography>
                  </Grid>
                  <Grid item sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: "1rem" }} variant="body2">
                      ₹{item.price}
                    </Typography>
                    &nbsp;
                    <button
                      onClick={() => minusClickHandeler(item)}
                      variant="contained"
                      style={{
                        width: "25px",
                        height: "22px",
                        backgroundColor: "#7a7a52",

                        borderRadius: ".4rem",
                      }}
                    >
                      -
                    </button>
                    <Typography sx={{ fontSize: "1rem" }}>
                      {item.count}
                    </Typography>
                    <button
                      onClick={() => addClickHandeler(item)}
                      variant="contained"
                      style={{
                        width: "25px",
                        height: "22px",
                        backgroundColor: "#999966",
                        borderRadius: ".4rem",
                      }}
                    >
                      +
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      {/* </Box> */}
    </div>
  );
}
