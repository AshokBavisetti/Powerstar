import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationsPanel = () => {
  return (
    <Box width="250px" bgcolor="#f5f5f5" p={2}>
      <Box display="flex" alignItems="center" mb={2}>
        <NotificationsIcon />
        <Typography variant="h6" ml={1}>
          Notifications
        </Typography>
      </Box>
      <List>
        <ListItem>
          <ListItemText
            primary="You have a bug that needs attention"
            secondary="Just now"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="New user registered"
            secondary="59 minutes ago"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default NotificationsPanel;
