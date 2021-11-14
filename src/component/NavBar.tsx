import React, { useCallback } from "react";
import { Button, makeStyles, Theme, useMediaQuery } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";
import RoutesName from "../navigation/routesUtils";
import { clearAllStorageData } from "../utils/asyncStorage";
import Profile from "../assets/profile.png";
import { queryCLient } from "../modules/cache/queryCLient";
import { CACHE_KEYS } from "../modules/cache/cacheKeys";
import theme from "../styles/theme";

const styles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: "#353a40",
    justifyContent: ({ hide }: { hide?: boolean }) =>
      hide ? "flex-end" : "space-between",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(2),
    alignItems: "center",
  },
  button: {
    border: "1px solid red",
    color: "white",
  },
  create: {
    border: "1px solid white",
    color: "red",
    marginRight: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
}));

interface Props {
  img: string;
}

const Navbar = ({ img }: Props) => {
  const { replace, push } = useHistory();
  const hide = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = styles({ hide });
  const handleClick = useCallback(() => {
    clearAllStorageData();
    replace(RoutesName["/login"]);
  }, [replace]);

  const handleCreateBookMark = useCallback(() => {
    queryCLient.setQueryData([CACHE_KEYS.BooksMarks.IS_NEW], "true");
    push(`${RoutesName["/book-mark/new"]}`);
  }, [push]);

  return (
    <nav className={classes.container}>
      {!hide && (
        <div className={classes.imgContainer}>
          <Link to="/home">
            <img src={img || Profile} alt="Profile" className={classes.img} />
          </Link>
        </div>
      )}

      <div className={classes.buttonContainer}>
        <ul>
          <Button className={classes.create} onClick={handleCreateBookMark}>
            Create
          </Button>
          <Button className={classes.button} onClick={handleClick}>
            Logout
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
