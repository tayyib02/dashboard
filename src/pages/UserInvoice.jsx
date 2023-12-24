import {
    Box,
    Card,
    Container,
    MenuItem,
    Pagination,
    Stack,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { API_Endpoint, token, email } from "../components/API";
  
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
  
  const inovicesRows = new Array(10).fill(null).map((_, i) => ({
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
  
  function UserInvoices() {
    const history = useNavigate();
    const [invoices, setInvoices] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");  
  
    const routeTo = (route) => {
      history(route);
    };
  
    useEffect(() => {
      const fetchInvoices = async () => {
        try {
          const response = await fetch(
            `${API_Endpoint}/order/getUserOrders`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
  
          const data = await response.json();
  
          if (response.ok) {
            setInvoices(data.data.data);
          } else {
            console.error("Error fetching invoices:", data.message);
          }
        } catch (error) {
          console.error("Error fetching invoices:", error);
        }
      };
  
      fetchInvoices();
    }, []);

    const formattedInvoices = invoices.map((invoice, index) => ({
      id: index + 1, // Use the _id field as the unique id
      name: invoice.businesses[0]?.title,
      price: invoice.price,
      service: invoice.services[0]?.name || "",
      city: invoice.businesses[0]?.city, // Access city within the businesses array
      invoiceNumber: invoice.invoiceId,
      orderDate: moment(invoice.orderDate).format("DD MMM YYYY"),
      status: invoice.status,
    }));
    
  
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
              value={statusFilter}
              variant="filled"
              label="Status"
              size="small"
              fullWidth
              onChange={(e) => setStatusFilter(e.target.value)}
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
             rows={formattedInvoices}
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
  
  export default UserInvoices;
  