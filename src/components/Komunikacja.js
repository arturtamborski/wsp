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
    height: '31.5vh',
    padding: '1rem',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    fontSize: '120%',
  },
}));

export default function Komunikacja() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Jak rozmawiać?</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}