import React, { useEffect, useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { makeRequest } from '../api'
import { AutocompleteTextField } from './AutocompleteTextField'

export default function AutocompleteCommune ({ setError, onChange, apiUrl }) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0

  const computeUrl = search => {
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
    try {
      const { data: cities } = await makeRequest(computeUrl(search))
      if (cities && cities.length>0) {
        setOptions(cities)
      } else {
        setError(`Aucun résultat pour la recherche ${search}`)
        setOpen(false)
      }
    } catch (e) {
      setOptions([])
      setOpen(false)
      setError(`Erreur lors du chargement des communes par l'api: ${computeUrl(search)}. ${e.message}`)
    }
  }

  useEffect(() => {
    if (!loading) {
      return
    }
    loadCities('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  return <Autocomplete
    id="autocomplete-cities"
    style={{ width: 300 }}
    open={open}
    onOpen={() => {
      setOpen(true)
    }}
    onClose={() => {
      setOpen(false)
    }}
    onChange={onChange}
    getOptionSelected={(city, value) => city.id === value.id}
    getOptionLabel={city => `${city.nom} - ${city.codePostal}`}
    options={options}
    loading={loading}
    onInputChange={(e, values) => loadCities(values)}
    renderInput={params => AutocompleteTextField({ params, loading })}
  />
}
