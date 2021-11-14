import {
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";
import { Alert } from "@mui/material";
import { useFormik } from "formik";

const styles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left, right",
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
  progressButtonContainer: {
    color: theme.palette.primary.main,
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1),
    position: "relative",
  },
}));

interface Props {
  handleLogin: (email: string, password: string) => void;
  loading: boolean;
  error?: string;
}

export default function Login({ handleLogin, loading, error = "" }: Props) {
  const classes = styles();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (val) => {
        handleLogin(val.email, val.password);
      },
    });

  return (
    <div className={classes.root} id="div-bg-img">
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.content}>
          <div className={`${classes.formGroup} ${classes.textFieldStyle}`}>
            <TextField
              type="text"
              id="email"
              error={!!(errors.email && touched.email)}
              name="email"
              label={errors.email && touched.email ? "Error" : "Email"}
              helperText={errors.email && touched.email ? errors.email : ""}
              placeholder="Escribe su email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className={`${classes.formGroup} ${classes.textFieldStyle}`}>
            <TextField
              type="text"
              id="password"
              error={!!(errors.password && touched.password)}
              label={
                errors.password && touched.password ? "Error" : "Contraseña"
              }
              helperText={
                errors.password && touched.password ? errors.password : ""
              }
              name="password"
              value={values.password}
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
                Entrar
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
            {error && <Alert severity="error">{error}</Alert>}
          </div>
        </form>
      </div>
    </div>
  );
}
