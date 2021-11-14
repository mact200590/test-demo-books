import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import CardBooksMark from "./CardBooksMark";
import LoadingWrapper from "./layout/LoadingWrapper";

const styles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 500,
    position: "relative",
  },
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
    marginBottom: theme.spacing(20),
  },
  title: {
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
}));

interface Props {
  allBookMarks: Definitions.BookMarks[];
  loading?: boolean;
  handleDelete: (id: string) => void;
  handleOnEdit: (id: string) => void;
  loadingDelete?: boolean;
}

const Home = ({
  allBookMarks,
  loading,
  handleDelete,
  handleOnEdit,
  loadingDelete,
}: Props) => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}> List of all Books Marks</h1>
      {allBookMarks.length === 0 && !loading && !loadingDelete && (
        <div className={classes.center}>
          <h2>Add some Book Mark</h2>
        </div>
      )}
      <LoadingWrapper loading={loading}>
        <div className={classes.container}>
          {allBookMarks.map((card: Definitions.BookMarks) => {
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
          })}
        </div>
      </LoadingWrapper>
    </div>
  );
};

export default Home;
