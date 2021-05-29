import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Nav from '../components/Nav';

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
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            xs
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Box p={2}>
            <NotificationsIcon />
          </Box>
        </Grid>
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