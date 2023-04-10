import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useSuperHeroData from '../useSuperHeroData'

export default function SuperHeroes() {
  const [poll,setPoll]=useState(1000)
  const obj = {
    onSuccess: (data) => {
      if (data.data.length === 4)
        console.log(data.data)
      setPoll(3000)
    },
    onError: () => {
      setPoll(false)
    },
    enabled: false,
    refetchInterval:poll
   
  }
  // console.log(obj)
  const { isLoading,data,refetch } = useSuperHeroData(obj)


  return isLoading ? (
    <div className='text-center'>Loading...</div>

  ) : (
    <div className='text-center'>
  <button onClick={refetch} className="border-2 border-pink-700 rounded-md p-2 mt-3 hover:bg-pink-700">show heroes</button>
      {data?.data.map((hero,index) => {
        return <div key={index} className="flex flex-col ">{hero.name}</div>
      })}
    </div>
  )
}
