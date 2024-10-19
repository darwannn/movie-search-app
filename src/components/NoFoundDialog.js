import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
} from "@mui/material";

export default function NoFoundDialog({ open, handleClose }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle color="text.main">Movie not found</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Unfortunately, we couldn't locate the movie you requested. Please
            make sure to provide details like- Movie Title, Year and Plot for us
            be able to assist you further!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
