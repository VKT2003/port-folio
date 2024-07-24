import React from 'react'
import Header from './Header/Header'
import Projects from './Projects/Projects'
import Recommendations from './Recommendations/Recommendations'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <>
      <Header />
      <Projects />
      <Recommendations />
      <Contact />
    </>
  )
}

export default Home