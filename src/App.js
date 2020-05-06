import React, { useState } from 'react'
import './App.css'
import AutocompleteCommune from './components/AutocompleteCommune/AutocompleteCommune'
import config from './config'

function App () {
  const [city, setCity] = useState(null)
  const [error, setError] = useState(null)

  return (
    <div className="App">
      <AutocompleteCommune apiUrl={config.apiUrl}
                           setError={error => setError(error)}
                           onChange={(e, city) => setCity(city)}
      />

      <div>{city && city.nom}</div>
      <div>{error}</div>

    </div>
  )
}

export default App;
