import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    background: theme.palette.grey[900],
  },
}));

function App() {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
}

export default App;
