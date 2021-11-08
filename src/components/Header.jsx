import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = (props) => {
  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar position="static">
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Shop-
          <span style={{ fontWeight: "bold" }}>it</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
