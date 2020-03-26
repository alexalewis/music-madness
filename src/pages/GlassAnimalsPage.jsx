import React from 'react'
import Band from '../components/Band'
import NavBar from '../components/NavBar'

const GlassAnimalsPage = () => {
  return (
    <>
      <NavBar />
      <Band
        name="Glass Animals"
        image="../images/GlassAnimals.jpeg"
        album="How to be a Human Being"
        albumDescription="How to be a Human Being came out August 26, 2016. It has eleven tracks and is described as 'a scrapbook of their time spent on the road, gathering memories and perceptions of different types of people from all around the world.'"
      />
    </>
  )
}

export default GlassAnimalsPage
