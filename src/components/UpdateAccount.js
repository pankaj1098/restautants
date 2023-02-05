import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

import React, { useState } from "react";

const UpdateAccount = () => {
  const paperStyle = { padding: "30px 20px", width: 350, margin: "20px auto" };
  const headerStyle = { margin: 8 };

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const namehandeler = (e) => {
    setName(e.target.value);
  };
  const photoUrlHandeler = (e) => {
    setPhotoUrl(e.target.value);
  };

  const updateAccountHandeler = (e) => {
    e.preventDefault();
    const updateAccount = {
      name: name,
      photoUrl: photoUrl,
    };
    console.log(updateAccount);
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle}>Update Profile here!</h2>
            <Typography
              style={{ marginTop: 8, color: "blue" }}
              variant="caption"
            >
              Please enter Information to update profile
            </Typography>
          </Grid>
          <hr color="blue"></hr>
          <form>
            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              label="Name"
              placeholder="Enter your Name"
              value={name}
              onChange={namehandeler}
            />

            <TextField
              sx={{ marginTop: 1 }}
              fullWidth
              label="Photo url"
              placeholder="Enter your photo url"
              value={photoUrl}
              onChange={photoUrlHandeler}
            />

            <Button
              style={{ marginTop: 8 }}
              size="small"
              type="Update"
              variant="contained"
              color="success"
              onClick={updateAccountHandeler}
            >
              update account
            </Button>
            <Button
              size="small"
              style={{ marginTop: 8 }}
              type="Cancel"
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default UpdateAccount;
