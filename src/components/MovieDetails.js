import {
  Tabs,
  Tab,
  Box,
  Chip,
  Typography,
  Avatar,
  Rating,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

import { useState } from "react";

import CustomTabPanel from "./CustomTabPanel";

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function MovieDetails({ movieData, actors }) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const ratingToStar = (value) => {
    if (value.includes("/10")) {
      return parseFloat(value) / 2;
    } else if (value.includes("%")) {
      return (parseFloat(value) / 100) * 5;
    } else if (value.includes("/100")) {
      return (parseFloat(value) / 100) * 5;
    }
    return 0;
  };

  return (
    <Box sx={{ width: "100%", p: 5 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
          sx={{
            borderBottom: "2px solid #2D2D2D",
          }}
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Reviews" {...a11yProps(1)} />
          <Tab label="Did You Know?" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel tabValue={tabValue} index={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h3" fontWeight={700}>
              {movieData.Title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              gap: 3,
            }}
          >
            <Typography variant="body1" sx={{ display: "flex", gap: 1 }}>
              <CalendarTodayIcon />
              {new Date(movieData.Released).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", gap: 1 }}>
              <AccessTimeIcon />
              {movieData.Runtime}
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", gap: 1 }}>
              {" "}
              <DoNotDisturbIcon />
              {movieData.Rated}
            </Typography>
          </Box>

          <Box display="flex" flex="wrap" gap={1}>
            {movieData.Genre.split(", ").map((genre) => {
              return <Chip key={genre} label={genre} />;
            })}
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
              }}
            >
              Plot
            </Typography>
            <Typography variant="body1">{movieData.Plot}</Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
              }}
            >
              Director
            </Typography>
            <Typography variant="body1">{movieData.Director}</Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
              }}
            >
              Writer
            </Typography>
            <Typography variant="body1">{movieData.Writer}</Typography>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1,
              }}
            >
              Top Actor
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
              }}
            >
              {actors?.map((actor) => {
                return (
                  <Box
                    key={actor.name}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      alt={actor.name}
                      sx={{ width: 90, height: 90 }}
                      src={actor.poster}
                    />
                    <Typography variant="body1">{actor.name}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel tabValue={tabValue} index={1}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexDirection: "column",
          }}
        >
          {movieData.Ratings.map((rating) => {
            return (
              <Box key={rating}>
                <Typography component="legend" variant="h6">
                  {rating.Source}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                  }}
                >
                  <Typography variant="body1">{rating.Value}</Typography>
                  <Rating
                    name="read-only"
                    value={ratingToStar(rating.Value)}
                    readOnly
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </CustomTabPanel>
      <CustomTabPanel tabValue={tabValue} index={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h6"> Available on </Typography>
            <Typography variant="body1">{movieData.Language}</Typography>
          </Box>
          {movieData.Awards !== "N/A" && (
            <Box>
              <Typography variant="h6">Awards</Typography>
              <Typography variant="body1">{movieData.Awards}</Typography>
            </Box>
          )}
          <Box>
            <Typography variant="h6">Box Office</Typography>
            <Typography variant="body1">{movieData.BoxOffice}</Typography>
          </Box>
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
