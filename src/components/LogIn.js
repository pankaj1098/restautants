import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState, useEffect } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../reducer/asyncUserReducer";
import { selectUser } from "../reducer/userSlice";
const LogIn = () => {
  const paperStyle = { padding: "30px 20px", width: 350, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 6 };
  const marginButtonTop = { marginTop: 7 };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetail = useSelector(selectUser);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(null);

  const signupButtonClickhandeler = () => {
    navigate("/signup");
  };

  const userIsLogin = () => {
    if (userDetail) {
      setUserIsLoggedIn(userDetail);
    }
  };

  useEffect(() => {
    setUserIsLoggedIn(userDetail);
    if (userIsLoggedIn !== null) {
      navigate("/restaurants");
    }
  }, [userDetail]);

  const emailChangeHandeler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandeler = (e) => {
    setPassword(e.target.value);
  };

  const loginDetailsChangeHandeler = async (e) => {
    e.preventDefault();
    console.log("1", email, password);
    dispatch(
      loginUserAction({
        email: email,
        password: password,
      })
    );
    userIsLogin();
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Log in</h2>
            <Typography variant="caption">
              Please Log in here to order food !
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              value={email}
              sx={{ marginTop: 3 }}
              onChange={emailChangeHandeler}
            />
            <FormControl component="fieldset" style={marginTop}></FormControl>

            <TextField
              fullWidth
              label="Password"
              style={marginTop}
              placeholder="Enter your password"
              value={password}
              onChange={passwordChangeHandeler}
            />

            <Button
              style={marginButtonTop}
              type="submit"
              variant="contained"
              color="success"
              size="small"
              onClick={loginDetailsChangeHandeler}
            >
              Log in
            </Button>

            <h3>
              New to Food order !
              <Typography
                style={{ color: "red", cursor: "pointer" }}
                type="submit"
                variant="contained"
                size="small"
                onClick={signupButtonClickhandeler}
              >
                Create account
              </Typography>
            </h3>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default LogIn;
