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
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Badge, Menu, MenuItem } from "@mui/material";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logoutAction, selectIsLoggedIn } from "../reducer/userSlice";

export default function Header() {
  const cartItems = useSelector((state) => state.foodOrder.cartItems);
  const userData = useSelector((state) => state.user.userData);
  const loggedInState = useSelector(selectIsLoggedIn);
  const [email, setEmail] = useState(undefined);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [auth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData !== undefined) {
      console.log("inside USE effect");
      setEmail(userData.email);
    }
  }, [userData]);

  const logInButtonClickHandeler = () => {
    navigate("login");
    handleClose();
  };

  const homePageClickHandeler = () => {
    navigate("/");
  };

  const myAccountButtonClickHandeler = () => {
    navigate("updateaccount");
    handleClose();
  };

  const orderButtonClickHandeler = () => {
    navigate("orderlist");
  };

  const cartButtonClickHandeler = () => {
    navigate("cart");
  };

  const profileButtonClickHandeler = () => {
    navigate("profile");
    handleClose();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logoutButtonClickHandeler = async () => {
    console.log("logout button clicked");
    dispatch(logoutAction());
    navigate("/");
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
        {userData !== undefined && "Welcome" + userData.displayName}
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
          <Typography onClick={myAccountButtonClickHandeler}>
            MY ACCOUNT
          </Typography>
        </div>
        <div>
          <Typography onClick={logInButtonClickHandeler}>LOG IN</Typography>
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
              {userData !== undefined && "Welcome" + userData.displayName}
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
                    <ShoppingCartIcon
                      sx={{ fontSize: 40 }}
                      onClick={cartButtonClickHandeler}
                    />
                  </Badge>
                </div>
                {loggedInState === true ? (
                  <div>
                    <Typography
                      sx={{ ml: 2.5, fontSize: 25 }}
                      onClick={logoutButtonClickHandeler}
                    >
                      Logout
                    </Typography>
                  </div>
                ) : (
                  <div>
                    <Typography
                      sx={{ ml: 2.5, fontSize: 25 }}
                      onClick={logInButtonClickHandeler}
                    >
                      Login
                    </Typography>
                  </div>
                )}

                <div></div>
                <div>
                  {auth && (
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <AccountCircle sx={{ fontSize: 40 }} />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={profileButtonClickHandeler}>
                          Profile
                        </MenuItem>
                        {/* <MenuItem onClick={myAccountButtonClickHandeler}>
                          My account
                        </MenuItem> */}
                        <MenuItem onClick={orderButtonClickHandeler}>
                          OrderList
                        </MenuItem>
                      </Menu>
                    </div>
                  )}
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
