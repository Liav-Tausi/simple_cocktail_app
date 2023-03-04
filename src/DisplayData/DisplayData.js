import React, { useState } from "react";
import { List, ListItem, Paper, Typography } from "@mui/material";

const DisplayData = ({ drink }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMouseOver = () => {
    setShowMore(true);
  };

  const handleMouseOut = () => {
    setShowMore(false);
  };

  return (
    <Paper
      sx={{ my: "15px", p: "5px", bgcolor: "#EEEEEE" }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Typography
        component={"h4"}
        sx={{ fontWeight: "bolder", fontSize: "20px" }}
      >
        {drink.strDrink}
      </Typography>
      <Typography>{drink.strInstructions}</Typography>
      {showMore && (
        <>
          <Typography component={"h5"} sx={{ mt: "10px", fontWeight: "bold" }}>
            Ingredients:
          </Typography>
          <List>
            <ListItem>Category: {drink.strCategory}</ListItem>
            <ListItem>Glass: {drink.strGlass}</ListItem>
            <ListItem>
              Ingredients: {drink.strIngredient1} {drink.strIngredient2}{" "}
              {drink.strIngredient3} {drink.strIngredient4}{" "}
              {drink.strIngredient5} {drink.strIngredient6}{" "}
            </ListItem>
          </List>
        </>
      )}
    </Paper>
  );
};

export default DisplayData;
