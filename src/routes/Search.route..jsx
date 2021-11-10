import { Grid, Stack, TextField } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { products } from "../__mock__/products";

const SearchRoute = (props) => {
  return (
    <Grid container justifyContent="center" alignItems="center" p={1}>
      <Grid item xs={12} sx={{ display: "flex" }} justifyContent="center">
        <TextField
          placeholder="Search..."
          fullWidth
          style={{ maxWidth: "900px" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Stack>
          <ProductCard product={products[0]} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SearchRoute;
