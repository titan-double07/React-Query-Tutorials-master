import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shared from './pages/Shared'
import SuperHeroes from './pages/SuperHeroes'
import RQSuoerHeroes from './pages/RQSuoerHeroes'
import SuperHeroDetails from './pages/SuperHeroDetails'
import DynamicParallel from './pages/DynamicParallel'
import DependentQueries from './pages/DependentQueries'
import PaginatedQueries from './pages/PaginatedQueries'
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Shared />} >
                    <Route index element={<Home />} />
                    <Route path='/super-heroes' element={ <SuperHeroes/>} />
                    <Route path='/rq-super-heroes' element={ <RQSuoerHeroes/>} />
                    <Route path='/rq-super-heroes/:heroId' element={<SuperHeroDetails />} />
                    <Route path='/rq-dynamic-parallel' element={<DynamicParallel heroIds={[1, 2, 3]} />} />
                    <Route path='/rq-dynamic-parallel/:heroId' element={<SuperHeroDetails />} />
                    <Route path='/rq-dependent-queries' element={<DependentQueries email={'chisomokereke1999@gmail.com' } />} />
                    <Route path='/rq-paginated-queries' element={<PaginatedQueries />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
