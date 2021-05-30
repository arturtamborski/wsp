import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import ListAltIcon from '@material-ui/icons/ListAlt';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ForumIcon from '@material-ui/icons/Forum';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

import Ankiety from '../components/Ankiety';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  box: {
    width: '100%',
  }
});

const componentsMap = {
  0: <Ankiety />,
  1: <></>,
  2: <></>,
  3: <></>,
}

export default function Questionarie() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Box className={classes.box}>
      <Grid item xs={12}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction label="Ankiety" icon={<ListAltIcon />} />
          <BottomNavigationAction label="Konsent" icon={<AssignmentTurnedInIcon />} />
          <BottomNavigationAction label="Komunikacja" icon={<ForumIcon />} />
          <BottomNavigationAction label="Karty" icon={<ViewCarouselIcon />} />
        </BottomNavigation>
      </Grid>
      <Grid item xs={12} p={2}>
        <Box p={2} m={1}>
          {componentsMap[value]}
        </Box>
      </Grid>
    </Box>
  );
};