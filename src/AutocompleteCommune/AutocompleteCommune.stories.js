import React from 'react'
import { action } from '@storybook/addon-actions'
import AutocompleteCommune from './AutocompleteCommune'
import { Response, Server } from 'miragejs'

export default {
  title: 'AutocompleteCommune',
  component: AutocompleteCommune,
}

export const With10ResultsQuery = () => {
  new Server({
    routes () {
      this.namespace = ''
      this.get('with-10-results/observatoire/communes/light', () => ({
        'data': [
          {
            'id': 34373,
            'insee': '51036',
            'nom': 'BARBONNE FAYEL',
            'codePostal': '51120',
            'datas': [],
          }, {
            'id': 35028,
            'insee': '80801',
            'nom': 'VILLERS CARBONNEL',
            'codePostal': '80200',
            'datas': [],
          }, {
            'id': 32814,
            'insee': '77006',
            'nom': 'ARBONNE LA FORET',
            'codePostal': '77630',
            'datas': [],
          }, {
            'id': 12061,
            'insee': '64249',
            'nom': 'GUETHARY',
            'codePostal': '64210',
            'datas': [],
          }, {
            'id': 21048,
            'insee': '64125',
            'nom': 'BIDART',
            'codePostal': '64210',
            'datas': [],
          }, {
            'id': 25212,
            'insee': '64035',
            'nom': 'ARBONNE',
            'codePostal': '64210',
            'datas': [],
          }, {
            'id': 30378,
            'insee': '64009',
            'nom': 'AHETZE',
            'codePostal': '64210',
            'datas': [],
          }, {
            'id': 18716,
            'insee': '11262',
            'nom': 'NARBONNE',
            'codePostal': '11100',
            'datas': [],
          }, {
            'id': 7049,
            'insee': '31107',
            'nom': 'CARBONNE',
            'codePostal': '31390',
            'datas': [],
          }, {
            'id': 33327,
            'insee': '72212',
            'nom': 'MOULINS LE CARBONNEL',
            'codePostal': '72130',
            'datas': [],
          }],
        'page': 1,
        'pageSize': 10,
        'total': 10,
      }))
    },
  })
  return <AutocompleteCommune
    onChange={action('onChange')}
    setError={action('setError')}
    apiUrl={'with-10-results'}/>
}

export const WithOnly1Result = () => {
  new Server({
    routes () {
      this.namespace = ''
      this.get('only-1-result/observatoire/communes/light', () => ({
        'data': [
          {
            'id': 34373,
            'insee': '51036',
            'nom': 'BARBONNE FAYEL',
            'codePostal': '51120',
            'datas': [],
          }],
        'page': 1,
        'pageSize': 10,
        'total': 1,
      }))
    },
  })
  return <AutocompleteCommune
    onChange={action('onChange')}
    setError={action('setError')}
    apiUrl={'only-1-result'}/>
}

export const WithNoResultsFromApi = () => {
  new Server({
    routes () {
      this.namespace = ''
      this.get('no-result/observatoire/communes/light', () => ({
        'data': [],
        'page': 1,
        'pageSize': 10,
        'total': 0,
      }))
    },
  })
  return <AutocompleteCommune
    onChange={action('onChange')}
    setError={action('setError')}
    apiUrl={'no-result'}/>
}

export const WithErrorFromApi = () => {
  new Server({
    routes () {
      this.namespace = ''
      this.get('error/observatoire/communes/light', () => {
        let headers = {}
        let data = { errors: ['Server did not respond'] }
        return new Response(500, headers, data)
      })
    },
  })
  return <AutocompleteCommune
    onChange={action('onChange')}
    setError={action('setError')}
    apiUrl={'error'}/>
}
