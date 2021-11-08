import { Grid } from "@mui/material";
import Header from "./components/Header/Header";
import React from "react";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <Grid>
      <Header />
      <Categories />
    </Grid>
  );
}

export default App;
