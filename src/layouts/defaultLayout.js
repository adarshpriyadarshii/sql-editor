import React from "react";
import NavBar from "../components/common/navbar";
import Footer from "../components/common/footer";

function DefaultLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
