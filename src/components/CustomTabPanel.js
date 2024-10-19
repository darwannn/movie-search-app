import { Box } from "@mui/material";

import React from "react";

export default function CustomTabPanel({
  children,
  tabValue,
  index,
  ...other
}) {
  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {tabValue === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
