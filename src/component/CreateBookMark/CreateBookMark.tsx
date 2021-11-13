import {
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { Alert, Autocomplete } from "@mui/material";
import { FormikValues, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { InitialValuesType } from "../../utils/types";
import { createBookMarkSchema } from "../../utils/yup";
// import { createBookMarkSchema } from "../../utils/yup";

const styles = makeStyles((theme: Theme) => ({
  root: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left, right",
    height: "100%",
    backgroundAttachment: "fixed, fixed",
    backgroundPositionY: "bottom",
    [theme.breakpoints.down("sm")]: {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left, right",
      height: "100%",
      backgroundAttachment: "fixed, fixed",
      backgroundPositionY: "bottom",
      backgroundSize: "cover",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    width: 400,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  textFieldStyle: {
    backgroundColor: theme.palette.common.white,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(1),
    position: "relative",
  },
  progressButtonContainer: {
    color: theme.palette.primary.main,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));




interface Props {
  initialValues: InitialValuesType;
  loading: boolean;
  error: boolean;
  handleCreateBookMark: (
    resourceId: string,
    abstract: string,
    path: string
  ) => void;
  isNew: boolean;
}
const CreateBookMark = ({
  handleCreateBookMark,
  loading,
  isNew,
  initialValues,
  error,
}: Props) => {
  const classes = styles();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      enableReinitialize: true,
      validationSchema: createBookMarkSchema,
      onSubmit: (val) => {
        handleCreateBookMark(val.resourceId, val.abstract, val.path);
      },
    });
  return (
    <div className={classes.root} id="div-bg-img">
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.content}>
          <div className={`${classes.formGroup} ${classes.textFieldStyle}`}>
            <TextField
              type="text"
              id="resourceId"
              error={!!(errors.resourceId && touched.resourceId)}
              name="resourceId"
              label={
                errors.resourceId && touched.resourceId
                  ? "Error"
                  : "resource Id"
              }
              helperText={
                errors.resourceId && touched.resourceId ? errors.resourceId : ""
              }
              placeholder="Escribe su email"
              value={values.resourceId}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className={`${classes.formGroup} ${classes.textFieldStyle}`}>
            <TextField
              type="abstract"
              id="abstract"
              error={!!(errors.abstract && touched.abstract)}
              label={errors.abstract && touched.abstract ? "Error" : "Abstract"}
              helperText={
                errors.abstract && touched.abstract ? errors.abstract : ""
              }
              name="abstract"
              value={values.abstract}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Escribe su contraseña"
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className={`${classes.formGroup} ${classes.textFieldStyle}`}>
            <TextField
              type="path"
              id="path"
              error={!!(errors.path && touched.path)}
              label={errors.path && touched.path ? "Error" : "path"}
              helperText={errors.path && touched.path ? errors.path : ""}
              name="path"
              value={values.path}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Escribe su contraseña"
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className={`${classes.formGroup} ${classes.textFieldStyle}`}>
            <div className={classes.wrapper}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {isNew ? "Edit" : "Create"}
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  className={classes.progressButtonContainer}
                />
              )}
            </div>
          </div>
          <div className={`${classes.formGroup} ${classes.textFieldStyle}`}>
            {error && (
              <Alert severity="error">
                Error the code is wrong or already exist
              </Alert>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBookMark;
