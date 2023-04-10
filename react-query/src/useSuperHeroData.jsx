import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

function fetchHeroes() {
    return axios.get('http://localhost:4000/superheroes')
}
export default function useSuperHeroData(obj) {
  return useQuery('super-heroes',fetchHeroes,{...obj,});
}
