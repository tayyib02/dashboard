import moment from "moment";
import React from "react";
import { Rating, Stack } from "@mui/material";

function Review() {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <div className="d-flex flex-column gap-1 ">
        <p style={{ fontSize: 12 }} className=" text-muted m-0">
          {moment().format("DD MMM YYYY")}
        </p>
        <h6 className="m-0">Electrical Wiring</h6>
        <p className="text-muted  m-0" style={{ fontSize: 12 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          commodi velit ipsam illo quibusdam,
        </p>
      </div>
      <div className=" d-flex flex-column justify-content-between align-items-end">
        <Rating value={4}></Rating>
        <p className="m-0">$200</p>
      </div>
    </Stack>
  );
}

export default Review;
