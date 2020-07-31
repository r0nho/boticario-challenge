import { createStyles, Theme } from '@material-ui/core/styles';

export const materialStyles = createStyles((theme: Theme) => {
  return {
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

        [theme.breakpoints.down('xs')]: {
          textAlign: 'center',
        },
      },

      '& .MuiListItemIcon-root': {
        minWidth: 46,

        [theme.breakpoints.down('xs')]: {
          display: 'none',
        },
      },
    },
    logo: {
      maxWidth: 180,
      margin: '20px auto',
      padding: 20,

      [theme.breakpoints.down('sm')]: {
        maxWidth: 'none',
        maxHeight: 30,
        margin: '20px auto',
        padding: 0,
      },
    },
    list: {
      width: 250,
      color: 'white',

      [theme.breakpoints.down('sm')]: {
        width: '90%',
        margin: '0 auto',
      },

      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin: '0 auto',
      },

      '& .MuiList-root': {
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          justifyContent: 'center',
        },
      },

      '& .MuiListItem-root': {
        [theme.breakpoints.down('sm')]: {
          padding: 0,
          maxWidth: 190,
          margin: '0 30px',
        },

        [theme.breakpoints.down('xs')]: {
          margin: '0 15px',

          '& .MuiTypography-body1': {
            fontSize: 15,
          },
        },
      },
    },
    icon: {
      color: 'white',
    },
    profile: {
      color: 'white',

      '& .MuiTypography-body1': {
        fontFamily: 'Ubuntu',
      },

      [theme.breakpoints.down('sm')]: {
        display: 'none',
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
  };
});
