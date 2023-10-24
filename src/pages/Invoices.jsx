import {
  Box,
  Card,
  Container,
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

const Statuses = ["All", "Paid", "Pending"];

const InvoicesColumns = [
  {
    field: "id",
    headerName: "ID",
    minWidth: 210,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
  },
  {
    field: "businessName",
    headerName: "Business Name",
    minWidth: 350,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
  },

  {
    field: "invoiceNumber",
    headerName: "Invoice Number",
    minWidth: 230,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
  },

  {
    field: "orderDate",
    headerName: "Order Date",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
  },
  {
    field: "price",
    headerName: "Price",
    minWidth: 130,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
    valueFormatter: (params) => "$" + params.value,
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
  },
];

const inovicesRows = new Array(12).fill(null).map(() => ({
  id: faker.database.mongodbObjectId(),
  businessName: faker.company.name(),
  price: faker.commerce.price(),
  invoiceNumber: "#" + faker.database.mongodbObjectId(),
  orderDate: moment().format("DD MMM YYYY"),
  status: faker.helpers.arrayElement(["Pending", "Paid"]),
}));

function Invoices() {
  const history = useNavigate();

  const routeTo = (route) => {
    history(route);
  };
  return (
    <Container maxWidth="100%">
      <Header />
      <Card className="p-3 shadow-sm-sm rounded d-flex flex-column gap-3 mt-4">
        <Stack
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
        </Stack>
        <DataGrid
          rows={inovicesRows}
          columns={InvoicesColumns}
          disableColumnMenu
          hideFooter
          className="mt-2"
          sx={{
            "& .MuiDataGrid-cell:hover": {
              cursor: "pointer",
            },
          }}
          onRowClick={(params) => {
            routeTo(`${params.id}`);
          }}
        />
      </Card>
      <Box className="d-flex justify-content-end mt-4">
        <Pagination count={10} color="primary" />
      </Box>
    </Container>
  );
}

export default Invoices;
