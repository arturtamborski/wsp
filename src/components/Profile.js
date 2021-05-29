import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.root}>
      <Box p={1}>
        <Avatar alt="Avatar" src="/static/images/avatar/1.jpg" />
      </Box>
    </Grid>
  );
}