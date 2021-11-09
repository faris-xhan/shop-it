import { Divider, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import React from "react";
import Categories from "./components/Categories/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import TrendyItems from "./components/TrendyItems";

function App() {
  return (
    <Grid>
      <Header />
      <FeaturedProducts />
      <Divider />
      <Categories />
      <TrendyItems />
    </Grid>
  );
}

export default App;
