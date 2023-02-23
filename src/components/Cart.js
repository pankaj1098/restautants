import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, orderNow } from "../reducer/Counter-slice";
import { Button } from "@mui/material";
import { selectIsLoggedIn } from "../reducer/userSlice";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  const cartOrder = useSelector((state) => state.foodOrder.cartItems);
  // console.log("cart", cartOrder);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const restaurantName = useSelector((state) => state.foodOrder.restaurantName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalAmounts, setTotalAmounts] = React.useState(0);

  const addClickHandeler = (item) => {
    dispatch(increment(item));
  };

  const minusClickHandeler = (item) => {
    dispatch(decrement(item));
  };

  React.useEffect(() => {
    if (cartOrder.length > 0) {
      totalAmount();
    }
  }, [cartOrder]);

  const totalAmount = () => {
    const amountOfEachQuantity = cartOrder.map((item) => {
      return item.count * item.price;
    });
    // console.log(amountOfEachQuantity);

    const total = amountOfEachQuantity.reduce((previous, current) => {
      return previous + current;
    });

    // console.log(total);
    setTotalAmounts(total);
  };

  //for date and time
  const date = new Date(); // get current date and time
  const day = date.getDate(); // get day of the month (1-31)
  const month = date.toLocaleString("default", { month: "short" }); // get month abbreviation (Jan, Feb, etc.)
  const year = date.getFullYear(); // get four-digit year
  const hour = date.getHours(); // get hour (0-23)
  const minute = date.getMinutes(); // get minute (0-59)
  const ampm = hour >= 12 ? "P.M." : "A.M."; // determine AM/PM
  const hour12 = hour % 12 || 12; // convert to 12-hour format
  const time = `${hour12}:${minute}${ampm}`; // format time as "hh:mmAM/PM"
  const formattedDate = `${day} ${month} ${year} ${time}`; // format date as "day month year hh:mmAM/PM"

  // const oddOrEven = (number) => {
  //   if (number % 2 === 0) {
  //     return "even";
  //   } else {
  //     return "odd";
  //   }
  // };
  const orderNowButtonClickHandler = (
    cartOrder,
    totalAmounts,
    formattedDate,
    restaurantName
  ) => {
    // console.log("inCart", { totalAmounts });
    dispatch(
      orderNow({
        orderItem: cartOrder,
        amounts: totalAmounts,
        date: formattedDate,
        restaurantName: restaurantName,
      }),
      navigate("/orderlist")
    );
  };

  const orderButtonClickHandler = () => {
    navigate("/restaurantList");
  };

  return (
    <Layout>
      <div>
        {cartOrder.length > 0 ? (
          <div>
            {cartOrder.map((item) => (
              <Paper
                key={item.id}
                sx={{
                  p: 1,
                  margin: "auto",
                  mt: "1%",
                  maxWidth: 500,
                  flexGrow: 1,
                  bgcolor: "#e2e2d0",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                    <ButtonBase sx={{ width: 100, height: 100 }}>
                      <Img
                        style={{ width: 100, height: 80 }}
                        alt="complex"
                        src={item.imageUrl}
                      />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sm container sx={{ mt: "12px" }}>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <Typography>
                          <h3>{item.name}</h3>
                        </Typography>
                        <Grid item sx={{ display: "flex", mt: "20px" }}>
                          <button
                            onClick={() => minusClickHandeler(item)}
                            variant="contained"
                            style={{
                              width: "35px",
                              height: "28px",
                              backgroundColor: "#e6fff2",
                              borderRadius: "8px",
                            }}
                          >
                            -
                          </button>
                          &nbsp;&nbsp;
                          <Typography sx={{ fontSize: "1.25rem" }}>
                            {item.count}
                          </Typography>
                          &nbsp;&nbsp;
                          {/* <Typography>{oddOrEven(item.count)}</Typography> */}
                          <button
                            onClick={() => addClickHandeler(item)}
                            variant="contained"
                            style={{
                              width: "35px",
                              height: "28px",
                              backgroundColor: "#e6fff2",
                              borderRadius: "8px",
                            }}
                          >
                            +
                          </button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" component="div">
                        ₹{item.price}x{item.count}=₹{item.price * item.count}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            ))}

            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                mt: "1%",
                backgroundColor: "#e2e2d0",
              }}
            >
              <h3>Bill Details</h3>
              <hr />
              <br />
              <h4>
                Total Amount{" "}
                <span style={{ marginLeft: "72%" }}>{totalAmounts}</span>
              </h4>
              <br />
            </Paper>
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                textAlign: "center",
                mt: "1%",
                backgroundColor: "#e2e2d0",
              }}
            >
              {isLoggedIn ? (
                <Button
                  onClick={() =>
                    orderNowButtonClickHandler(
                      cartOrder,
                      totalAmounts,
                      formattedDate,
                      restaurantName
                    )
                  }
                  sx={{ bgcolor: "green", color: "black", width: "60%" }}
                >
                  ORDER NOW
                </Button>
              ) : (
                <Button
                  onClick={() => alert("kindly log in first")}
                  sx={{ bgcolor: "green", color: "black", width: "60%" }}
                >
                  ORDER NOW
                </Button>
              )}
            </Paper>
          </div>
        ) : (
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              mt: "1%",
              backgroundColor: "#e2e2d0",
            }}
          >
            <h3 style={{ textAlign: "center" }}>
              Nothing in the Cart, Kindly start ordering
            </h3>
            <hr />
            <Button
              onClick={orderButtonClickHandler}
              sx={{ bgcolor: "green", color: "black", width: "60%", ml: "20%" }}
            >
              ORDER NOW
            </Button>
          </Paper>
        )}
      </div>
    </Layout>
  );
}
