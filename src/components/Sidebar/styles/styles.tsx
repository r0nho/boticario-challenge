import { createStyles } from '@material-ui/core/styles';

export const materialStyles = createStyles(() => ({
  menu: {
    '& .MuiDrawer-paper': {
      background: '#6f967e',
      overflowX: 'hidden',
    },

    '& .MuiListItem-root': {
      margin: '5px 0',
      boxSizing: 'content-box',
    },

    '& .MuiListItemText-root': {
      display: 'flex',
      padding: '5px 0',
      flexFlow: 'column',
    },

    '& .MuiListItemIcon-root': {
      minWidth: 46,
    },
  },
  logo: {
    maxWidth: 180,
    margin: '20px auto',
    padding: 20,
  },
  list: {
    width: 250,
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  profile: {
    color: 'white',

    '& .MuiTypography-body1': {
      fontFamily: 'MuseoModerno',
    },
  },
  logout: {
    color: 'rgba(0, 0, 0, 0.54)',
    display: 'flex',
    alignItems: 'center',
    fontSize: 13,
    justifyContent: 'left',
    padding: '0 15px 20px 75px',
    position: 'relative',
    marginTop: '-25px',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      color: 'white',
      transition: 'all 0.2s ease-in-out',
    },

    '& .MuiSvgIcon-root': {
      marginLeft: 5,
      fontSize: 15,
    },
  },
}));
