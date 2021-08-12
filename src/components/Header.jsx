import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  AppBar,
  IconButton,
  Hidden,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { useDrawer } from "../contexts/drawerContextProvider";
import Menu from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    account: {
      position: "relative",
      top: 0,
      right: 0,
    },
  })
);
export const Header = (props) => {
  // theme manenos
  const theme = useTheme();
  const classes = useStyles(theme);
  const { setDrawerOpen } = useDrawer();

  return (
    <div>
      <AppBar position={"sticky"}>
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp={true}>
            <IconButton
              color={"inherit"}
              onClick={() => {
                setDrawerOpen(true);
              }}
              edge={"start"}
              style={{ marginRight: theme.spacing(3) }}
            >
              <Menu />
            </IconButton>
          </Hidden>
          <Typography variant={"h6"} color={"inherit"}>
            {props.title}
          </Typography>
          <AccountCircleIcon className={classes.account}></AccountCircleIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
};
