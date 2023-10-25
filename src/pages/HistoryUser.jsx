import { Notifications } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import { faker } from "@faker-js/faker";
import moment from "moment";
import PieCharts from "../Charts/PieCharts";
import Review from "../components/Review";
import Header from "../components/Header";

const recentPurchasesColumns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 80,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "name",
    headerName:
      location.pathname.split("/")[1] === "business"
        ? "Client Name"
        : "Business Name",
    minWidth: 250,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 130,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
    valueFormatter: (params) => "$" + params.value,
  },
  {
    field: "invoiceNumber",
    headerName: "Invoice",
    minWidth: 230,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "orderDate",
    headerName: "Order Date",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
    renderCell: (params) => (
      <p
        className={`${
          params.value === "Paid" ? "text-success m-0" : "text-danger m-0"
        }`}
      >
        {params.value}
      </p>
    ),
  },
];

const recentPurchasesRows = new Array(5).fill(null).map((_, i) => ({
  id: i + 1,
  name:
    location.pathname.split("/")[1] === "user"
      ? faker.company.name()
      : faker.person.fullName(),
  price: faker.commerce.price(),
  invoiceNumber: ("#" + faker.database.mongodbObjectId()).slice(0, 7),
  orderDate: moment().format("DD MMM YYYY"),
  status: faker.helpers.arrayElement(["Pending", "Paid"]),
}));

function HistoryUser() {
  return (
    <Container maxWidth="100%">
      <Header />
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
        className="mt-4"
      >
        <Grid item xs={12} className="d-flex flex-column gap-3">
          <Card className="p-3 shadow-sm rounded d-flex flex-column gap-3">
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <h6 className="m-0">
                Recent Purchases in
                <select
                  className="fs-6 ms-2"
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid",
                  }}
                >
                  <option>2023</option>
                </select>
              </h6>
              <Link to={"recent-purchases"}>See all</Link>
            </Stack>
            <DataGrid
              rows={recentPurchasesRows}
              columns={recentPurchasesColumns}
              disableColumnMenu
              hideFooter
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="p-3 shadow-sm rounded  d-flex flex-column  gap-3  h-100">
            <h6 className="m-0">
              Services bought in{" "}
              <select
                className="fs-6 ms-2"
                style={{
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid",
                }}
              >
                <option>2023</option>
              </select>
            </h6>
            <div className="d-flex justify-content-center">
              <div style={{ maxWidth: "550px", width: "100%" }}>
                <PieCharts
                  series={[15, 20]}
                  labels={["Electrician", "Plumber"]}
                />
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className="p-3 shadow-sm rounded d-flex flex-column justify-content-start gap-3 h-100">
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <h6 className="m-0">
                Your Reviews since{" "}
                <select
                  className="fs-6 ms-2"
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid",
                  }}
                >
                  <option>2023</option>
                </select>
              </h6>
              <Link to={"recent-purchases"}>See all</Link>
            </Stack>
            <Stack
              direction={"column"}
              spacing={3}
              justifyContent={"space-evenly"}
              className=" h-100"
            >
              {new Array(4).fill(null).map((_, i) => {
                return (
                  <>
                    <Review />
                  </>
                );
              })}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HistoryUser;
