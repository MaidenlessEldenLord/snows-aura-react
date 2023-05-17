import { Routes, Route } from 'react-router-dom'; 
import { Search, PageNotFound, Cart, Home } from '../pages';

export const AllRoutes = () => {
  return (
    <div className='bg-sky-200 dark:bg-gradient-to-t from-amber-400 via-red-500 to-blue-950'>
        <Routes>
            <Route path='/' element={<Home />} />            
            <Route path='search' element={<Search title="Search/candle" />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
