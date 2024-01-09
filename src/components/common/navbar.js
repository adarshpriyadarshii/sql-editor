import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black", height: "2%" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ fontFamily: "cursive", fontWeight: 800 }}
          >
            SQL Editor
          </Typography>
          <a
            href="https://mail.google.com/mail/u/2/#inbox"
            style={{ color: "inherit" }}
          >
            <Button
              color="inherit"
              startIcon={<GitHubIcon />}
              sx={{ fontFamily: "cursive", fontWeight: 60 }}
            >
              GitHub
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
