// import React, { useState, useEffect } from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   Container,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Grid,
//   IconButton,
//   Pagination,
//   Stack,
//   TextField,
// } from "@mui/material";
// import Header from "../components/Header";
// import { Add, Close, Edit } from "@mui/icons-material";
// import { DataGrid } from "@mui/x-data-grid";
// import { faker } from "@faker-js/faker";
// import styled from "@emotion/styled";

// const VisuallyHiddenInput = styled("input")({
//   clip: "rect(0 0 0 0)",
//   clipPath: "inset(50%)",
//   height: 1,
//   overflow: "hidden",
//   position: "absolute",
//   bottom: 0,
//   left: 0,
//   whiteSpace: "nowrap",
//   width: 1,
// });

// const AddService = ({ open, handleClose }) => {
//   return (
//     <Dialog
//       open={open}
//       handleClose={() => handleClose()}
//       maxWidth={"sm"}
//       fullWidth
//     >
//       <DialogTitle>
//         <Box className="d-flex align-items-center justify-content-between mb-3">
//           <h6 className="m-0 fw-bold">Service Information</h6>
//           <IconButton onClick={() => handleClose()}>
//             <Close />
//           </IconButton>
//         </Box>
//       </DialogTitle>
//       <DialogContent>
//         <Stack direction={"column"} gap={3}>
//           <TextField
//             label="Service name"
//             size="small"
//             variant="filled"
//             InputProps={{ disableUnderline: true }}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             fullWidth
//             type="password"
//           />

//           <TextField
//             label="Description"
//             multiline
//             rows={6}
//             size="small"
//             variant="filled"
//             InputProps={{ disableUnderline: true }}
//             InputLabelProps={{
//               shrink: true,
//             }}
//             fullWidth
//           />
//           <Stack direction={"row"} spacing={2}>
//             <TextField
//               label="Price"
//               size="small"
//               variant="filled"
//               InputProps={{ disableUnderline: true }}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               fullWidth
//             />
//             <TextField
//               label="VAT"
//               size="small"
//               variant="filled"
//               InputProps={{ disableUnderline: true }}
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               fullWidth
//             />
//           </Stack>
//           <Box
//             component="label"
//             className="border d-flex flex-column align-items-center justify-content-center"
//             sx={{
//               width: 100,
//               height: 100,
//               overflow: "visible",
//               position: "relative",
//             }}
//           >
//             <Add className="text-muted" />
//             <p className="m-0 text-muted" style={{ fontSize: "12px" }}>
//               Add Image
//             </p>
//             <VisuallyHiddenInput type="file" />
//           </Box>
//         </Stack>
//       </DialogContent>
//       <DialogActions>
//         <Box className="d-flex align-items-center justify-content-center gap-3 w-100 mb-2">
//           <Button disableElevation onClick={() => handleClose()}>
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             disableElevation
//             onClick={() => handleClose()}
//           >
//             Save
//           </Button>
//         </Box>
//       </DialogActions>
//     </Dialog>
//   );
// };

// function Services() {
//   const [servicesDailogOpen, setServicesDailogOpen] = useState(false);
//   const [services, setServices] = useState([]);

//   const servicesDailogClose = () => {
//     setServicesDailogOpen(false);
//   };

//   useEffect(() => {
//     // Fetch services data
//     fetch("http://localhost:5500/api/v1/service/64a9683c3fc1727eec119294")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status === "success") {
//           // Set services data to state
//           setServices(data.data.data);
//         } else {
//           console.error("Error fetching services:", data.message);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching services:", error);
//       });
//   }, []); // Empty dependency array ensures this effect runs once on mount

//   return (
//     <Container maxWidth="100%" className="min-vh-100">
//       <AddService open={servicesDailogOpen} handleClose={servicesDailogClose} />
//       <Header />
//       <Grid container spacing={2} sx={{ flex: 1 }} className="mt-4 ">
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             disableElevation
//             onClick={() => setServicesDailogOpen(true)}
//           >
//             <Add />
//             Add service
//           </Button>
//         </Grid>
//         <Grid item xs={12} className="d-flex flex-column gap-3">
//           <Card className="p-3 shadow-sm rounded d-flex flex-column gap-3">
//             <DataGrid
//               rows={services}
//               disableColumnMenu
//               hideFooter
//               rowHeight={85}
//               onRowClick={() => setServicesDailogOpen(true)}
//             />
//           </Card>
//           <div className="d-flex justify-content-end">
//             <Pagination count={10} color="primary" />
//           </div>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default Services;

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
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Add, Close, Edit } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { API_Endpoint, token, email, business_ID } from "../components/API";

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
    minWidth: 150,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
  },
  {
    field: "description",
    headerName: "Description",
    minWidth: 350,
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
    field: "vat",
    headerName: "VAT",
    minWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
    valueFormatter: (params) => params.value + "%",
  },
  {
    field: "image",
    headerName: "Thumbnail",
    minWidth: 100,
    maxWidth: 100,
    flex: 1,
    cellClassName: "text-muted",
    headerClassName: "fw-bold bg-light",
    renderCell: () => (
      <div className="bg-primary">
        <Avatar
          sx={{ borderRadius: 1, height: 70, width: 70 }}
          src={faker.image.urlLoremFlickr({ category: "job" })}
        ></Avatar>
      </div>
    ),
  },
];

const recentPurchasesRows = new Array(5).fill(null).map((_, i) => ({
  id: i + 1,
  name: "Plumbing",
  price: faker.commerce.price(),
  description: faker.lorem.sentences(),
  vat: faker.helpers.rangeToNumber({ min: 10, max: 15 }),
}));

const AddService = ({ open, handleClose }) => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [vat, setVat] = useState("");
  const [image, setImage] = useState(null);

  const handleServiceNameChange = (e) => {
    setServiceName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleVatChange = (e) => {
    setVat(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append("name", serviceName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("vat", vat);
    formData.append("images", image);
    formData.append("business", business_ID);

    fetch(`${API_Endpoint}/service/${business_ID}?business=${business_ID}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("Service saved successfully");
          handleClose(); // Close the dialog after successful save
        } else {
          console.error("Error saving service:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error saving service:", error);
      });
  };

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
            onChange={handleServiceNameChange}
            value={serviceName}
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />

          <TextField
            label="Description"
            multiline
            rows={6}
            size="small"
            variant="filled"
            onChange={handleDescriptionChange}
            value={description}
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
              onChange={handlePriceChange}
              value={price}
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
              onChange={handleVatChange}
              value={vat}
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
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Selected Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <>
                <Add className="text-muted" />
                <p className="m-0 text-muted" style={{ fontSize: "12px" }}>
                  Add Image
                </p>
              </>
            )}
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
            onClick={() => handleSave()}
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
  const [servicesData, setServicesData] = useState([]);
  const servicesDailogClose = () => {
    setServicesDailogOpen(false);
  };



  useEffect(() => {
    // Function to fetch services data
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_Endpoint}/service/${business_ID}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.status === "success") {
          // Set services data to state
          console.log(data.data.data);
          setServicesData(data.data.data);
        } else {
          console.error("Error fetching services:", data.message);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    // Call the function to fetch services data
    fetchServices();
  }, [servicesData]);





  return (
    <Container maxWidth="100%" className="min-vh-100">
      <AddService open={servicesDailogOpen} handleClose={servicesDailogClose} />
      <Header />
      <Grid container spacing={2} sx={{ flex: 1 }} className="mt-4 ">
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
              rows={servicesData}
              columns={recentPurchasesColumns}
              disableColumnMenu
              hideFooter
              rowHeight={85}
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
