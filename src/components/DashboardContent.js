import React from "react";
import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";

const DashboardContent = () => {
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            elevation={2}
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="subtitle2">Customers</Typography>
              <Typography variant="h4">3,781</Typography>
            </Box>
            <IconButton>
              <PeopleIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper
            elevation={2}
            style={{
              padding: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="subtitle2">Orders</Typography>
              <Typography variant="h4">1,219</Typography>
            </Box>
            <IconButton>
              <InsertChartIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper elevation={2} style={{ padding: "20px", height: "200px" }}>
            <Typography variant="subtitle2">Revenue Chart</Typography>
            <Box
              bgcolor="#e0e0e0"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body2">Chart goes here</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper elevation={2} style={{ padding: "20px", height: "200px" }}>
            <Typography variant="subtitle2">Top Selling Products</Typography>
            <Box
              bgcolor="#e0e0e0"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body2">Table goes here</Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper elevation={2} style={{ padding: "20px", height: "200px" }}>
            <Typography variant="subtitle2">Total Sales</Typography>
            <Box
              bgcolor="#e0e0e0"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="body2">Sales chart goes here</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
