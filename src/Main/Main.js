import axios from "axios";
import {
  AppBar,
  FormGroup,
  Typography,
  Toolbar,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import AbcIcon from "@mui/icons-material/Abc";
import DisplayData from "../DisplayData/DisplayData";
import Abc from "../Abc/Abc";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputData, setInputData] = useState(null);
  const [searchByLetters, setsearchByLetters] = useState(false);
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const request = async () => {
    const invalidChars = /[$#=@!+%^&*{}()]/;
    try {
      if (inputValue.length === 1 && !invalidChars.test(inputValue)) {
        handleLetterRequest(inputValue);
      } else if (inputValue.length > 1 && !invalidChars.test(inputValue)) {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
        );
        console.log(response);
        if (response.status !== 200) {
          throw new Error("response status error");
        }
        if (response.data.drinks) {
          setInputData(response);
        }else {
          alert('No Cocktails Found')
        }
      } else {
        alert("Invalid Search!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLetterRequest = async (letter) => {
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      if (response.status !== 200) {
        throw new Error("response status error");
      }
      setInputData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "#00ADB5" }}>
        <Toolbar>
          <Typography variant="h1" fontSize={"27px"}>
            Cocktail App
          </Typography>
          <LocalBarIcon />
        </Toolbar>
      </AppBar>

      <Container
        sx={{
          bgcolor: "#EEEEEE",
          p: "25px",
          height: "auto",
          mx: { sx: "0px" },
          px: { sx: "0px" },
        }}
      >
        <Typography
          sx={{
            display: "flex",
            fontSize: { xs: "20px", md: "35px", lg: "40px" },
            justifyContent: "center",
          }}
        >
          Welcome to the Cocktail Library
        </Typography>
        <FormGroup
          row
          sx={{
            my: "10px",
            justifyContent: "space-evenly",
          }}
        >
          {searchByLetters === false ? (
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00ADB5",
                p: 0,
              }}
              onClick={() => setsearchByLetters(true)}
            >
              <AbcIcon fontSize="large" />
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00ADB5",
                p: 0,
              }}
              onClick={() => setsearchByLetters(false)}
            >
              Close
            </Button>
          )}
          <TextField
            sx={{
              width: { xs: "60%", sm: "70%", md: "83%", lg: "87%" },
            }}
            label="Search Cocktails"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00ADB5",
            }}
            onClick={request}
          >
            <SearchIcon />
          </Button>
          <FormGroup
            row
            sx={{
              my: "10px",
              justifyContent: "space-evenly",
            }}
          >
            {searchByLetters &&
              alphabet.map((letter) => (
                <Abc
                  key={letter}
                  letter={letter}
                  onClick={handleLetterRequest}
                />
              ))}
          </FormGroup>

        </FormGroup>
        {inputData &&
          inputData.data.drinks.map((drink) => (
            <DisplayData key={drink.idDrink} drink={drink} />
          ))}
      </Container>
    </>
  );
};

export default Main;
