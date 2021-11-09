import AliceCarousel from "react-alice-carousel";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { featuredProducts } from "../../__mock__/featured_products";

const renderDotsItem = ({ isActive }) => {
  return isActive ? (
    <CircleIcon role="button" fontSize="small" style={{ cursor: "pointer" }} />
  ) : (
    <CircleOutlinedIcon
      role="button"
      style={{ cursor: "pointer" }}
      fontSize="small"
    />
  );
};

const Carousel = (props) => {
  // eslint-disable-next-line
  const [items, setItems] = useState(featuredProducts);
  const renderedItems = items.map((item) => (
    <FeaturedItem key={item.title} {...item} />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={renderedItems}
      renderDotsItem={renderDotsItem}
      disableButtonsControls={true}
    />
  );
};

export default Carousel;

const FeaturedItem = (props) => {
  const { title, mediaSrc, current_price, review, rating, totalReviews, href } =
    props;
  return (
    <Grid
      container
      className="item"
      data-value={title.id}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md="auto" style={{ maxWidth: "400px" }}>
        <img src={mediaSrc} alt="new product" style={{ width: "100%" }} />
      </Grid>
      <Grid item xs={12} md="auto" style={{ flexGrow: 1 }}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h3" component="div">
              {title}
            </Typography>

            <Typography variant="body1" gutterBottom>
              {current_price}
            </Typography>
            <Divider style={{ maxWidth: "80ch" }} />
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ maxWidth: "80ch" }}
              sx={{ mt: 1 }}
              gutterBottom
            >
              {review}
            </Typography>
            <Box display="flex" alignItems="flex-end">
              <Rating
                name="text-feedback"
                value={rating}
                readOnly
                precision={0.5}
              />
              <Typography component="p" variant="subtitle2" sx={{ ml: 1 }}>
                {totalReviews} reviews
              </Typography>
            </Box>
          </CardContent>

          <CardActions>
            <Stack direction="row" gap={1}>
              <Button
                startIcon={<ShoppingCart />}
                variant="contained"
                disableElevation
              >
                Add to Cart
              </Button>
              <Button href={href} variant="outlined">
                Learn More
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
