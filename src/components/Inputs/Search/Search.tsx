import React from 'react';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  onSearch: Function;
}

const SearchInput = (props: Props) => {
  const { onSearch } = props;

  const SearchHandler = ($event: any) => {
    onSearch($event.target.value.toUpperCase());
  }

  return (
    <Grid className="search-filter" container spacing={1} alignItems="flex-end">
      <Grid item>
        <SearchIcon />
      </Grid>
      <Grid item>
        <TextField onChange={SearchHandler} label="Search ID" />
      </Grid>
    </Grid>
  );
};

export default SearchInput;
