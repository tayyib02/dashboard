import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import { Add, Close, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";

import { faker } from "@faker-js/faker";
import styled from "@emotion/styled";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const recentPurchasesColumns = [
  {
    field: "name",
    headerName: "Name",
    minWidth: 250,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 350,
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
    field: "vat",
    headerName: "VAT",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
    valueFormatter: (params) => params.value + "%",
  },
  {
    field: "image",
    headerName: "Thumbnail",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold",
    renderCell: () => (
      <Avatar
        src={faker.image.urlLoremFlickr({ category: "job" })}
        sx={{ overflow: "visible" }}
      />
    ),
  },
];

const recentPurchasesRows = new Array(5).fill(null).map(() => ({
  id: faker.database.mongodbObjectId(),
  name: faker.company.name(),
  price: faker.commerce.price(),
  description: faker.lorem.sentences(),
  vat: faker.helpers.rangeToNumber({ min: 10, max: 15 }),
}));

const AddService = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose()}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle>
        <Box className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="m-0 fw-bold">Service Information</h6>
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Stack direction={"column"} gap={3}>
          <TextField
            label="Service name"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            type="password"
          />

          <TextField
            label="Description"
            multiline
            rows={6}
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <Stack direction={"row"} spacing={2}>
            <TextField
              label="Price"
              size="small"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
            <TextField
              label="VAT"
              size="small"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Stack>
          <Box
            component="label"
            className="border d-flex flex-column align-items-center justify-content-center"
            sx={{
              width: 100,
              height: 100,
              overflow: "visible",
              position: "relative",
            }}
          >
            <Add className="text-muted" />
            <p className="m-0 text-muted" style={{ fontSize: "12px" }}>
              Add Image
            </p>
            <VisuallyHiddenInput type="file" />
          </Box>
        </Stack>
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
            Save
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

function Services() {
  const [servicesDailogOpen, setServicesDailogOpen] = useState(false);
  const servicesDailogClose = () => {
    setServicesDailogOpen(false);
  };
  return (
    <Container maxWidth="100%">
      <AddService open={servicesDailogOpen} handleClose={servicesDailogClose} />
      <Header />
      <Grid container spacing={2} className="mt-4">
        <Grid item xs={12}>
          <Button
            variant="contained"
            disableElevation
            onClick={() => {
              setServicesDailogOpen(true);
            }}
          >
            <Add />
            Add service
          </Button>
        </Grid>
        <Grid item xs={12} className="d-flex flex-column gap-3">
          <Card className="p-3 shadow-sm rounded d-flex flex-column gap-3">
            <DataGrid
              rows={recentPurchasesRows}
              columns={recentPurchasesColumns}
              disableColumnMenu
              hideFooter
              onRowClick={() => setServicesDailogOpen(true)}
            />
          </Card>
          <div className="d-flex justify-content-end">
            <Pagination count={10} color="primary" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Services;
