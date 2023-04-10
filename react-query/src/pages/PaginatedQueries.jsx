import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
// INFINITE
function fetchColors({ pageParam }) {
    return axios.get(`http://localhost:4000/colors?_limit=3&_page=${pageParam}`)
}
export default function PaginatedQueries() {
    const { data: colors, fetchNextPage, hasNextPage } = useInfiniteQuery(['colors'],fetchColors, {
        getNextPageParam: (_lastPage,pages) => {
        return (pages.length<3)? pages.length+1:undefined
    } })
// console.log(colors?.pages[0].data)
    return (
        <div>
            {
                
                    colors?.pages.map((group, i) => {
                        return (<Fragment key={i}>
                            {group.data.map((color, index) => {
                                return <div key={index}>{color.label}</div>
                            })}

                        </Fragment>)
                    })
            
            }
            <button onClick={() => fetchNextPage()} disabled={!hasNextPage} className="border-2 hover:bg-pink-500 active:bg-pink-700 disabled:bg-gray-300">
                next page
            </button>
        </div>
    )
}
// PAGINATED QUERRIES

// function fetchColors(pageNum) {
//     return axios.get(`http://localhost:4000/colors?_limit=3&_page=${pageNum}`)
// }
// export default function PaginatedQueries() {
//     const [pageNum, setPageNum] = useState(1)
//     const { data: colors } = useQuery(['colors', pageNum], () => fetchColors(pageNum), { keepPreviousData: true })
//     console.log(pageNum)

//     return (
//         <div>
//             {
//             colors?.data.map((color, index) => {
//             return <div key={index}>{color.label}</div>
//             })}

//             <button onClick={()=>setPageNum((prev)=>prev+1)} disabled={pageNum>=3}  className="border-2 hover:bg-pink-500 active:bg-pink-700 disabled:bg-gray-300">
//                 next page
//             </button>
//         </div>
//     )
// }
