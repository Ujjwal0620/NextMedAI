import React from 'react'
import Banner from '../components/Home Components/Banner'
import HeroSection from '../components/Home Components/HeroSection'
import HomeSlider from '../components/Home Components/HomeSlider'
import Plans from '../components/Home Components/Plans'
import TeamHero from '../components/Home Components/TeamHero'

const HomePage = () => {
  return (
    <div >
      <Banner/>
      <HeroSection/>
      <HomeSlider/>
      <Plans/>
      <TeamHero/>
    </div>
  )
}

export default HomePage
