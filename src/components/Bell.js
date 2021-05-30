import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: 'red',
    color: 'red',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

export default function Bell() {
  return (
    <Grid item xs={1} style={{paddingRight: '35px', width: '20px'}}>
      <Box p={3} style={{paddingRight: 0}}>
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <NotificationsIcon fontSize="default"/>
        </StyledBadge>
      </Box>
    </Grid>
  );
}