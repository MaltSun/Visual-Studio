import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './Pages/FirstPage/FirstPage'
import './App.css'
import SecondPage from './Pages/SecondPage/SecondPage'
import ThirdPage from './Pages/ThirdPage/ThirdPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage/>}></Route>
          <Route path='/second' element={<SecondPage/>}></Route>
          <Route path='/third' element={<ThirdPage/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
 