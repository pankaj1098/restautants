import * as React from "react";
import pbg from "../images/pbg.jpg";
import { Avatar, Grid, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export default function Profile() {
  return (
    <Paper
      sx={{
        width: 600,
        height: 300,
        margin: "auto",
        marginTop: 5,
      }}
      style={{
        backgroundImage: `url(${pbg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid sx={{ display: "flex" }}>
        <Avatar
          sx={{ width: "150px", height: "150px", mt: "65px" }}
          src="/broken-image.jpg"
        />
        <div>
          <p
            style={{
              fontSize: "2.75rem",
              marginLeft: "25px",
              marginTop: "80px",
            }}
          >
            Pankaj Yadav
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              marginLeft: "25px",
            }}
          >
            pankajyadav.ce@gmail.com
          </p>
        </div>
        <button
          style={{
            width: "180px",
            height: "30px",
            fontSize: "1.2rem",
            marginTop: "250px",

            marginBottom: "10px",
            backgroundColor: "#EF4F5F",
          }}
        >
          <EditIcon sx={{ ml: "-5px" }} />
          EDIT PROFILE
        </button>
      </Grid>
    </Paper>
  );
}
