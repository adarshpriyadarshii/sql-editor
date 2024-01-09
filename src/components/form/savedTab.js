import { Box, Grid, Typography, IconButton, Divider } from "@mui/material";
import React from "react";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function SavedTab({ saved, handleDelete, setSqlCode }) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      border={2}
      borderRadius={5}
      sx={{
        backgroundColor: "#F1EAFF",
        height: "63vh",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "cursive",
          fontWeight: 800,
          textAlign: "start",
          padding: "1%",
        }}
      >
        Saved Queries
      </Typography>
      <Divider sx={{color:'green'}}/>
      {saved.map((qry, idx) => (
        <Box key={idx} border={1} borderRadius={1} margin="0.5%">
          <Grid container direction="row" alignItems="center" spacing={2}>
            <Grid item xs={9}>
              <Typography
                onClick={() => setSqlCode(qry)}
                sx={{
                  cursor: "pointer",
                  fontFamily:
                    'Menlo, Monaco, Consolas, "Courier New", monospace',
                  textAlign: "start",
                  paddingLeft: "15%",
                }}
              >
                {qry}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <IconButton onClick={() => handleDelete(idx)}>
                <DeleteRoundedIcon sx={{ color: "black" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default SavedTab;
