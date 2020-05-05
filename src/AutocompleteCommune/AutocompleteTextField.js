import TextField from '@material-ui/core/TextField'
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'

export const AutocompleteTextField = ({params, loading}) =>
  <TextField
    {...params}
    placeholder="Commune..."
    fullWidth
    variant="outlined"
    InputProps={{
      ...params.InputProps,
      endAdornment: (
        <React.Fragment>
          {loading ? <CircularProgress color="inherit" size={20}/> : null}
          {params.InputProps.endAdornment}
        </React.Fragment>
      ),
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon/>
        </InputAdornment>
      ),
    }}
  />
