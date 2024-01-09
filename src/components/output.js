import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from "@mui/material";

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

import { usePapaParse } from "react-papaparse";
import { CSVLink } from "react-csv";

import { employeesData } from "../assets/employees";
import { categoriesData } from "../assets/categories";
import { customersData } from "../assets/customers";

function OutputTab({ dataSet }) {
  const { readString } = usePapaParse();
  const [parsedData, setParsedData] = useState([]);
  useEffect(() => {
    readString(
      dataSet == "employees"
        ? employeesData
        : dataSet == "categories"
        ? categoriesData
        : dataSet == "customers"
        ? customersData
        : "",
      {
        worker: true,
        header: true,
        complete: (results) => {
          //console.log(results);
          setParsedData(results.data);
        },
      }
    );
  }, [dataSet]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2%",
        }}
      >
        <Grid container justifyContent="space-between" direction="row">
          <Typography
            variant="h6"
            sx={{
              fontFamily: "cursive",
              fontWeight: 800,
              textAlign: "start",
            }}
          >
            Output
          </Typography>
          <Button
            variant="contained"
            size="small"
            startIcon={<SaveOutlinedIcon />}
            sx={{ margin: "0.5%", fontFamily: "cursive", fontWeight: 600 }}
          >
            <CSVLink
              data={parsedData}
              filename={`${dataSet}.csv`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Export as CSV
            </CSVLink>
          </Button>
        </Grid>
        <TableContainer
          sx={{
            border: 2,
            borderRadius: 3,
          }}
        >
          {parsedData.length > 0 ? (
            <Table>
              <TableHead sx={{ backgroundColor: "#D0A2F7" }}>
                <TableRow>
                  {parsedData.length > 0 &&
                    Object.keys(parsedData[0]).map((key) => (
                      <TableCell key={key}>{key}</TableCell>
                    ))}
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: "#F1EAFF" }}>
                {parsedData.map((row, index) => (
                  <TableRow key={index}>
                    {Object.values(row).map((value, idx) => (
                      <TableCell key={idx}>{value}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <Typography
              variant="h6"
              sx={{ backgroundColor: "#D0A2F7", fontFamily: "cursive" }}
            >
              No such dataset 😣
            </Typography>
          )}
        </TableContainer>
      </Box>
    </>
  );
}

export default OutputTab;
