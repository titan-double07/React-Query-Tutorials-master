import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

function fetchHero(id) {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export default function DynamicParallel({ heroIds }) {
    const queryResult = useQueries(heroIds.map(id => {
        return { queryKey: ['super-heroes', id], queryFn: () => fetchHero(id) }
    }))

    console.log(queryResult[2].data?.data)
    return (
        <div>heyyy </div>
    )
}
