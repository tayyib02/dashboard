import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import {
  BusinessOutlined,
  Close,
  Edit,
  EditOutlined,
  ErrorOutline,
  LockOutlined,
  PersonOutline,
  WarningAmberOutlined,
} from "@mui/icons-material";
import { styled } from "@mui/styles";

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

const PasswordDailog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose()}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle>
        <Box className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="m-0 fw-bold">Change Account Password</h6>
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Stack direction={"column"} gap={3}>
          <TextField
            label="Old Password"
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
            label="New Password"
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
            label="Confirm Password"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            type="password"
          />
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

const ProfileDailog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose()}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle>
        <Box className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="m-0 fw-bold">Change Profile Information</h6>
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Stack direction={"column"} gap={3}>
          <TextField
            label="First Name"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="Last Name"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="Username"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="Email"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            type="email"
          />
          <TextField
            label="Confirm Password"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            type="password"
          />
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
            Update
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

const BusinessDailog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose()}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle>
        <Box className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="m-0 fw-bold">Change Business Information</h6>
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Stack direction={"column"} alignItems={"center"} className="mb-3">
          <Box
            component="label"
            className="border"
            sx={{
              width: 100,
              height: 100,
              overflow: "visible",
              position: "relative",
              borderRadius: "50%",
            }}
          >
            <VisuallyHiddenInput type="file" />
            <Avatar
              src="https://i.pravatar.cc/300"
              sx={{
                width: 100,
                height: 100,
                transition: "all 0.2s linear",
                ":hover": {
                  filter: "blur(2px)",
                },
              }}
            />
            <Box
              className="bg-primary p-1"
              sx={{
                position: "absolute",
                zIndex: 5,
                right: 0,
                bottom: -10,
                transform: "translate(30%,-50%)",
                borderRadius: "50%",
              }}
            >
              <Edit className="text-white" sx={{ transform: "scale(0.7)" }} />
            </Box>
          </Box>
          <p className="fw-bold">Business Logo</p>
        </Stack>
        <Stack direction={"column"} gap={3}>
          <TextField
            label="Bussiness Name"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="Business Phone"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="Business Email"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            type="email"
          />
          <TextField
            label="Business Address"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            label="Post Code"
            size="small"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
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
            Update
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

const DeactivateDailog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose()}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle className="pb-0">
        <Box className="d-flex align-items-center justify-content-end mb-3">
          <IconButton onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent className="d-flex flex-column gap-3">
        <p className="m-0 text-center">
          <div className="d-flex justify-content-center mb-2">
            <WarningAmberOutlined fontSize={"large"} color="error" />
          </div>
          <div className="fw-bold  text-danger mb-2">
            Are you sure you want to deactivate your account?
          </div>

          <span className="text-muted" style={{ fontSize: "14px" }}>
            This action is irreversible, and you will lose access to your
            account and all associated data.
          </span>
        </p>
        <TextField
          type="password"
          label="Confirm Password"
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
            color="error"
            variant="contained"
            disableElevation
            onClick={() => handleClose()}
          >
            Deactivate Account
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
const ReportDailog = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      handleClose={() => handleClose()}
      maxWidth={"sm"}
      fullWidth
    >
      <DialogTitle>
        <Box className="d-flex align-items-center justify-content-between mb-3">
          <h6 className="m-0 fw-bold">Report Client / Bussiness</h6>
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
            Report
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

function Settings() {
  const [passwordDailogOpen, setPasswordDailogOpen] = useState(false);
  const passwordDailogClose = () => {
    setPasswordDailogOpen(false);
  };

  const [profileDailogOpen, setProfileDailogOpen] = useState(false);
  const profileDailogClose = () => {
    setProfileDailogOpen(false);
  };

  const [businessDailogOpen, setBusinessDailogOpen] = useState(false);
  const businessDailogClose = () => {
    setBusinessDailogOpen(false);
  };

  const [deactivateDailogOpen, setDeactivateDailogOpen] = useState(false);
  const deactivateDailogClose = () => {
    setDeactivateDailogOpen(false);
  };

  const [reportDailogOpen, setReportDailogOpen] = useState(false);
  const reportDailogClose = () => {
    setReportDailogOpen(false);
  };
  return (
    <Container maxWidth="100%">
      <PasswordDailog
        open={passwordDailogOpen}
        handleClose={passwordDailogClose}
      />
      <ProfileDailog
        open={profileDailogOpen}
        handleClose={profileDailogClose}
      />
      <BusinessDailog
        open={businessDailogOpen}
        handleClose={businessDailogClose}
      />
      <DeactivateDailog
        open={deactivateDailogOpen}
        handleClose={deactivateDailogClose}
      />
      <ReportDailog open={reportDailogOpen} handleClose={reportDailogClose} />
      <Header />
      <Stack direction={"column"} className="mt-4" gap={2}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <h6 className="m-0 fw-bold">Security</h6>
        </Stack>
        <Divider />
        <Stack
          className="cursor-pointer"
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            ":hover": {
              opacity: 0.7,
            },
          }}
          onClick={() => setPasswordDailogOpen(true)}
        >
          <p className="m-0 text-muted">Change Password</p>
          <LockOutlined className="text-muted" />
        </Stack>

        <Divider />
        {location.pathname.split("/")[1] === "business" ? (
          <Stack
            className="cursor-pointer"
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              ":hover": {
                opacity: 0.7,
              },
            }}
            onClick={() => setBusinessDailogOpen(true)}
          >
            <p className="m-0 text-muted">Change Bussiness Information</p>
            <BusinessOutlined className="text-muted" />
          </Stack>
        ) : (
          <Stack
            className="cursor-pointer"
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              ":hover": {
                opacity: 0.7,
              },
            }}
            onClick={() => setProfileDailogOpen(true)}
          >
            <p className="m-0 text-muted">Change Profile Information</p>
            <PersonOutline className="text-muted" />
          </Stack>
        )}
        <Divider />
        <Stack
          className="cursor-pointer"
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            ":hover": {
              opacity: 0.7,
            },
          }}
          onClick={() => setDeactivateDailogOpen(true)}
        >
          <p className="m-0 text-danger">Deactivate Acount</p>
          <WarningAmberOutlined className="text-danger" />
        </Stack>
        <Divider />
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <h6 className="m-0 fw-bold">Report Center</h6>
        </Stack>
        <Stack
          className="cursor-pointer"
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            ":hover": {
              opacity: 0.7,
            },
          }}
          onClick={() => setReportDailogOpen(true)}
        >
          <p className="m-0 text-muted">Report a Client / Business</p>
          <ErrorOutline className="text-muted" />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Settings;
