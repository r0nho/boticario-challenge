import React from 'react';

import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

// Material
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

// Styleds
import { materialStyles } from './styles/styles';

// Assets
import { emailPattern, fullnamePattern } from 'utils/validators/forms';

interface Inputs {
  fullname: string;
  email: string;
  cpf: string;
  password: string;
}

const Input = (props: any) => {
  return (
    <InputMask mask="999.999.999-99" {...props}>
      {(inputProps: any) => <TextField {...inputProps} type="text" />}
    </InputMask>
  );
};

const LoginBox = ({ classes, auth, register }: any) => {
  const { handleSubmit, control, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => register(data);
  const requiredRule = { required: 'Campo obrigatório' };
  const emailRules = { ...requiredRule, pattern: { value: emailPattern, message: 'E-mail inválido' } };

  const fullNameRules = {
    ...requiredRule,
    pattern: { value: fullnamePattern, message: 'Por favor, digite seu nome completo' },
  };

  const cpfRules = {
    ...requiredRule,
    minLength: { value: 14, message: 'CPF Inválido' },
  };

  const passwordRules = {
    ...requiredRule,
    minLength: { value: 5, message: 'A senha deve conter pelo menos 5 caracteres' },
  };

  return (
    <Card elevation={5} className={classes.root}>
      <>
        <h2>Faça seu cadastro</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={TextField}
            name="fullname"
            control={control}
            rules={fullNameRules}
            defaultValue=""
            className={classes.inputs}
            error={!!errors.fullname}
            helperText={errors.fullname?.message}
            label="Nome completo"
            variant="outlined"
          />

          <Controller
            as={TextField}
            name="email"
            className={classes.inputs}
            label="E-mail"
            error={!!errors.email}
            helperText={errors.email?.message}
            control={control}
            rules={emailRules}
            defaultValue=""
            variant="outlined"
          />

          <Controller
            as={Input}
            name="cpf"
            className={classes.inputs}
            label="CPF"
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
            control={control}
            rules={cpfRules}
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
            error={!!errors.password}
            helperText={errors.password?.message}
            label="Password"
            variant="outlined"
          />

          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            color="primary"
            endIcon={!auth.fetching && <ArrowRightAltRoundedIcon style={{ fontSize: 25 }} />}
            disableElevation
            disabled={auth.fetching}
          >
            {auth.fetching ? <CircularProgress size={25} style={{ color: 'white' }} /> : 'Cadastrar'}
          </Button>
        </form>
      </>
    </Card>
  );
};

export default withStyles(materialStyles)(LoginBox);
