import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Box from "@mui/system/Box";
import { Link as RouterLink } from "react-router-dom";
import { productAdded } from "../features/shoppingCart/shoppingCartSlice";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
  const { product } = props;
  const shoppingCartDispatch = useDispatch();
  return (
    <Grid item xs={12} sm={12} md={4} lg={3} xxl={3}>
      <Card elevation={0}>
        <CardMedia
          component="img"
          height="240"
          image={product?.media[0]}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Box display="flex" alignItems="flex-end">
            <Rating
              name="text-feedback"
              value={product?.reviews?.length || 0}
              readOnly
              precision={0.5}
            />
            <Typography component="p" variant="subtitle2" sx={{ ml: 1 }}>
              {product?.reviews?.length || 0} reviews
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" sx={{ pt: 1 }}>
            <Typography
              variant="subtitle1"
              component="del"
              color="GrayText"
              sx={{ mr: 1 }}
            >
              {product.currency} {product.price}
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold" color="red">
              {product.currency} {product.current_price}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            disableElevation
            size="small"
            sx={{ mr: 1 }}
            onClick={() => shoppingCartDispatch(productAdded(product))}
          >
            Add to Cart
          </Button>
          <Button
            component={RouterLink}
            to={`/product/${product.id}`}
            variant="outlined"
            size="small"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
