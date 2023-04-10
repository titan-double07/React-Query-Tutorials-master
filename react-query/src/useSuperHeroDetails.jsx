import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'

// function fetchSuperHeroes(heroId) {
//     return axios.get(`http://localhost:4000/superheroes/${heroId}`)
// }
function fetchSuperHeroes({ queryKey }) {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export default function useSuperHeroDetails(heroId) {
    const queryClient = useQueryClient()
    return useQuery(['super-hero', heroId], fetchSuperHeroes, {
        //for displaying initial data
        initialData: () => {
            const hero = queryClient.getQueryData('super-hero')?.data?.find((hero) => hero.id === parseInt(heroId))
            if (hero) {
                return {data:hero}
            } else {
                return undefined
            }
        }
    })
}
