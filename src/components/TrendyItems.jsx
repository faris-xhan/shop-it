import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { products as dummyProduct } from "../__mock__/products";
import ProductCard from "./ProductCard";

const TrendyItems = (props) => {
  const [products, setProducts] = useState(dummyProduct);
  return (
    <Grid sx={{ p: 1 }}>
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
