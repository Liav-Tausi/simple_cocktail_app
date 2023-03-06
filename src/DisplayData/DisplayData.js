import React, { useState } from "react";
import { Box, CircularProgress, List, ListItem, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DisplayData = (props) => {
  return (
    <>
      {!props && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 30 }}>
          <CircularProgress />
        </Box>
      )}

      <Link
        to={`${props.drink.strDrink}`}
        state={props.drink.strDrink}
        style={{ textDecoration: "none" }}
      >
        <Paper
          sx={{
            my: "15px",
            p: "5px",
            bgcolor: "#EEEEEE",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              transform: "scale(0.992)",
              cursor: "pointer",
            },
          }}
        >
          <Typography
            component={"h4"}
            sx={{
              fontWeight: "bolder",
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {props.drink.strDrink}
          </Typography>
          <img
            src={props.drink.strDrinkThumb}
            style={{ width: "150px", borderRadius: "15px" }}
          />
        </Paper>
      </Link>
    </>
  );
};

export default DisplayData;
