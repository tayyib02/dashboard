import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  Menu,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Toolbar,
  ThemeProvider,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

import React, { useEffect } from "react";

import AppIcon from "../assets/icon.svg";

import {
  ChatOutlined,
  Close,
  GridView,
  HandymanOutlined,
  LogoutOutlined,
  Menu as MenuIcon,
  Notifications,
  ReceiptLongOutlined,
  Replay,
  SettingsOutlined,
} from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const DrawerContent = () => {
  const history = useNavigate();

  const drawerItems =
    location.pathname.split("/")[1] === "user"
      ? [
          {
            name: "Dashboard",
            icon: <GridView />,
            route: "/" + location.pathname.split("/")[1],
          },
          {
            name: "Chats",
            icon: <ChatOutlined />,
            route: "/" + location.pathname.split("/")[1] + "/chats",
          },
          {
            name: "Invoices",
            icon: <ReceiptLongOutlined />,
            route: "/" + location.pathname.split("/")[1] + "/invoices",
          },
          {
            name: "History",
            icon: <Replay />,
            route: "/" + location.pathname.split("/")[1] + "/history",
          },
          {
            name: "Settings",
            icon: <SettingsOutlined />,
            route: "/" + location.pathname.split("/")[1] + "/settings",
          },
        ]
      : [
          {
            name: "Dashboard",
            icon: <GridView />,
            route: "/" + location.pathname.split("/")[1],
          },
          {
            name: "Chats",
            icon: <ChatOutlined />,
            route: "/" + location.pathname.split("/")[1] + "/chats",
          },
          {
            name: "Invoices",
            icon: <ReceiptLongOutlined />,
            route: "/" + location.pathname.split("/")[1] + "/invoices",
          },
          {
            name: "History",
            icon: <Replay />,
            route: "/" + location.pathname.split("/")[1] + "/history",
          },
          {
            name: "Settings",
            icon: <SettingsOutlined />,
            route: "/" + location.pathname.split("/")[1] + "/settings",
          },
          {
            name: "Services",
            icon: <HandymanOutlined />,
            route: "/" + location.pathname.split("/")[1] + "/services",
            user: "bussiness",
          },
        ];

  //   Route to Any Page
  const routeTo = (route) => {
    history(route);
  };

  const [improveDailogOpen, setImproveDailogOpen] = useState(false);
  const improveDailogClose = () => {
    setImproveDailogOpen(false);
  };

  return (
    <Box
      sx={{ minHeight: "100vh" }}
      className="shadow-sm d-flex flex-column justify-content-between "
    >
      <ImproveDailog
        open={improveDailogOpen}
        handleClose={improveDailogClose}
      />
      <Box>
        <Box className="d-flex justify-content-center">
          <img src={AppIcon} alt="app icon" width={"50%"} />
        </Box>
        <List>
          {drawerItems.map((item, i) => (
            <ListItemButton
              key={"drawer-item-" + i}
              selected={
                location.pathname.split("/").slice(0, 3).join("/") ===
                item.route
              }
              className="me-3"
              sx={{
                my: 0.5,
                py: 1.4,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,

                "&.Mui-selected": {
                  backgroundColor: "primary.main",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: 0.85,
                  },
                },
              }}
              onClick={() => routeTo(item.route)}
            >
              <ListItemIcon
                sx={{
                  height: 24,
                  color:
                    location.pathname.split("/").slice(0, 3).join("/") ===
                    item.route
                      ? "#fff"
                      : "",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name}></ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Box>

      <Box className="d-flex flex-column gap-3 ">
        <Button
          variant="contained"
          disableElevation
          className="mx-3 "
          sx={{
            textTransform: "none",
            py: 1.4,
          }}
          onClick={() => setImproveDailogOpen(true)}
        >
          How to improve?
        </Button>
        <ListItemButton
          className="mb-4 d-flex gap-2 align-items-center justify-content-center"
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <LogoutOutlined />

          <p className="m-0">Logout</p>
        </ListItemButton>
      </Box>
    </Box>
  );
};

const ImproveDailog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose()}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle>
        <Box className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="m-0 fw-bold">How we can improve</h6>
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent className="d-flex flex-column gap-3">
        <TextField
          multiline
          rows={6}
          label="Description"
          InputLabelProps={{ shrink: true }}
          InputProps={{ disableUnderline: true }}
          size="small"
          variant="filled"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Box className="d-flex align-items-center justify-content-center gap-3 w-100 mb-2">
          <Button disableElevation onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disableElevation
            onClick={() => handleClose()}
          >
            Send feedback
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

function Main() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    // <ThemeProvider theme={theme}>
    <div>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ minWidth: "250px" }}>
          <DrawerContent />
        </Box>
      </Drawer>
      <Grid container>
        <Grid
          xl={2}
          item
          className="d-none d-xl-block p-0 m-0 bg-primary"
          sx={{
            position: "relative",
            maxWidth: "300px",
          }}
        >
          <div
            className="bg-white"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "17%",
              height: "100vh",
            }}
          >
            <DrawerContent />
          </div>
        </Grid>
        <Grid item xs xl={10}>
          <AppBar
            className="shadow-none mt-none d-xl-none"
            sx={{
              backgroundColor: "transparent",
              position: "relative",
            }}
          >
            <Toolbar className="d-flex justify-content-between">
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Box className="py-3 ">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </div>
    // </ThemeProvider>
  );
}

export default Main;
