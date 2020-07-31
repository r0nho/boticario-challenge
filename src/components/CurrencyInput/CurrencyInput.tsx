import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props: any) {
  const { inputRef, onChange, name, maxValue, ...other } = props;

  const onValueChange = useCallback(
    values => {
      onChange({
        target: {
          name,
          value: values.value,
        },
      });
    },
    [onChange, name],
  );

  const isAllowed = useCallback(
    values => {
      const { formattedValue, floatValue } = values;
      return formattedValue === '' || !maxValue || floatValue <= maxValue;
    },
    [maxValue],
  );

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={onValueChange}
      name={name}
      prefix="R$ "
      thousandSeparator="."
      decimalSeparator=","
      isNumericString
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      allowLeadingZeros={false}
      isAllowed={isAllowed}
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default function CurrencyInput(props: any) {
  const { label, value, onChange, id, maxValue, ...other } = props;
  const inputProps: any = other.InputProps;

  const inputComponent = useCallback(propertys => <NumberFormatCustom {...propertys} maxValue={maxValue} />, [
    maxValue,
  ]);

  return (
    <TextField
      {...other}
      label={label}
      value={value}
      onChange={onChange}
      id={id}
      InputProps={{
        inputComponent,
        startAdornment: inputProps?.startAdornment,
      }}
    />
  );
}

CurrencyInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  maxValue: PropTypes.number,
};

CurrencyInput.defaultProps = {
  maxValue: 0,
};
