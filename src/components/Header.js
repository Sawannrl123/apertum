import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { useApp } from "../hooks";
import { setCookie } from "../helpers/utils";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    color: "#04ba5f",
    padding: "10px 0"
  },
  link: {
    fontSize: 0
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    fontWeight: 600
  }
}));

const Header = () => {
  const classes = useStyles();
  const { isLoggedIn, setIsLoggegIn, setToken } = useApp();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Link
          color="inherit"
          href="https://apertumo.com/"
          className={classes.link}
        >
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Apertum Online"
            height="60"
          />
        </Link>
        {isLoggedIn && (
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => {
              setIsLoggegIn(false);
              setToken(null);
              setCookie("token", null, -10);
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
