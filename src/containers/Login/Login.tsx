import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';

// Material
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';

// Assets
import Logo from 'assets/images/logo-white.svg';

// Styleds
import { AppWrapper, CenteredDiv, materialStyles, StyledSVG } from './styles';

const LoginBox = ({ classes }: any) => {
  return (
    <Card elevation={5} className={classes.root}>
      <h2>Login do Revendedor</h2>
      <TextField
        className={classes.inputs}
        label="E-mail"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AccountCircle className="primary" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <TextField
        type="password"
        className={classes.inputs}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LockRoundedIcon className="primary" />
            </InputAdornment>
          ),
        }}
        label="Password"
        variant="outlined"
      />
      <Link className={classes.link}>Cadastre-se</Link>

      <Button
        className={classes.button}
        variant="contained"
        endIcon={<ArrowRightAltRoundedIcon style={{ fontSize: 25 }} />}
        disableElevation
      >
        Fazer login
      </Button>
    </Card>
  );
};

class Login extends Component {
  render() {
    return (
      <AppWrapper>
        <CenteredDiv>
          <>
            <StyledSVG>
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                fill="white"
              >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
              </svg>

              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                fill="white"
                className="wave--second"
              >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
              </svg>
            </StyledSVG>
            <img src={Logo} alt="Logo O Boticario" title="Logo O Boticario" />
            <LoginBox {...this.props} />
          </>
        </CenteredDiv>
      </AppWrapper>
    );
  }
}

export default withStyles(materialStyles)(Login);
