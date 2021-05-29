import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Nav from '../components/Nav';
import Bell from '../components/Bell';
import Profile from '../components/Profile';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between', 
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid container className={classes.root} spacing={3}>
        <Profile />
        <Bell />
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Nav />
        </Grid>
      </Grid>
    </Container>
  );
};