import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import Nav from '../components/Nav';
import Bell from '../components/Bell';
import Profile from '../components/Profile';
import Questionarie from '../components/Questionnaire';
import Slownik from '../components/Slownik';
import SearchIcon from '@material-ui/icons/Search';

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


export default function Dictionary() {
  const classes = useStyles();

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid container spacing={3} className={classes.root}>
        <Bell />
        <Profile />
      </Grid>

      <Grid container spacing={3}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{flexGrow: 100}}>
        <Slownik />
      </Grid>

      <Grid container spacing={3} style={{flexGrow: 1}}>
        <Nav />
      </Grid>
    </Container>
  );
};