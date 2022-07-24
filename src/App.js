import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'


const App = () => {
  return (
    <Box width='400px'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
        <Route path='/about/:id' element={<About />} />
      </Routes>
    </Box>
  )
}

export default App
