import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { decrement, increment } from "../reducer/Counter-slice";
import Rating from "@mui/material/Rating";
import "./MenuList.css";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function MenuList() {
  const restaurantMenu = useSelector((state) => state.foodOrder.menuItems);
  const restaurantName = useSelector((state) => state.foodOrder.restaurantName);
  const cartOrder = useSelector((state) => state.foodOrder.cartItems);

  console.log(restaurantName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addClickHandeler = (item) => {
    dispatch(increment(item));
  };

  const minusClickHandeler = (item) => {
    dispatch(decrement(item));
  };

  const cartHandeler = () => {
    navigate("/cart");
  };

  return (
    <Layout>
      <div>
        {cartOrder.length > 0 ? (
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <h1
              style={{
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Welcome to '{restaurantName}!!!'
            </h1>
            <button
              onClick={cartHandeler}
              style={{
                color: "black",
                marginTop: "15px",
                height: "35px",
                width: "100px",
              }}
            >
              View Cart
            </button>
          </Grid>
        ) : (
          <h1
            style={{
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            Welcome to '{restaurantName}!!!'
          </h1>
        )}

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
                  bgcolor: " #e2e2d0",
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
                          <Rating
                            name="half-rating-read"
                            defaultValue={item.rating}
                            precision={0.1}
                            readOnly
                          />

                          <p
                            className="cutoff-text"
                            style={{
                              justifyContent: "center",
                              display: "flex",
                            }}
                          >
                            {item.description}
                          </p>
                          <input
                            className="expand-btn"
                            type={"checkbox"}
                          ></input>
                          <Grid
                            item
                            sx={{
                              display: "flex",
                              marginLeft: "120px",
                              mt: "-23px",
                            }}
                          >
                            <Typography
                              sx={{ fontSize: "1rem" }}
                              variant="body2"
                            >
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
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}
        </Box>
      </div>
    </Layout>
  );
}
