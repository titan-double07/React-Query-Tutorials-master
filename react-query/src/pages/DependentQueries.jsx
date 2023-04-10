import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

export default function DependentQueries({ email }) {


    const {data:user }=useQuery(['user',email],()=> fetchUserByEmail(email))
//if user email matches get channel id
    const channelId = (user?.data?.channelId)
  //if channel id exist didplay courses
    const { data: channel } = useQuery(['channel', channelId], () => fetchUserByChannelId(channelId),{enabled:!!channelId})
    console.log(channel?.data.courses)
  return (
      <div>{
          channel?.data?.courses.map((channel, index) => {
              return <div key={index}>
                  {channel}
              </div>
          })
      }</div>
  )
}
function fetchUserByEmail(email) {
    return axios.get(`http://localhost:4000/users/${email}`)
}

function fetchUserByChannelId(channelId) { 
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}