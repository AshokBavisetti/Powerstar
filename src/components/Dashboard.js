import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  AccountCircle,
  People,
  ShoppingCart,
  MonetizationOn,
  TrendingUp,
  Dashboard as DashboardIcon,
  Folder,
  Campaign,
  Description,
  Group,
  Business,
  Web,
  RssFeed,
} from "@mui/icons-material";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f7fb", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ width: "240px", bgcolor: "#ffffff", p: 2 }}>
        <Typography variant="h6">ByeWind</Typography>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem button>
            <DashboardIcon sx={{ mr: 2 }} />
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem button>
            <Folder sx={{ mr: 2 }} />
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <Campaign sx={{ mr: 2 }} />
            <ListItemText primary="Campaigns" />
          </ListItem>
          <ListItem button>
            <Description sx={{ mr: 2 }} />
            <ListItemText primary="Documents" />
          </ListItem>
          <ListItem button>
            <Group sx={{ mr: 2 }} />
            <ListItemText primary="Followers" />
          </ListItem>
          <Divider sx={{ my: 2 }} />
          <ListItem button>
            <AccountCircle sx={{ mr: 2 }} />
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button>
            <Business sx={{ mr: 2 }} />
            <ListItemText primary="Corporate" />
          </ListItem>
          <ListItem button>
            <RssFeed sx={{ mr: 2 }} />
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button>
            <Web sx={{ mr: 2 }} />
            <ListItemText primary="Social" />
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/* Top Section */}
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <People sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
              <Box>
                <Typography variant="h6">Customers</Typography>
                <Typography variant="h4">3,781</Typography>
                <Typography color="success.main" variant="caption">
                  +110.1%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <ShoppingCart
                sx={{ fontSize: 40, color: "primary.main", mr: 2 }}
              />
              <Box>
                <Typography variant="h6">Orders</Typography>
                <Typography variant="h4">1,219</Typography>
                <Typography color="error.main" variant="caption">
                  -0.3%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <MonetizationOn
                sx={{ fontSize: 40, color: "primary.main", mr: 2 }}
              />
              <Box>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h4">$695</Typography>
                <Typography color="success.main" variant="caption">
                  +15.03%
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              elevation={3}
              sx={{ p: 2, display: "flex", alignItems: "center" }}
            >
              <TrendingUp sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
              <Box>
                <Typography variant="h6">Growth</Typography>
                <Typography variant="h4">30.1%</Typography>
                <Typography color="success.main" variant="caption">
                  +6.08%
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Revenue and Revenue by Location */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={8}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="body1">
                Current Week: $58,211 | Previous Week: $68,768
              </Typography>
              <Box
                sx={{
                  height: "200px",
                  bgcolor: "#e0e0e0",
                  mt: 2,
                  borderRadius: 1,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Revenue by Location</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="New York" secondary="72K" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="San Francisco" secondary="39K" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sydney" secondary="25K" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Singapore" secondary="61K" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Top Selling Products and Total Sales */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={8}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Top Selling Products</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      {
                        name: "ASOS Ridley High Waist",
                        price: "$79.49",
                        quantity: 82,
                        amount: "$6,518.18",
                      },
                      {
                        name: "Marco Lightweight Shirt",
                        price: "$128.50",
                        quantity: 37,
                        amount: "$4,754.50",
                      },
                      {
                        name: "Half Sleeve Shirt",
                        price: "$39.99",
                        quantity: 56,
                        amount: "$2,239.44",
                      },
                      {
                        name: "Lightweight Jacket",
                        price: "$20.00",
                        quantity: 184,
                        amount: "$3,680.00",
                      },
                      {
                        name: "Marco Shoes",
                        price: "$7.49",
                        quantity: 64,
                        amount: "$1,965.81",
                      },
                    ].map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Total Sales</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Direct" secondary="$300.56" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Affiliate" secondary="$135.18" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sponsored" secondary="$154.02" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary="$48.96" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Notifications & Contacts */}
      <Box sx={{ width: "240px", bgcolor: "#ffffff", p: 2 }}>
        <Typography variant="h6">Notifications</Typography>
        <List>
          {[
            { message: "You have a bug that needs...", time: "Just now" },
            { message: "New user registered", time: "59 minutes ago" },
            { message: "Released a new version", time: "59 minutes ago" },
          ].map((notif, index) => (
            <ListItem key={index} divider>
              <ListItemText primary={notif.message} secondary={notif.time} />
            </ListItem>
          ))}
        </List>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Contacts
        </Typography>
        <List>
          {["Natali Craig", "Drew Cano", "Orlando Diggs", "Andi Lane"].map(
            (contact, index) => (
              <ListItem key={index}>
                <Avatar sx={{ mr: 2 }}>
                  <AccountCircle />
                </Avatar>
                <ListItemText primary={contact} />
              </ListItem>
            )
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Dashboard;
