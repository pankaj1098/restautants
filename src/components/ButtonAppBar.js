import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const cartItems = useSelector((state) => state.foodOrder.cartItems);
  const navigate = useNavigate();

  const cartButtonClickHandeler = () => {
    navigate("cart");
  };

  const orderButtonClickHandeler = () => {
    navigate("orderlist");
  };

  const homePageClickHandeler = () => {
    navigate("restaurants");
  };

  const logInButtonClickHandeler = () => {
    navigate("login");
  };

  const myAccountButtonClickHandeler = () => {
    navigate("updateaccount");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#4e7ca1" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#f5b746" }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" sx={{ color: "#f5b746" }}>
            OUR MENU
          </Button>
          &nbsp;
          <Button color="inherit" sx={{ color: "#f5b746" }}>
            OUR MISSION
          </Button>
          <Typography
            style={{ textAlign: "center" }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <h2
              onClick={homePageClickHandeler}
              style={{ color: "#bceb11", cursor: "pointer" }}
            >
              Food Court
            </h2>
            <p style={{ color: "#f5e446" }}>
              Your health and taste is our top priority
            </p>
          </Typography>
          &nbsp;
          <Button sx={{ color: "#f5b746" }} onClick={cartButtonClickHandeler}>
            <Badge badgeContent={cartItems.length} color="primary">
              <AddShoppingCartIcon />
            </Badge>
            cart
          </Button>
          <Button
            onClick={orderButtonClickHandeler}
            color="inherit"
            sx={{ color: "#f5b746" }}
          >
            ORDER
          </Button>
          <Button
            onClick={logInButtonClickHandeler}
            color="inherit"
            sx={{ color: "#f5b746" }}
          >
            Log in
          </Button>
          <Button
            onClick={myAccountButtonClickHandeler}
            color="inherit"
            sx={{ color: "#f5b746" }}
          >
            Update Account
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
