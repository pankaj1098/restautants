import React from "react";
import Rating from "@mui/material/Rating";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { menuItems } from "../reducer/Counter-slice";
import { useNavigate } from "react-router-dom";

const RestaurantList = () => {
  const RestList = useSelector((state) => state.foodOrder.restList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restaurantButtonClickHandeler = (country, name) => {
    dispatch(menuItems({ country: country, name: name }));

    navigate("/menuList");
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {RestList.map((resName) => (
          <Card
            key={resName.uuid}
            sx={{ maxWidth: "350px", display: "flex", m: 2 }}
          >
            <CardActionArea
              onClick={() =>
                restaurantButtonClickHandeler(resName.country, resName.name)
              }
            >
              <CardMedia
                sx={{ minHeight: "300px", width: "350px", height: "350px" }}
                component={"img"}
                src={resName.imageUrl}
                alt={resName.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {resName.name}
                  <br />
                  <Rating name="read-only" value={resName.rating} readOnly />
                </Typography>
                <Typography variant="h6" gutterBottom component={"div"}>
                  {resName.type}
                </Typography>
                <Typography variant="body2">{resName.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default RestaurantList;
