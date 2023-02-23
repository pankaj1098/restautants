import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { selectOrderList } from "../reducer/Counter-slice";

const OrderList = () => {
  const orderList = useSelector(selectOrderList);
  console.log(orderList);

  return (
    <div>
      <Paper
        elevation={50}
        sx={{
          padding: ".5% .5%",
          width: "90%",
          margin: "20px auto",
          boxShadow: "5px 5px 5px #353738",
          border: 3,
          borderColor: "black",
        }}
      >
        {orderList.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary
              sx={{ bgcolor: " #669999" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Grid container spacing={8}>
                <Grid item xs={4}>
                  <item>
                    <h2>{item.restaurantName}</h2>
                  </item>
                </Grid>
                <Grid item xs={4}>
                  <item>
                    <h2>{item.date}</h2>
                  </item>
                </Grid>
                <Grid item xs={4}>
                  <item>
                    <h2>Total Amounts:{item.amounts}</h2>
                  </item>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              {item.orderItem.map((order) => (
                <div>
                  <Grid container spacing={3}>
                    <Grid item xs={3}>
                      <item>
                        <CardMedia
                          sx={{
                            width: "50px",
                            height: "50px",
                          }}
                          component={"img"}
                          src={order.imageUrl}
                          alt={order.name}
                        />
                      </item>
                    </Grid>
                    <Grid item xs={3}>
                      <item>
                        <h3 style={{ marginTop: "10px" }}>{order.name}</h3>
                      </item>
                    </Grid>
                    <Grid item xs={2.1}>
                      <item>
                        <h3 style={{ marginTop: "10px" }}>{order.count}</h3>
                      </item>
                    </Grid>
                    <Grid item xs={3}>
                      <item>
                        {" "}
                        <h3 style={{ marginTop: "10px" }}>
                          {order.count * order.price}
                        </h3>
                      </item>
                    </Grid>
                  </Grid>
                  {/* <hr /> */}
                </div>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </div>
  );
};

export default OrderList;
