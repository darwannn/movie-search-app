import { Box, Grid2 } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";

import MovieDetails from "./MovieDetails";

export default function MovieContainer({
  movieData,
  setIsSnackbarShowed,
  setAlertSnackbarMessage,
  watchList,
  setWatchList,
  actors,
}) {
  const theme = useTheme();

  const isInWatchList = watchList.some(
    (movie) => movie.imdbID === movieData.imdbID
  );

  const handleWatchListToggle = () => {
    let updatedWatchList;
    if (isInWatchList) {
      updatedWatchList = watchList.filter(
        (movie) => movie.imdbID !== movieData.imdbID
      );
    } else {
      updatedWatchList = [...watchList, movieData];
    }
    setAlertSnackbarMessage(
      isInWatchList
        ? `${movieData.Title} removed from watch list`
        : `${movieData.Title} added to watch list`
    );
    setWatchList(updatedWatchList);
    setIsSnackbarShowed(true);
    localStorage.setItem("watchList", JSON.stringify(updatedWatchList));
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid2 container>
        <Grid2
          size={{ xs: 12, sm: 12, md: 4, lg: 4 }}
          sx={{
            maxHeight: "100vh",
            position: {
              xs: "relative",

              md: "sticky",
            },
            top: 0,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: 20,
              top: 20,

              zIndex: 20,
            }}
          >
            {isInWatchList ? (
              <FavoriteIcon
                onClick={handleWatchListToggle}
                sx={{ color: "secondary.main", cursor: "pointer" }}
              />
            ) : (
              <FavoriteIcon
                onClick={handleWatchListToggle}
                sx={{ color: "#bcbcbc", cursor: "pointer" }}
              />
            )}
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              backgroundImage: {
                xs: `linear-gradient(to top, ${theme.palette.primary.main}, transparent)`,

                md: `linear-gradient(to left, ${theme.palette.primary.main}, transparent)`,
              },
            }}
          ></Box>

          <img
            src={
              movieData.Poster !== "N/A"
                ? movieData.Poster
                : "https://via.placeholder.com/1000"
            }
            alt={movieData.Title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid2>

        <Grid2
          size={{ xs: 12, sm: 12, md: 8, lg: 8 }}
          sx={{
            display: "flex",

            minHeight: "100vh",
          }}
        >
          <MovieDetails movieData={movieData} actors={actors} />
        </Grid2>
      </Grid2>
    </Box>
  );
}
