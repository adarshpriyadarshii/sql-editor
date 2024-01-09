import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

import { errorHandler, successHandler } from "../../utils/toaster";

import Editor from "./editor";
import SavedTab from "./savedTab";

function InputTab({ setData }) {
  const [sqlCode, setSqlCode] = useState("select * from customers;");

  const [saved, setSaved] = useState([
    "select * from employees;",
    "select * from categories;",
    "select * from customers;",
  ]);

  const dataSets = ["employees", "categories", "customers"];

  const handleRun = () => {
    let name = dataSets.filter((dataSet) => {
      if (sqlCode.toLowerCase().includes(dataSet.toLowerCase())) {
        return dataSet;
      }
    });

    setData(name);
    if (name.length === 0) {
      errorHandler("No such dataset exists 😣.");
    } else {
      successHandler("Dataset found successfully! 🎉");
    }
  };

  const handleSave = () => {
    successHandler("Saved successfully! 🎉");
    setSaved([...saved, sqlCode]);
  };

  const handleDelete = (id) => {
    setSaved((queries) => {
      return queries.filter((item, idx) => {
        return idx !== id;
      });
    });
    successHandler("Query Deleted !");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2%",
        flexGrow: 1,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        direction="row"
        spacing={1}
      >
        <Grid item xs={8}>
          <Editor
            setSqlCode={setSqlCode}
            sqlCode={sqlCode}
            handleRun={handleRun}
            handleSave={handleSave}
          />
        </Grid>
        <Grid item xs={4}>
          <SavedTab
            handleDelete={handleDelete}
            setSqlCode={setSqlCode}
            saved={saved}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default InputTab;
