import React from 'react'
import { Outlet ,Link} from 'react-router-dom'


export default function Shared() {
    return (
        <>
            <nav>
                <ul className='flex space-x-7 border-b-2 p-3'>
                    <li className='hover:text-pink-700'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:text-pink-700'>
                        <Link to='/super-heroes'>Traditional Super Heroes</Link>
                    </li>
                    <li className='hover:text-pink-700'>
                        <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
                    </li>
                    <li className='hover:text-pink-700'>
                        <Link to='/rq-dynamic-parallel'>Dynamic Parallel</Link>
                    </li>
                    <li className='hover:text-pink-700'>
                        <Link to='/rq-dependent-queries'>Dependent Queries</Link>
                    </li>
                    <li className='hover:text-pink-700'>
                        <Link to='/rq-paginated-queries'>Paginated Queries</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
