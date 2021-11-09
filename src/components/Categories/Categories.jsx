import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const categories = [
  {
    url: "/images/categories/laptopbag.jpg",
    title: "Laptop Bags",
    width: "100%",
  },
  {
    url: "/images/categories/handbag.jpg",
    title: "Handbags",
    width: "100%",
  },
  {
    url: "/images/categories/footwear.jpg",
    title: "Footwear",
    width: "100%",
  },
  {
    url: "/images/categories/backpack.jpg",
    title: "Backpacks",
    width: "100%",
  },
  {
    url: "/images/categories/wallet.jpg",
    title: "Wallets",
    width: "100%",
  },
  {
    url: "/images/categories/jewellery.jpg",
    title: "Jewellaries",
    width: "100%",
  },
  {
    url: "/images/categories/shoulder-straps.jpg",
    title: "Shoulder Straps",
    width: "100%",
  },
  {
    url: "/images/categories/glasses.jpg",
    title: "Glasses",
    width: "100%",
  },
  {
    url: "/images/categories/gloves.jpg",
    title: "Gloves",
    width: "100%",
  },
];

const CategoryButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 250,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      backgroundColor: "#0008",
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 50%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {categories.map((category) => (
        <Grid key={category.title} item xs={12} sm={12} md={6} lg={4}>
          <CategoryButton
            focusRipple
            style={{
              width: category.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${category.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {category.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </CategoryButton>
        </Grid>
      ))}
    </Box>
  );
}
