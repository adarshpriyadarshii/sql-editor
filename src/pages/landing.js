import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";

function Landing() {
  const navigate = useNavigate();
  return (
    <Box sx={{ height: "31vh", margin: "10%" }}>
      <Typography variant="h2">hello! Welcome to the SQL editor.</Typography>
      <Typography variant="h5" textAlign='center'>
        The pre-loaded tables are Employees, Categories and Customers.
        Write SQL queries to see respective tables.
        Cheers 🥂.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/editor")}
        sx={{ margin: "1%" }}
        startIcon={<TerminalOutlinedIcon />}
      >
        Let's Go!
      </Button>
    </Box>
  );
}

export default Landing;
