import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Nav from '../components/Nav';
import Bell from '../components/Bell';
import Profile from '../components/Profile';
import Questionarie from '../components/Questionnaire';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between', 
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexFlow: 'column',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    height: '98vh',
    width: '98vw',
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid container spacing={3} className={classes.root}>
        <Profile />
        <Bell />
      </Grid>

      <Grid container spacing={3} style={{flexGrow: 100}}>
        <Questionarie />
      </Grid>

      <Grid container spacing={3} style={{flexGrow: 1}}>
        <Nav />
      </Grid>
    </Container>
  );
};