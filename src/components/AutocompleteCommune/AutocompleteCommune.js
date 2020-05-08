import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useCommuneApi } from './useCommuneApi'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import _ from 'lodash'

export default function AutocompleteCommune ({ setError, onChange, apiUrl }) {
  const [open, setOpen] = useState(false)
  const [{ options, isLoading }, setQuery] = useCommuneApi(apiUrl, '', setError)

  return <Autocomplete
    id="autocomplete-cities"
    style={{ width: 300 }}
    open={open}
    onOpen={() => setOpen(true)}
    onClose={() => setOpen(false)}
    onChange={onChange}
    getOptionSelected={(city, value) => city.id === value.id}
    getOptionLabel={city => `${city.nom} - ${city.codePostal}`}
    options={options}
    loading={isLoading}
    onInputChange={_.debounce((e, values) => setQuery(values), 500)}
    renderInput={params => AutocompleteTextField({ params, isLoading })}
  />
}

const AutocompleteTextField = ({params, isLoading}) =>
  <TextField
    {...params}
    placeholder="Commune..."
    fullWidth
    variant="outlined"
    InputProps={{
      ...params.InputProps,
      endAdornment: (
        <React.Fragment>
          {isLoading ? <CircularProgress color="inherit" size={20}/> : null}
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
