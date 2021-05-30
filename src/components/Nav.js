import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SvgIcon from '@material-ui/core/SvgIcon';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Grid item xs={12}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Słownik" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profil" icon={<PersonIcon />} />
      </BottomNavigation>
    </Grid>
  );
};