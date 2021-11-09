import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Button,
  Grid,
  Typography,
  FormHelperText,
  FormControl,
  IconButton,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import SubscribeInput from "./SubscribeInput";
import { styled } from "@mui/material/styles";

const SocialLinks = styled(Box)(({ theme }) => ({
  "& .fb-icon:hover": {
    color: theme.palette.primary.main,
  },
  "& .twitter-icon:hover": {
    color: theme.palette.primary.main,
  },
  "& .instagram-icon:hover": {
    color: "crimson",
  },

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

const BottomLinks = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1),
  "& .bottom--link ": {
    textDecoration: "none",
    color: theme.palette.grey[700],
    fontWeight: theme.typography.fontWeightMedium,
  },
  "& .bottom--link:hover": {
    color: "inherit",
  },
}));

const Footer = (props) => {
  return (
    <Grid
      container
      component="footer"
      alignItems="center"
      style={{ padding: "5rem 1rem 0rem 1rem", flexWrap: "wrap" }}
    >
      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h2" href="/">
          Shop-it
        </Typography>
        <div>
          <SocialLinks sx={{ pb: "2px" }}>
            <IconButton className="fb-icon">
              <Facebook />
            </IconButton>
            <IconButton className="instagram-icon">
              <Instagram />
            </IconButton>
            <IconButton className="twitter-icon">
              <Twitter />
            </IconButton>
          </SocialLinks>
          <Box component="form" display="flex" alignItems="flex-start">
            <FormControl>
              <SubscribeInput />
              <FormHelperText>Get the freshest news from us</FormHelperText>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="error"
              disableElevation
            >
              Subscribe
            </Button>
          </Box>
        </div>
      </Grid>
      <Box
        display="flex"
        justifyContent="space-around"
        p={1}
        alignItems="center"
        width="100%"
      >
        <Typography variant="subtitle2">
          Shopit &copy; {new Date().getFullYear()}
        </Typography>
        <BottomLinks
          divider={<Divider orientation="vertical" flexItem />}
          direction="row"
          spacing={1}
        >
          <Link href="/contact" className="bottom--link">
            Contact Us
          </Link>
          <Link href="/privacy" className="bottom--link">
            {" "}
            Privacy{" "}
          </Link>
          <Link href="/policy" className="bottom--link">
            Policy
          </Link>
          <Link href="/return" className="bottom--link">
            Return &amp; Refund Policy
          </Link>
        </BottomLinks>
      </Box>
    </Grid>
  );
};

export default Footer;
