import { createStyles, Theme } from '@material-ui/core/styles';

export const materialStyles = createStyles((theme: Theme) => ({
  container: {
    borderRadius: 15,
    boxShadow: 'rgba(0, 0, 0, 0.4) 1px 0px 20px -14px',
    width: 'calc(85% - 200px)',
    position: 'relative',
    left: 140,
    margin: '0 auto',
    padding: 40,
    minHeight: 300,
    marginTop: 80,

    [theme.breakpoints.down('sm')]: {
      top: 75,
      left: 0,
      padding: '30px 20px',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: 'none',
    },

    [theme.breakpoints.down('xs')]: {
      left: 0,
      padding: '30px 20px',
      width: '100%',
      boxSizing: 'border-box',
    },

    '& .MuiTableRow-root': {
      fontFamily: 'Roboto',
      fontSize: 17,
    },

    '& .MuiPaper-elevation2': {
      boxShadow: 'none !important',
    },

    '& .MuiTablePagination-toolbar': {
      marginTop: 10,
    },

    '& .MuiTableCell-stickyHeader': {
      background: theme.palette.secondary.main,
      color: 'white',
      fontFamily: 'Ubuntu',
    },
  },
}));
