import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/css/style.css";

const primaryMainColor = "#15141F";
const primarySecondaryColor = "#211F30";
const secondaryMainColor = "#DB5742";
const textMainColor = "#6B6A6A";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMainColor,
      secondary: primarySecondaryColor,
    },
    secondary: {
      main: secondaryMainColor,
    },
    text: {
      main: textMainColor,
    },
    background: {
      default: "#15141F",
    },
  },
  typography: {
    fontSize: 15,
    button: {
      textTransform: "none",
    },
    h1: { color: "white" },
    h2: { color: "white" },
    h3: { color: "white" },
    h4: { color: "white" },
    h5: { color: "white" },
    h6: { color: "white" },
    body1: { color: "#BCBCBC" },
    body2: { color: "#BCBCBC" },
  },
  shape: {
    borderRadius: 5,
    borderColor: "white",
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: 5,
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
        "&.Mui-focused": {
          color: "white",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          gap: 3,
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "30px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          backgroundColor: secondaryMainColor,
          color: "white",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "white",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryMainColor,
          color: "white",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },

    MuiRating: {
      styleOverrides: {
        iconEmpty: {
          color: "white",
        },
      },
    },

    //overide badge color
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: secondaryMainColor,
          color: "white",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
