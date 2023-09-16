import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
//import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import InboxIcon from "@mui/icons-material/MoveToInbox";
//import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

function TemporaryDrawer() {
  const navigate = useNavigate();

  const items = [
    { text: "Home", icon: null, route: "/" },
    {
      text: "Google Products",
      icon: <GoogleIcon />,
      route: "/google-products",
    },
  ]; /*,
    { text: "Starred", icon: <MailIcon />, route: "/starred" },
    { text: "Send email", icon: <InboxIcon />, route: "/send-email" },
    { text: "Drafts", icon: <MailIcon />, route: "/drafts" },
    { text: "All mail", icon: <InboxIcon />, route: "/all-mail" },
    { text: "Trash", icon: <MailIcon />, route: "/trash" },
    { text: "Spam", icon: <InboxIcon />, route: "/spam" },
  ];*/

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navigateToRoute = (route) => {
    navigate(route);
    toggleDrawer("left", false); // Close the drawer after navigating
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigateToRoute(item.route)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["nav"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;
