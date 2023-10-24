import { faker } from "@faker-js/faker";
import { Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Container,
  Grid,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  Paper,
  TextField,
} from "@mui/material";
import moment from "moment";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Chats() {
  const history = useNavigate();

  const routeTo = (route) => {
    history(route);
  };
  return (
    <Container maxWidth={"100%"}>
      <Card className="shadow-sm rounded  d-flex flex-column  gap-3  h-100">
        <Grid container style={{ height: "90vh" }}>
          <Grid
            item
            xs={12}
            md={5}
            sm={6}
            lg={4}
            xl={3}
            className=" border-end"
            style={{ height: "100%" }}
          >
            <Box
              className=" p-4 d-flex align-items-center  gap-2 border-bottom"
              sx={{ height: "80px" }}
            >
              <h6 className="m-0">Messages</h6>
              <Chip
                size="small"
                className="px-1"
                label="2"
                color="primary"
                sx={{ py: 0, height: "19px" }}
              />
            </Box>
            <Box className="p-3">
              <TextField
                variant="outlined"
                placeholder="Search Messages"
                fullWidth
              />
            </Box>
            <List className=" px-3 d-flex flex-column gap-3">
              {new Array(5).fill(null).map((_, i) => (
                <ListItemButton
                  key={i}
                  selected={location.pathname.split("/")[3] == i}
                  sx={{ borderRadius: 2 }}
                  onClick={() => routeTo(i + "")}
                >
                  <Box className="d-flex align-items-start justify-content-between w-100">
                    <Box className="d-flex align-items-center gap-2">
                      <Avatar
                        sx={{
                          borderRadius: 1,
                          height: 60,
                          width: 60,
                        }}
                        src={faker.image.avatarLegacy()}
                      ></Avatar>
                      <div>
                        <p className="fw-bold m-0">
                          {faker.person.firstName()}
                        </p>
                        <p className="text-muted m-0">Hey!</p>
                      </div>
                    </Box>
                    <Box>
                      <p
                        className="text-muted m-0"
                        style={{ fontSize: "14px" }}
                      >
                        {moment().format("DD/MM/YYYY")}
                      </p>
                    </Box>
                  </Box>
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs style={{ height: "100%" }}>
            <Outlet></Outlet>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default Chats;
