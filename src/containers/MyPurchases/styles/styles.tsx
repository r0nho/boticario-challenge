import { createStyles, Theme } from '@material-ui/core/styles';

export const materialStyles = createStyles((theme: Theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  cashBack: {
    fontWeight: 500,
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    fontSize: 18,

    '& .MuiChip-root': {
      color: 'white',
      fontSize: 19,
      padding: 10,
      marginLeft: 10,
      fontWeight: 400,
    },
  },
  title: {
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'MuseoModerno',
    color: theme.palette.primary.main,

    '& .MuiSvgIcon-root': {
      marginRight: 10,
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
}));
