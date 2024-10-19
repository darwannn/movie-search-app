import {
  Button,
  Stack,
  Typography,
  CircularProgress,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { useState } from "react";

import Axios from "axios";

import backgroundImage from "../assets/img/app_background.jpg";

import NoFoundDialog from "./NoFoundDialog";

export default function Search({ setMovieData }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [plot, setPlot] = useState("Short");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const ApiKey = "a01cab1";
  const [titleError, setTitleError] = useState("");
  const [currentBg, setCurrentBg] = useState(backgroundImage);

  const handleChange = (e) => {
    setPlot(e.target.value);
  };

  function handleSubmit() {
    if (title === "") {
      setTitleError("This field is required");
    } else {
      setIsLoading(true);
      setTitleError("");
      retrieveSearchMovieData(title, year, plot);
    }
  }

  function handleClose() {
    setIsDialogOpen(false);
  }

  async function retrieveSearchMovieData(title, year, plot) {
    try {
      const response = await Axios({
        url: `http://www.omdbapi.com/?t=${title}&y=${year}&plot=${plot}&apiKey=${ApiKey}`,
        method: "GET",
      });

      const data = response.data;

      if (data.Response === "False") {
        setIsDialogOpen(true);
      } else {
        setMovieData({ ...data });
        setCurrentBg(data.Poster !== "N/A" ? data.Poster : backgroundImage);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsDialogOpen(true);
    }
  }

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        p: 2,
        height: "100vh",
        minHeight: "500px",
        gap: "15px",
        backgroundImage: `url(${currentBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",

          backdropFilter: "blur(8px)",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0,0.40), rgba(33, 31, 31, 0.40))",
        }}
      ></Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontStyle: "italic",
          textAlign: "center",
          color: "white",
          zIndex: 1,
        }}
      >
        Endless Movie and Show Discoveries <br /> at Your Fingertips
      </Typography>
      <Typography variant="body2" style={{ color: "white", zIndex: 1 }}>
        "Search for Your Favorite Movies and Dive into Detailed Insights"
      </Typography>
      <Stack
        direction={{
          xs: "column",

          md: "row",
        }}
        gap="5px"
      >
        <FormControl fullWidth>
          <TextField
            required
            id="outlined-basic"
            label="Title"
            variant="outlined"
            helperText={titleError}
            error={!!titleError}
            color="white"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Year"
          variant="outlined"
          color="white"
          onChange={(e) => setYear(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="plot-id" color="white">
            Plot
          </InputLabel>
          <Select
            labelId="plot-id"
            id="demo-simple-select"
            value={plot}
            label="Plot"
            onChange={handleChange}
          >
            <MenuItem value="Short">Short</MenuItem>
            <MenuItem value="Full">Full</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{
            height: "56px",
          }}
        >
          {isLoading ? <CircularProgress color="white" /> : "Search"}
        </Button>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          color: "white",
          position: "relative",
          zIndex: 2,
        }}
      >
        {isLoading ? "Searching movie data ....." : ""}
      </Typography>

      <NoFoundDialog open={isDialogOpen} handleClose={handleClose} />
    </Box>
  );
}
