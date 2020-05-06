import { useEffect, useState } from 'react'
import makeRequest from '../../api/makeRequest'

export const useCommuneApi = (apiUrl, initialQuery, setError) => {
  const [options, setOptions] = useState([])
  const [query, setQuery] = useState(initialQuery)
  const [isLoading, setIsLoading] = useState(false)

  const computeUrl = query => {
    let url = `${apiUrl}/observatoire/communes/light?name=${query}&zipcode=${query}`
    const searches = query.split('-')
    if (searches.length > 1) {
      const nom = searches[0].trim()
      const codePostal = searches[1].trim()
      url = `${apiUrl}/observatoire/communes/light?name=${nom}&zipcode=${codePostal}`
    }
    return url
  }

  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true)
      try {
        const { data: cities } = await makeRequest(computeUrl(query))
        if (cities && cities.length > 0) {
          setError(null)
          setOptions(cities)
        } else {
          setOptions([])
          setError(`Aucun résultat pour la recherche "${query}"`)
        }
      } catch (e) {
        setOptions([])
        setError(`Erreur lors du chargement des communes par l'api: ${computeUrl(query)}. ${e.message}`)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities()
  }, [query])

  return [{ options, isLoading }, setQuery]
}
