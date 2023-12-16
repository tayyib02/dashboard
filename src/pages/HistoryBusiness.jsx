import { Notifications, TrendingUp } from "@mui/icons-material";
import { Card, Container, Divider, Grid, Stack } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import { faker } from "@faker-js/faker";
import moment from "moment";
import Header from "../components/Header";
import ColumnsChart from "../Charts/ColumnChart";

import LineSuccess from "../assets/LineSuccess.svg";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";

function generateRandomData(count, min, max) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return data;
}

const recentPurchasesColumns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 50,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
    valueFormatter: (params) => console.log(params),
  },
  {
    field: "name",
    headerName:
      location.pathname.split("/")[1] === "business"
        ? "Client Name"
        : "Business Name",
    minWidth: location.pathname.split("/")[1] === "business" ? 150 : 200,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "service",
    headerName: "Serivce",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "city",
    headerName: "City",
    minWidth: 150,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 80,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
    valueFormatter: (params) => "$" + params.value,
  },
  {
    field: "invoiceNumber",
    headerName: "Invoice",
    minWidth: 130,
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
  service: "Plumbing",
  city: faker.location.city(),
  invoiceNumber: ("#" + faker.database.mongodbObjectId()).slice(0, 7),
  orderDate: moment().format("DD MMM YYYY"),
  status: faker.helpers.arrayElement(["Pending", "Paid"]),
}));

function HistoryBussiness() {
  return (
    <Container maxWidth="100%">
      <Header />
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={2}
        className="mt-2"
      >
        <Grid item xs={12} lg={8}>
          <Card className="p-3 shadow-sm rounded  d-flex flex-column  gap-3  h-100">
            <h6 className="m-0">
              Monthly Revenue
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
            <div className="h-100 w-100  d-flex flex-column justify-content-center">
              <ColumnsChart
                series={[
                  {
                    name: "Earning",
                    data: [
                      2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5,
                      0.2,
                    ],
                  },
                ]}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack
            direction={{ xs: "column", md: "row", lg: "column" }}
            spacing={4}
            className=" h-100 w-100 "
          >
            <Card
              className="p-3 shadow-sm rounded d-flex flex-column justify-content-start gap-3 "
              style={{ flex: 1 }}
            >
              <Stack
                direction={"column"}
                justifyContent={"center"}
                className="h-100"
              >
                <h4 className="mb-4 w-100">
                  New Visits{" "}
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
                </h4>
                <Stack direction={"row"}>
                  <div className="h-100 d-flex flex-column justify-content-center w-50">
                    <div>
                      <h1 className="m-0">
                        {faker.helpers.rangeToNumber({ min: 1000, max: 10000 })}
                      </h1>
                      <p className="text-success">
                        +21.01% <TrendingUp />
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end w-50">
                    <img src={LineSuccess} alt="" className="w-75" />
                  </div>
                </Stack>
              </Stack>
            </Card>
            <Card
              className="p-3 pb-0 shadow-sm rounded d-flex flex-column justify-content-start  "
              style={{ flex: 1 }}
            >
              <h6 className="m-0">
                Previous Prices and Services{" "}
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
              <Stack direction={"row"} className="h-100">
                <LineChart
                  series={[
                    {
                      name: "Service A",
                      data: generateRandomData(12, 0, 25),
                    },
                    {
                      name: "Service B",
                      data: generateRandomData(12, 25, 50),
                    },
                    {
                      name: "Service C",
                      data: generateRandomData(12, 50, 75),
                    },
                    {
                      name: "Service D",
                      data: generateRandomData(12, 75, 100),
                    },
                  ]}
                />
              </Stack>
            </Card>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card className="p-3 shadow-sm rounded d-flex flex-column gap-3 h-100">
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <h6 className="m-0">
                Recent Orders{" "}
                <select
                  className="fs-6 mx-2"
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid",
                  }}
                >
                  {[
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                  ].map((item, i) => (
                    <option key={item + i}>{item}</option>
                  ))}
                </select>
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
        <Grid item xs={12} lg={4}>
          <Card className="p-3 shadow-sm rounded d-flex flex-column  h-100">
            <Stack direction={"row"} justifyContent={"space-between"}>
              <h6 className="m-0">
                Jobs in Cities{" "}
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
              <Link to={"recent-purchases"}></Link>
            </Stack>
            <Stack
              direction={"column"}
              justifyContent={"space-between"}
              alignItems={"center"}
              className="w-100 h-100 "
            >
              <BarChart
                series={[
                  {
                    data: [400, 430, 448, 470, 540],
                  },
                ]}
              />
            </Stack>
            <Divider className="mb-3" />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              className="w-100"
            >
              <p className="text-muted m-0">Total Jobs</p>
              <p className="text-muted m-0">26</p>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HistoryBussiness;
