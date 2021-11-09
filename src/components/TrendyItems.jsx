import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { products as dummyProduct } from "../__mock__/products";
import ProductCard from "./ProductCard";

const TrendyItems = (props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(dummyProduct);
  return (
    <Grid
      sx={{ p: 1, mt: 2, mb: 2 }}
      style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Typography variant="h3" textAlign="center">
        Trendy Items
      </Typography>
      <Grid container>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Grid>
  );
};

export default TrendyItems;
