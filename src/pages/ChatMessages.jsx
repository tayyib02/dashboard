import styled from "@emotion/styled";
import { faker } from "@faker-js/faker";
import {
  FileOpenOutlined,
  PhotoOutlined,
  SendOutlined,
} from "@mui/icons-material";
import { Avatar, Box, IconButton, TextField } from "@mui/material";
import React from "react";

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

function ChatMessages() {
  return (
    <Box className="h-100 d-flex flex-column">
      <Box
        className=" p-4 d-flex align-items-center gap-2 border-bottom"
        sx={{ height: "80px" }}
      >
        <div className="d-flex gap-2">
          <Avatar
            src={faker.image.avatarLegacy()}
            sx={{ borderRadius: 1, height: 50, width: 50 }}
            className="border"
          ></Avatar>
          <div className="d-flex flex-column justify-content-between py-1">
            <h6 className="m-0 ">{faker.person.firstName()}</h6>
            <div
              className="m-0 d-flex align-items-center gap-2"
              style={{ fontSize: "12px" }}
            >
              {" "}
              <Box
                className="bg-success"
                style={{ height: "8px", width: "8px", borderRadius: "50%" }}
              ></Box>{" "}
              Online
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{ flex: 1 }}
        className="d-flex flex-column align-items-start p-4"
      >
        <Box
          className="bg-primary text-white p-2 rounded align-self-start"
          sx={{ maxWidth: "350px" }}
        >
          Hello
        </Box>
        <Box
          className="bg-secondary text-white p-2 rounded align-self-end"
          sx={{ maxWidth: "350px" }}
        >
          Hello
        </Box>
        <Box
          className="bg-primary text-white p-2 rounded align-self-start"
          sx={{ maxWidth: "350px" }}
        >
          If you are in need of a skilled plumber to address your plumbing
          concerns, you've come to the right place. Our team of experienced
          plumbers is dedicated to providing top-notch plumbing services.
          Whether it's fixing a leaky faucet, unclogging drains, or handling
          more complex plumbing projects, we have you covered.
        </Box>
        <Box
          className="bg-secondary text-white p-2 rounded align-self-end"
          sx={{ maxWidth: "350px" }}
        >
          Thanks
        </Box>
      </Box>
      <Box className="px-4 d-flex gap-2 align-items-center my-4">
        <TextField fullWidth placeholder="Write your message here"></TextField>
        <IconButton>
          <VisuallyHiddenInput type="file" />
          <PhotoOutlined />
        </IconButton>
        <IconButton>
          <VisuallyHiddenInput type="file" />
          <FileOpenOutlined />
        </IconButton>
        <IconButton color="primary">
          <SendOutlined />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ChatMessages;
