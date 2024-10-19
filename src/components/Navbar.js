import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

export default function Navbar({
  watchList,
  handleWatchListClick,
  scrollToDevelopers,
}) {
  return (
    <Box
      sx={{
        flexGrow: 1,

        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontStyle: "italic",
              color: "secondary.main",
            }}
          >
            MovieMosaic
          </Typography>

          <Stack direction="row" alignItems="center" spacing={2}>
            <div>
              <IconButton onClick={handleWatchListClick}>
                <Badge badgeContent={watchList.length} color="primary">
                  <FavoriteIcon sx={{ color: "white" }} />
                </Badge>
              </IconButton>
            </div>

            <Button
              onClick={scrollToDevelopers}
              variant="outlined"
              color="primary"
              sx={{
                backgroundColor: "transparent",
                border: "1px solid white",
                color: "white",
              }}
            >
              Developers
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
