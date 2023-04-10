import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function RQSuoerHeroes() {
  function fetchHeroes() {
    return axios.get('http://localhost:4000/superheroes')
  }
  function fetchFriends() {
    return axios.get('http://localhost:4000/friends')
  }

  function onSuccess(data) {
    
    if (data.data )
  setPoll(false)
  }
  
  function onError(error) {

    console.log(error.message)
    setPoll(false)
    
  }
  const [poll, setPoll]=useState(3000)
  const { isLoading, data:heroes, isError, error, } = useQuery('superHeroes', fetchHeroes, {
    refetchInterval: poll,
    onError,
    onSuccess
  })
  const { isLoading:isFriendsLoading, data: friends, } = useQuery('friends', fetchFriends)
  
  if( isLoading) return<div className='text-center'>Loading...</div>
  if (isError) return <div> {error.message }</div>
  return (
   <div>
     <div className='text-center'>
       {heroes?.data.map((hero,index) => {
         return <div key={index} className="flex flex-col "><Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link></div>
       })}
     
     </div>
      <div>
        {
          friends?.data?.map((friend,index) => {
            return <div key={index}>{friend.name}</div>
          })
      }
      </div>
   </div>
   )
}

// combine poling with callback
// use the refecthInterval to poll api data evry 3s
// add a 4th hero to the db.json
// in the succes callback, check if the num of heroes is 4, if so stop polling
// if error stop pollin
// 
