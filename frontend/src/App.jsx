import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import AidoctorPage from './pages/AidoctorPage'
import TalkdocPage from './pages/TalkdocPage'
import ProfilePage from './pages/ProfilePage'
import AboutPage from './pages/AboutPage'
import MeditationsPage from './pages/MeditationsPage'
import LabPage from './pages/LabPage'

const App = () => {
  return (
    <div className=''>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/aidoc' element={<AidoctorPage/>} />
      <Route path='/talktodoc' element={<TalkdocPage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/meditaion' element={<MeditationsPage/>} />
      <Route path='/lab' element={<LabPage/>} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
