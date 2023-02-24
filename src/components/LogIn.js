import {
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUserAction,
  resetPasswordUserAction,
} from "../reducer/asyncUserReducer";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { selectIsLoggedIn } from "../reducer/userSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  // const userLogInData = useSelector((state) => state.user.userData);
  const loggedInState = useSelector(selectIsLoggedIn);
  console.log(loggedInState);

  const paperStyle = { padding: "30px 20px", width: 350, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 6 };
  const marginButtonTop = { marginTop: 7 };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const signupButtonClickhandeler = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (loggedInState === true) {
      // console.log("inside useEffect");
      navigate("/restaurantList");
    }
  }, [loggedInState]);

  const emailChangeHandeler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandeler = (e) => {
    setPassword(e.target.value);
  };

  const forgotPasswordButtonClickhandeler = () => {
    dispatch(resetPasswordUserAction(email));
  };
  const notifyLogIn = () => toast("Welcome! You have successfully Logged In");

  const loginDetailsChangeHandeler = async (e) => {
    e.preventDefault();
    console.log("1", email, password);
    dispatch(
      loginUserAction({
        email: email,
        password: password,
      })
    );
    notifyLogIn();
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

          <hr color="green"></hr>

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

            <FormControl fullWidth sx={{ marginTop: 2 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={passwordChangeHandeler}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Button
              style={marginButtonTop}
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

            <h3>
              forgot password ?
              <Typography
                style={{ color: "red", cursor: "pointer" }}
                type="submit"
                variant="contained"
                size="small"
                onClick={forgotPasswordButtonClickhandeler}
              >
                click here!
              </Typography>
            </h3>
          </form>
        </Paper>
      </Grid>
     
    </div>
  );
};

export default LogIn;
