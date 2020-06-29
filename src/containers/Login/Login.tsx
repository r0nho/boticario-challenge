import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

// Material
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';

// Styleds
import { materialStyles } from './styles';

import { emailPattern } from 'utils/validators/forms';

interface Inputs {
  email: string;
  password: string;
}

const LoginBox = ({ classes, auth, login }: any) => {
  const { handleSubmit, control, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => login(data);

  const emailRules = { required: 'Campo obrigatório', pattern: { value: emailPattern, message: 'E-mail inválido' } };
  const passwordRules = {
    required: 'Campo obrigatório',
    min: { value: 4, message: 'A senha deve conter mais de 3 caracteres' },
  };

  return (
    <Card elevation={5} className={classes.root}>
      <h2>Login do Revendedor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={TextField}
          name="email"
          className={classes.inputs}
          label="E-mail"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle className="primary" />
              </InputAdornment>
            ),
          }}
          error={!!errors.email}
          helperText={errors.email?.message}
          control={control}
          rules={emailRules}
          defaultValue=""
          variant="outlined"
        />

        <Controller
          as={TextField}
          name="password"
          control={control}
          rules={passwordRules}
          defaultValue=""
          type="password"
          className={classes.inputs}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LockRoundedIcon className="primary" />
              </InputAdornment>
            ),
          }}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Password"
          variant="outlined"
        />

        <Link className={classes.link} to="/register">
          Cadastre-se
        </Link>

        <Button
          className={classes.button}
          variant="contained"
          type="submit"
          color="primary"
          endIcon={!auth.fetching && <ArrowRightAltRoundedIcon style={{ fontSize: 25 }} />}
          disableElevation
          disabled={auth.fetching}
        >
          {auth.fetching ? <CircularProgress size={25} style={{ color: 'white' }} /> : 'Fazer login'}
        </Button>
      </form>
    </Card>
  );
};

export default withStyles(materialStyles)(LoginBox);
