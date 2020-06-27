import { createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const AppWrapper = styled.section`
  height: 100%;
  width: 100%;
  font-size: calc(10px + 2vmin);
  overflow-x: hidden;
  text-align: left;
  margin: 0 auto;
  background: ${props => props.theme.accent};
  box-sizing: border-box;
`;

export const CenteredDiv = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    position: relative;
    margin-bottom: 45px;
  }

  @media (max-width: 1000px) {
    img {
      left: 0;
    }
  }
`;

export const StyledSVG = styled.div`
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    opacity: 0.2;

    &.wave {
      &--second {
        width: 110%;
      }
    }
  }

  @media (max-width: 1000px) {
    svg {
      display: none;
    }
  }
`;

export const materialStyles = createStyles((theme: any) => ({
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

    '& .MuiInputBase-input': {
      fontSize: 13,
    },

    '& label.Mui-focused': {
      color: '#007e78',
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

      '&.Mui-focused fieldset': {
        borderColor: '#007e78',
      },
    },
  },

  button: {
    background: '#007e78',
    color: 'white',
    borderRadius: 15,
    width: 180,
    fontSize: 13,
    padding: 10,

    '&:hover': {
      background: '#6f967e',
    },
  },

  link: {
    display: 'block',
    color: '#007e78',
    fontSize: 16,
    cursor: 'pointer',
    margin: '5px 0 20px',
  },
}));
