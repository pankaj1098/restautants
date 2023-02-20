import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Link, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            // my: 3,
            "& svg": {
              fontSize: "40px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              "@media (max-width:600px)": {
                fontSize: "1rem",
              },
            }}
          >
            Contact Us : +91-9756630511 <br /> pankajyadav.ce@gmail.com
          </Typography>

          {/* icons */}
          <Tooltip title="Instagram" placement="top-end">
            <Link
              href="https://www.instagram.com/pankajyadav6422/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Twitter" placement="top-end">
            <Link href="https://twitter.com/PankajY57194128/" target="_blank">
              <TwitterIcon />
            </Link>
          </Tooltip>

          <Tooltip title="GitHub" placement="top-end">
            <Link href="https://github.com/pankaj1098/" target="_blank">
              <GitHubIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Linkedin" placement="top-end">
            <Link
              href="https://www.linkedin.com/in/pankaj-yadav-89824524a/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Tooltip>
        </Box>
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; Pankaj Yadav
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
