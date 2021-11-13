import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { CardBookMarksType } from "../../utils/types";
import CardBooksMark from "./CardBooksMark";

const styles = makeStyles((theme: Theme) => ({
  container: {
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    paddingTop: theme.spacing(4),
  },
  card: {
    margin: theme.spacing(2),
    height: 200,
    marginBottom:theme.spacing(20)
  },
  title: {
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
}));

interface Props {
  allBookMarks: CardBookMarksType[];
  handleDelete: (id: string) => void;
  handleOnEdit: (id: string) => void;
  loadingDelete: boolean;
}

const ListCardContainer = ({
  allBookMarks,
  handleDelete,
  handleOnEdit,
  loadingDelete,
}: Props) => {
  const classes = styles();
  return (
    <div >
      <h1 className={classes.title}> List of all Books Marks</h1>
      {allBookMarks.length === 0 && (
          <div className={classes.center}>
            <h2 >Add some Book Mark</h2>
          </div>)}
      <div className={classes.container}>
        {
          allBookMarks.map((card: CardBookMarksType) => {
            return (
              <div key={card.id} className={classes.card}>
                <CardBooksMark
                  infoBookMark={card}
                  handleDelete={handleDelete}
                  loading={loadingDelete}
                  handleOnEdit={handleOnEdit}
                />
              </div>
            );
          })
      }
      </div>
    </div>
  );
};

export default ListCardContainer;
