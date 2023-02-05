import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUserAction } from "../reducer/asyncUserReducer";
const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 350, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const marginButtonTop = { marginTop: 7 };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const signupButtonClickhandeler = () => {
    navigate("/login");
  };

  const emailChangeHandeler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandeler = (e) => {
    setPassword(e.target.value);
  };

  const signupDetailsClickHandeler = (e) => {
    e.preventDefault();
    // const signupDetails = {
    //   email: email,
    //   password: password,
    // };
    // console.log(signupDetails);
    console.log('1', email, password)
    dispatch(
      signUpUserAction({
        swapnilEmail: email,
        swapnilPassword: password,
      })
    );
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign up</h2>
            <Typography variant="caption">
              Please Sign Up to order food
            </Typography>
          </Grid>

          <hr color="green"></hr>

          <form>
            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              sx={{ marginTop: 1 }}
              value={email}
              onChange={emailChangeHandeler}
            />
            <FormControl component="fieldset" style={marginTop}></FormControl>

            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              sx={{ marginTop: 1 }}
              value={password}
              onChange={passwordChangeHandeler}
            />

            <Button
              style={marginButtonTop}
              type="submit"
              variant="contained"
              color="success"
              onClick={signupDetailsClickHandeler}
            >
              Create account
            </Button>

            <h3>
              Already have an account? &nbsp;
              <Typography
                style={marginButtonTop}
                type="submit"
                variant="contained"
                size="small"
                sx={{ color: "success.dark", cursor: "pointer" }}
                onClick={signupButtonClickhandeler}
              >
                Log in
              </Typography>
            </h3>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Signup;
