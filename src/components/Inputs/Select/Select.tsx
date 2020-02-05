import React, { ReactNode } from 'react';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

interface Props {
  onChange: Function;
  value: string | null;
  keyToSort: string;
  children: ReactNode;
}

const SearchInput = (props: Props) => {
  const { onChange, value, keyToSort, children } = props;

  const SelectHandler = ($event: any) => {
    onChange(keyToSort, $event.target.value);
  }

  return (
    <FormControl>
      <InputLabel id={`${keyToSort}-by`}>{ keyToSort } By</InputLabel>
      <Select
        labelId={`${keyToSort}-by`}
        id={`${keyToSort}-by-select`}
        value={value}
        onChange={SelectHandler}
      >
        { children }
      </Select>
    </FormControl>
  );
};

export default SearchInput;
