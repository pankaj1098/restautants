import * as React from "react";
import { Avatar, Grid, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const profileData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();

  const editProfileButtonClickHandeler = () => {
    navigate("/updateaccount");
  };
  // console.log(profileData);
  return (
    <Paper
      sx={{
        width: 600,
        height: 300,
        margin: "auto",
        marginTop: 5,
      }}
      style={{
        backgroundColor: "#ffe6e6",
      }}
    >
      <Grid sx={{ display: "flex" }}>
        {profileData !== undefined && (
          <Avatar
            sx={{ width: "150px", height: "150px", mt: "65px" }}
            src={profileData.photoUrl}
          />
        )}
        <div>
          <p
            style={{
              fontSize: "2.75rem",
              marginLeft: "25px",
              marginTop: "80px",
            }}
          >
            {profileData !== undefined && profileData.displayName}
          </p>
          <p
            style={{
              fontSize: "1.25rem",
              marginLeft: "25px",
            }}
          >
            {profileData && profileData.email}
          </p>
        </div>
        <button
          onClick={editProfileButtonClickHandeler}
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
