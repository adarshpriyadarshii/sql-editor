import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate=useNavigate()
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
            sx={{ fontFamily: "cursive", fontWeight: 800, cursor:'pointer' }}
            onClick={()=>navigate('/editor')}
          >
            SQL Editor
          </Typography>
          <a
            href="https://github.com/adarshpriyadarshii/sql-editor"
            target="_blank"
            rel="noopener noreferrer"
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
