import { createStyles, Theme } from '@material-ui/core/styles';

export const materialStyles = createStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  cashBack: {
    fontWeight: 500,
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,

    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center',
      marginTop: 20,
    },

    '& .MuiChip-root': {
      color: 'white',
      fontSize: 19,
      padding: 10,
      marginLeft: 10,
      fontWeight: 400,

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: '10px 0 ',
        padding: 20,
      },
    },
  },

  title: {
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
    color: theme.palette.primary.main,

    '& .MuiSvgIcon-root': {
      marginRight: 10,
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },

  loading: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 100,
  },

  loadingCashback: {
    color: 'white',
    padding: 15,
    top: 2,
    position: 'relative',
  },

  table: {
    '& .MuiTableCell-body': {
      textTransform: 'capitalize',
    },
  },
}));
