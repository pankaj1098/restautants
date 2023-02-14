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
  const [totalAmounts, setTotalAmounts] = React.useState(0);

  const addClickHandeler = (item) => {
    dispatch(increment(item));
  };

  const minusClickHandeler = (item) => {
    dispatch(decrement(item));
  };

  React.useEffect(() => {
    totalAmount();
  }, [cartOrder]);

  const totalAmount = () => {
    const amountOfEachQuantity = cartOrder.map((item) => {
      return item.count * parseInt(item.price);
    });
    console.log(amountOfEachQuantity);

    const total = amountOfEachQuantity.reduce((previous, current) => {
      return previous + current;
    });

    console.log(total);
    setTotalAmounts(total);
  };

  const oddOrEven = (number) => {
    if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };

  return (
    <div>
      {cartOrder.map((item) => (
        <Paper
          key={item.id}
          sx={{
            p: 2,
            margin: "auto",
            mt: "1%",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#ccffcc",
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
                  <Typography>{oddOrEven(item.count)}</Typography>
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
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          mt: "1%",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "	#00b300" : "#ccffcc",
        }}
      >
        <h3>Bill Details</h3>
        <hr />
        <br />
        <h4>
          Total Amount <span style={{ marginLeft: "72%" }}>{totalAmounts}</span>
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
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#b3ffb3",
        }}
      >
        <Button sx={{ bgcolor: "green", color: "black", width: "60%" }}>
          ORDER NOW
        </Button>
      </Paper>
    </div>
  );
}
