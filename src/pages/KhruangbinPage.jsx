import React from 'react'
import Band from '../components/Band'
import NavBar from '../components/NavBar'

const KhruangbinPage = () => {
  return (
    <>
      <NavBar />
      <Band
        name="Khruangbin"
        image="../images/Khruangbin.jpg"
        album="Texas Sun"
        albumDescription=" Texas Sun came out February 7, 2020 and features new artist Leon
        Bridges. It has four songs: Texas Sun, Midnight, C-Side and Conversion."
      />
    </>
  )
}

export default KhruangbinPage
