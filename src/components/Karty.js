import { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '41.5vh',
    padding: '1rem',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    fontSize: '150%',
  },
}));

export default function Konsent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Samodzielnie</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Wspólnie</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}