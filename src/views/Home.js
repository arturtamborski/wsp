import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Nav from '../components/Nav';
import Bell from '../components/Bell';
import Profile from '../components/Profile';
import Questionarie from '../components/Questionnaire';

import logo from '../assets/logo.svg';
import bg from '../assets/BG.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'flex-end',
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
    backgroundImage: `url(${bg})`,
  }
}));


export default function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid container spacing={3} className={classes.root}>
        <Bell />
        <Profile />
      </Grid>

      <Grid container spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <img src={logo}></img>
          </Grid>
          <Grid item xs={9} style={{paddingBottom: '3rem', paddingTop: '0'}}>
            <h1>Cześć!</h1>
            <h4>O czym chcesz dzisiaj porozmawiać?</h4>
          </Grid>
        </Grid>
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