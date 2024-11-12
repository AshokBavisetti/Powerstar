import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const RightSidebar = () => {
  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#ffffff",
        p: 2,
        borderLeft: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      <Divider sx={{ my: 2 }} />
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
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
        Activities
      </Typography>
      <Divider sx={{ my: 2 }} />
      <List>
        <ListItem>
          <ListItemText
            primary="Released a new version"
            secondary="59 minutes ago"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default RightSidebar;
