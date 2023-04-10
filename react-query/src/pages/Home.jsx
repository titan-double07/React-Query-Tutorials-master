import React, { useState } from 'react'
import useSuperHeroDetails from '../useSuperHeroDetails'
import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export default function Home() {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const { data } = useQuery('heroes', fetchHeroes)
  const queryCient = useQueryClient()
  
  const { mutate } = useMutation(addSuperHero, {
    // onSuccess: (data) => {
    // // queryCient.invalidateQueries('heroes')
    //   // faster(1 less network calls)
    //   // queryCient.setQueryData('heroes', (prevQueryData) => {
    //   //   return {...prevQueryData,
    //   //     data:[...prevQueryData.data,data.data]
    //   //   }
    //   // })
      
    // }
    onMutate: async newHero => {
      await queryCient.cancelQueries('heroes')
      const previousHeroData = queryCient.getQueryData('heroes')
      queryCient.setQueryData('heroes', prevHeroData => {
        return {
          ...prevHeroData,
          data: [
            ...prevHeroData.data,
            {...newHero}
          ]
        }
      })
      return {previousHeroData}
    },
    onError: (_err, _newTodo, context) => {
      queryCient.setQueryData('heroes',context.previousHeroData)
    },
    onSettled: () => {
      queryCient.invalidateQueries('heroes')
    }
    
  })
  
  function handleAddHeroClick() {
    // e.preventDefault()
    const hero = {name,alterEgo}
    mutate(hero)
  }

  return (
    <div className='mt-4 '>
      <input
        className='border-2 mr-3'
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className='border-2'
        type='text'
        value={alterEgo}
        onChange={e => setAlterEgo(e.target.value)}
      />
      <button className='border-2 hover:bg-pink-500 active:bg-pink-700 disabled:bg-gray-300' onClick={handleAddHeroClick}>Add Hero</button>
      <br />
      {
        data?.data.map((heroes, index) => {
          return <div key={index}>{heroes.name }</div>
        })
      }
    </div>
  )
}
function fetchHeroes() {
  return axios.get(`http://localhost:4000/superheroes`)
}
function addSuperHero(hero) {
  return axios.post(`http://localhost:4000/superheroes`,hero)
}