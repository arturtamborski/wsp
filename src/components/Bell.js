import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Bell() {
  return (
    <Grid item xs={3}>
      <Box p={2}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </Box>
    </Grid>
  );
}