import { Box, Drawer, Stack, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

import React, { useState } from "react";

export default function WatchList({
  isDrawerOpen,
  setIsDrawerOpen,
  watchList,
  setMovieData,
}) {
  const [hoveredMovie, setHoveredMovie] = useState(null);

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box
        sx={{
          width: 250,
          height: "100%",
          px: 4,
          py: 2,
          textAlign: "center",
          backgroundColor: "primary.secondary",
          overflowY: "auto",
        }}
        role="presentation"
      >
        <Box
          sx={{
            mr: -2,
            textAlign: "right",
            color: "white",
            cursor: "pointer",
          }}
        >
          <CancelIcon onClick={() => setIsDrawerOpen(false)} />
        </Box>
        <Typography variant="h5" sx={{ mt: 2, mb: 2, fontWeight: 700 }}>
          Watchlist
        </Typography>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {watchList.length > 0 ? (
            watchList.map((movie) => (
              <Box
                key={movie.imdbID}
                position="relative"
                margin={1}
                onClick={() => {
                  setMovieData(movie);
                  setIsDrawerOpen(false);
                }}
                onMouseEnter={() => setHoveredMovie(movie.imdbID)}
                onMouseLeave={() => setHoveredMovie(null)}
                sx={{
                  cursor: "pointer",
                  width: 150,
                  height: "auto",
                }}
              >
                <img
                  alt={movie.Title}
                  src={movie.Poster}
                  style={{ width: "100%", height: "auto" }}
                />
                {hoveredMovie === movie.imdbID && (
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgcolor="rgba(0, 0, 0, 0.7)"
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h6">View Details</Typography>
                  </Box>
                )}
              </Box>
            ))
          ) : (
            <Typography variant="body1">
              No movies in your watchlist.
            </Typography>
          )}
        </Stack>
      </Box>
    </Drawer>
  );
}
