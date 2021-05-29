import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  jssPreset,
  StylesProvider,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';
import { create } from 'jss';

import Routes from './routes';
import themeObject from './theme';
import globalVar from './globalVar';

import './App.css';

const jss = create({ plugins: [...jssPreset().plugins] });
const theme = createMuiTheme(themeObject);

const useStyles = makeStyles({
  root: {
    padding: 16,
    minWidth: 191,
  },
});


export default function App() {
  const classes = useStyles();
  let resp = '';

  const getUser = () => {
    fetch(globalVar.apiUrl + "/users?id=1", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        resp = response;
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Grid container className={classes.root}>
            <Grid container>
              <Routes />
            </Grid>
            <Button onClick={getUser}>
              Log in :)
              {resp}
            </Button>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}
