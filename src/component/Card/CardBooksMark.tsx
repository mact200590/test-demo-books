import React, { useCallback, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CircularProgress, makeStyles, Theme } from "@material-ui/core";
import { titleConvert } from "../../utils/utils";
import { CardBookMarksType } from "../../utils/types";



const styles = makeStyles((theme: Theme) => ({
  progressButtonContainer: {
    color: theme.palette.primary.main,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -15,
    marginLeft: -15,
  },
  img: {
    height: theme.spacing(20),
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(1),
    position: "relative",
  },
  descriptions: {
    overflowWrap: "break-word",
  },
}));

interface Props {
  infoBookMark: CardBookMarksType;
  loading: boolean;
  handleDelete: (id: string) => void;
  handleOnEdit: (id: string) => void;
}

const CardBooksMark = ({
  infoBookMark,
  handleDelete,
  handleOnEdit,
  loading,
}: Props) => {
  const [idRemove, setIdRemove] = useState("");
  const classes = styles();
  const handleOnClick = useCallback(() => {
    setIdRemove(infoBookMark.id);
    handleDelete(infoBookMark.id || "");
  }, [handleDelete, infoBookMark.id]);

  const handleOnEditClick = useCallback(() => {
    handleOnEdit(infoBookMark.id || "");
  }, [handleOnEdit, infoBookMark.id]);

  return (
    <Card sx={{ minWidth: 250 }}>
      <CardMedia
        className={classes.img}
        component="img"
        alt="cover books"
        image={infoBookMark.resource.cover}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titleConvert(infoBookMark.resource.title)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className={classes.descriptions}
        >
          {infoBookMark.abstract}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {titleConvert(infoBookMark.path)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" variant="outlined" onClick={handleOnEditClick}>
          Edit
        </Button>
        <div className={classes.wrapper}>
          <Button
            size="medium"
            color="error"
            variant="outlined"
            onClick={handleOnClick}
          >
            Delete
          </Button>
          {loading && idRemove === infoBookMark.id && (
            <CircularProgress
              size={25}
              className={classes.progressButtonContainer}
            />
          )}
        </div>
      </CardActions>
    </Card>
  );
};

export default CardBooksMark;
