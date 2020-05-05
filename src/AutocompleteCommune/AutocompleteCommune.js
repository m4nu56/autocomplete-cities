import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import { makeRequest } from '../api'

export default function AutocompleteCommune ({ setError, onChange, apiUrl }) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0

  function computeUrl (search) {
    let url = `${apiUrl}/observatoire/communes/light?name=${search}&zipcode=${search}`
    const searches = search.split('-')
    if (searches.length > 1) {
      const nom = searches[0].trim()
      const codePostal = searches[1].trim()
      url = `${apiUrl}/observatoire/communes/light?name=${nom}&zipcode=${codePostal}`
    }
    return url
  }

  const loadCities = async search => {
    let url = computeUrl(search)
    try {
      const { data: cities } = await makeRequest(url)
      if (cities && cities.length>0) {
        setOptions(cities)
      } else {
        setError(`Aucun résultat pour la recherche ${search}`)
        setOpen(false)
      }
    } catch (e) {
      setOptions([])
      setOpen(false)
      setError(`Erreur lors du chargement des communes par l'api: ${url}. ${e.message}`)
    }
  }

  useEffect(() => {
    if (!loading) {
      return undefined
    }
    loadCities('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      id="autocomplete-cities"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={onChange}
      getOptionSelected={(option, value) => option.nom === value.nom}
      getOptionLabel={city => `${city.nom} - ${city.codePostal}`}
      options={options}
      loading={loading}
      onInputChange={(e, values) => {
        loadCities(values)
      }}
      renderInput={params => (
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
      )}
    />
  );
}
