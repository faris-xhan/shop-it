import { Grid } from "@mui/material";
import Header from "./components/Header/Header";
import React from "react";
import Categories from "./components/Categories/Categories";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <Grid>
      <Header />
      <FeaturedProducts />
      <Categories />
    </Grid>
  );
}

export default App;
