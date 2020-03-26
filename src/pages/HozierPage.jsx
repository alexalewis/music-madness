import React from 'react'
import Band from '../components/Band'
import NavBar from '../components/NavBar'

const HozierPage = () => {
  return (
    <>
      <NavBar />
      <Band
        name="Hozier"
        image="../images/Hozier.jpeg"
        album="Wasteland, Baby!"
        albumDescription="Wasteland, Baby! came out March 1, 2019 and consists of 14 tracks. Some songs are gospel influenced while others take after hsi previous album, Nina Cried Power."
      />
    </>
  )
}

export default HozierPage
