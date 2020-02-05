import React, { useState, useEffect, useRef } from 'react';
import AutosizeInput from 'react-input-autosize';

import EditIcon from '@material-ui/icons/Edit';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
  value: string;
  onEdit: Function;
  fetching: boolean;
  disabled: boolean;
}

const EditableInput = ({ value, onEdit, fetching, disabled }: Props) => {
  const [valueInput, setValueInput] = useState('Default Value');
  const [inputDisabled, setInputDisabled] = useState(true);
  const [inputFetching, setInputFetching] = useState(false);
  const inputEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onInit = () => {
      setValueInput(value);
      setInputDisabled(disabled || true);
      setInputFetching(fetching || false);
    }

    onInit();
  }, [value, disabled, fetching]);


  useEffect(() => {
    if (null !== inputEl.current) {
      inputEl.current.focus();
    }
  }, [inputDisabled]);

  const toggleInput = () => {
    setInputDisabled(!inputDisabled);
  }

  const submitHandler = () => {
    if (valueInput !== value) {
      setInputFetching(true);
      onEdit(valueInput);
    }

    toggleInput();
  }
  
  return (
    <>
      <AutosizeInput
        className="editable-field"
        value={valueInput}
        disabled={inputDisabled}
        ref={inputEl}
        onChange={($event: any) => setValueInput($event.target.value)}
      />


      {
        inputFetching
        ? <CircularProgress color="inherit" size="20px" className="blue loading" />  
        : (
            inputDisabled 
              ? <EditIcon fontSize="small" className="blue" onClick={toggleInput} /> 
              : <CheckCircleIcon fontSize="small" className="green" onClick={submitHandler} />
        )
      }    
    </>
  );
}

export default EditableInput;
