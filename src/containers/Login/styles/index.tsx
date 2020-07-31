import { createStyles, Theme } from '@material-ui/core/styles';

export const materialStyles = createStyles((theme: Theme) => ({
  root: {
    maxWidth: 300,
    width: '100%',
    minHeight: 350,

    borderRadius: 10,
    padding: 30,
    position: 'relative',

    fontSize: 18,
    textAlign: 'center',
    color: '#007e78',

    '& h2': {
      fontWeight: 300,
      fontSize: 23,
    },

    [theme.breakpoints.down('sm')]: {
      width: '70%',
      left: 0,

      '& h2': {
        fontWeight: 300,
        fontSize: 20,
      },
    },
  },

  inputs: {
    margin: '15px 0',
    width: '100%',

    '& label': {
      fontSize: 14,
    },

    '& .MuiFormHelperText-contained': {
      margin: '5px 0 0 5px',
    },

    '& .MuiInputBase-input': {
      fontSize: 13,
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#007e78',
      },

      '&:hover': {
        '& fieldset': {
          borderColor: '#6f967e',
        },
      },
    },
  },

  button: {
    borderRadius: 15,
    width: 180,
    fontSize: 13,
    padding: 10,
  },

  link: {
    display: 'block',
    color: '#007e78',
    fontSize: 16,
    cursor: 'pointer',
    margin: '5px 0 20px',
    textDecoration: 'none',
    transition: 'all 0.2 ease-in-out',

    '&:hover': {
      textDecoration: 'underline',
      transition: 'all 0.2 ease-in-out',
    },
  },
}));
