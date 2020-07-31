import React, { useState } from 'react';

import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import Lottie from 'react-lottie';

// Components
import CurrencyInput from 'components/CurrencyInput';

// Material
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import ConfirmationNumberRoundedIcon from '@material-ui/icons/ConfirmationNumberRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';

// Styleds
import { materialStyles } from './styles/styles';

// Assets
import animationData from 'assets/animations/done.json';

interface Inputs {
  code: string;
  value: string;
  date: string;
}

const DateInput = (props: any) => {
  return (
    <InputMask mask="99/99/9999" {...props}>
      {(inputProps: any) => <TextField {...inputProps} type="text" />}
    </InputMask>
  );
};

const RegisterPurchase = ({ classes }: any) => {
  // States
  const { handleSubmit, control, errors } = useForm<Inputs>();
  const [price, setPrice] = useState<number>(0);
  const [registred, setRegistred] = useState<Boolean>(false);

  // Rules
  const requiredRule = { required: 'Campo obrigatório' };
  const dateRules = { ...requiredRule, minLength: { value: 10, message: 'Data inválida' } };

  const codeRules = {
    ...requiredRule,
    minLength: { value: 5, message: 'Código inválido' },
  };

  const valueRules = {
    ...requiredRule,
    minLength: { value: 1, message: 'Valor inválido' },
  };

  const lottieOptions = {
    animationData,
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  // Handlers
  const onSubmit = () => setRegistred(true);
  const handlePrice = (value: number) => setPrice(value);

  return !registred ? (
    <>
      <div className={classes.header}>
        <Typography variant="h4" component="h4" gutterBottom className={classes.title}>
          <PostAddRoundedIcon style={{ fontSize: 30 }} /> Cadastrar compra
        </Typography>
      </div>

      <div className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={TextField}
            name="code"
            control={control}
            rules={codeRules}
            defaultValue=""
            className={classes.inputs}
            error={!!errors.code}
            helperText={errors.code?.message}
            label="Código da compra"
            placeholder="Código da compra"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ConfirmationNumberRoundedIcon className="primary" />
                </InputAdornment>
              ),
            }}
          />

          <Controller
            as={CurrencyInput}
            name="value"
            className={classes.inputs}
            label="Valor"
            error={!!errors.value}
            helperText={errors.value?.message}
            control={control}
            rules={valueRules}
            defaultValue=""
            variant="outlined"
            placeholder="Valor da compra"
            value={price}
            id="Valor"
            onChange={([event]) => {
              handlePrice(event.target.value);
              return event.target.value;
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoneyRoundedIcon className="primary" />
                </InputAdornment>
              ),
            }}
          />

          <Controller
            as={DateInput}
            name="date"
            className={classes.inputs}
            label="Data"
            error={!!errors.date}
            helperText={errors.date?.message}
            control={control}
            rules={dateRules}
            defaultValue=""
            placeholder="Data da compra"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EventRoundedIcon className="primary" />
                </InputAdornment>
              ),
            }}
          />

          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            color="primary"
            disableElevation
            endIcon={<ArrowRightAltRoundedIcon style={{ fontSize: 25 }} />}
          >
            Cadastrar compra
          </Button>
        </form>
      </div>
    </>
  ) : (
    <div className={classes.successContainer}>
      <Lottie options={lottieOptions} height={400} width={400} />
      <h2 className={classes.successText}>Compra cadastrada com sucesso!</h2>

      <Button
        className={classes.buttonSuccess}
        onClick={() => setRegistred(false)}
        variant="contained"
        type="submit"
        color="primary"
        disableElevation
      >
        Registrar outra compra
      </Button>
    </div>
  );
};

export default withStyles(materialStyles)(RegisterPurchase);
