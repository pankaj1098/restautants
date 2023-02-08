import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.svg";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import "./Header.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const cartItems = useSelector((state) => state.foodOrder.cartItems);
  const userProfileData = useSelector((state) => state.user.userProfileData);
  const [email, setEmail] = useState(undefined);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (userProfileData !== undefined) {
      console.log("inside USE effect");
      setEmail(userProfileData.email);
    }
  }, [userProfileData]);

  const logInButtonClickHandeler = () => {
    navigate("login");
  };

  const homePageClickHandeler = () => {
    navigate("restaurants");
  };

  const myAccountButtonClickHandeler = () => {
    navigate("updateaccount");
  };

  const orderButtonClickHandeler = () => {
    navigate("orderlist");
  };

  const cartButtonClickHandeler = () => {
    navigate("cart");
  };

  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img
          onClick={homePageClickHandeler}
          src={logo}
          alt="logo"
          height={"70"}
          width="200"
        />
        {email !== undefined && "Welcome" + email}
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <div>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon onClick={cartButtonClickHandeler} />
          </Badge>
        </div>

        <div>
          <Typography onClick={orderButtonClickHandeler}>ORDER</Typography>
        </div>
        <div>
          <Typography onClick={logInButtonClickHandeler}>LOG IN</Typography>
        </div>
        <div>
          <Typography onClick={myAccountButtonClickHandeler}>
            MY ACCOUNT
          </Typography>
        </div>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              <img
                onClick={homePageClickHandeler}
                src={logo}
                alt="logo"
                height={"70"}
                width="250"
              />
              {email !== undefined && "Welcome" + email}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul
                className="navigation-menu"
                style={{
                  gap: "18px",
                  cursor: "pointer",
                  color: "goldenrod",
                  fontSize: "20px",
                }}
              >
                <div>
                  <Badge badgeContent={cartItems.length} color="primary">
                    <ShoppingCartIcon onClick={cartButtonClickHandeler} />
                  </Badge>
                </div>
                <div>
                  <Typography onClick={orderButtonClickHandeler}>
                    ORDER
                  </Typography>
                </div>
                <div>
                  <Typography onClick={logInButtonClickHandeler}>
                    LOG IN
                  </Typography>
                </div>
                <div>
                  <Typography onClick={myAccountButtonClickHandeler}>
                    MY ACCOUNT
                  </Typography>
                </div>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}
