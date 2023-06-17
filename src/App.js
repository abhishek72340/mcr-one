import React from 'react'
import Shelves from './Pages/shelves/Shelves'
import Search from './Pages/search/Search'
import {Routes,Route} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Shelves/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
      
    </div>
  )
}
