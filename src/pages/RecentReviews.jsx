import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  MenuItem,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { DataGrid } from "@mui/x-data-grid";

import { faker } from "@faker-js/faker";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import Review from "../components/Review";

// const Statuses = ["All", "Paid", "Pending"];

const HeaderContent = () => {
  const history = useNavigate();
  const routeTo = (route) => {
    history(route);
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <IconButton onClick={() => routeTo(-1)}>
        <ArrowBack />
      </IconButton>
      <h4 className="m-0">Recent Reviews</h4>
    </div>
  );
};

function RecentReviews() {
  const history = useNavigate();

  const routeTo = (route) => {
    history(route);
  };
  return (
    <Container maxWidth="100%">
      <Header Data={<HeaderContent />} />

      {/* <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
          className="mt-3"
        >
          <TextField
            variant="filled"
            size="small"
            label="Search"
            fullWidth
            sx={{
              maxWidth: "300px",
            }}
            InputProps={{
              disableUnderline: true,
            }}
          ></TextField>
          <TextField
            id="outlined-select-currency"
            select
            value={"Paid"}
            defaultValue={"Paid"}
            variant="filled"
            label="Status"
            size="small"
            fullWidth
            sx={{
              maxWidth: "300px",
            }}
            InputProps={{
              disableUnderline: true,
            }}
          >
            {Statuses.map((option) => (
              <MenuItem
                key={option}
                value={option}
                className="d-flex align-items-center gap-2"
              >
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Stack> */}
      <Grid container spacing={2}>
        {new Array(9).fill(null).map((_, i) => {
          return (
            <Grid item xs={12} md={6} xl={4}>
              <Card className="p-3 shadow-sm-sm rounded d-flex flex-column gap-3 mt-4">
                <Review key={i} className="border" />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default RecentReviews;
