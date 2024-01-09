import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "black", top: "auto", bottom: 0 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/adarshpriyadarshi/"
              style={{ color: "inherit" }}
            >
              Adarsh Priyadarshi
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer;
