import React from 'react'
import { useParams } from 'react-router-dom'
import useSuperHeroDetails from '../useSuperHeroDetails'

export default function SuperHeroDetails() {
    const { heroId } = useParams()
    const {isLoding,data}=useSuperHeroDetails(heroId)
    
    if (isLoding) { return <div>Loading...</div>}
  return (
    <div>{data?.data.alterEgo}</div>
  )
}
