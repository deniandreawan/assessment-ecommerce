import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    lineHeight: 1.5,
  },
}));

export default function Header({ title, subtitle }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{subtitle}</Typography>
    </div>
  );
}
