import { Divider, Grid } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import HomeRoute from "./routes/Home.route";
import Footer from "./components/Footer/Footer";
import NotFoundRoute from "./routes/NotFound.route";
import SearchRoute from "./routes/Search.route.";
import ProductRoute from "./routes/Product.route";

function App() {
  return (
    <Grid>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeRoute />} />
        <Route exact path="/product/:id" element={<ProductRoute />} />
        <Route path="/search" element={<SearchRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
      <Divider />
      <Footer />
    </Grid>
  );
}

export default App;
