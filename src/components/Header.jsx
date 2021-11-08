import { AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Searchbar from "./Searchbar";

const Header = (props) => {
  const [state, setState] = useState(false);
  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(state);
  };
  return (
    <AppBar elevation={0} color="transparent">
      <Toolbar position="static">
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Shop-
          <span style={{ fontWeight: "bold" }}>it</span>
        </Typography>
        <Searchbar toggleDrawer={toggleDrawer} state={state} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
