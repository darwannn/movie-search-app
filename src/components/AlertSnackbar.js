import { Snackbar, Alert } from "@mui/material";
function AlertSnackbar({
  isSnackbarShowed,
  handleSnackbarClose,
  message,
  type = "success",
}) {
  return (
    <Snackbar
      open={isSnackbarShowed}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default AlertSnackbar;
