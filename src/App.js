import { Divider, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import React from "react";
import HomeRoute from "./routes/Home.route";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Grid>
      <Header />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
      <Divider />
      <Footer />
    </Grid>
  );
}

export default App;
