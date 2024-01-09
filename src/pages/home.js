import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import InputTab from "../components/form/input";
import OutputTab from "../components/output";
import Landing from "./landing";

function Home() {
  const [data, setData] = useState("customers");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Landing />
            </DefaultLayout>
          }
        />
        <Route
          path="/editor"
          element={
            <DefaultLayout>
              <InputTab setData={setData} />
              <OutputTab dataSet={data} />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Home;
