import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { AutocompleteTextField } from './AutocompleteTextField'
import { useCommuneApi } from '../api/useCommuneApi'

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
    onInputChange={(e, values) => setQuery(values)}
    renderInput={params => AutocompleteTextField({ params, isLoading })}
  />
}
