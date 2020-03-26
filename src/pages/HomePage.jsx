import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Music Madness!</h1>
      <h2>My Favorite Bands</h2>
      <ul>
        <li>
          <Link to="/Khruangbin">Khruangbin</Link>
          <p>
            Khruangbin is a three-piece band from Texas, formed of Laura Lee on
            bass, Mark Speer on guitar, and Donald Johnson on drums. Taking
            influence from 1960's Thai funk - their name literally translates to
            "Engine Fly" in Thai - Khruangbin is steeped in bass heavy,
            psychedelic sound.
          </p>
        </li>
        <li>
          <Link to="/GlassAnimals">Glass Animals</Link>
          <p>
            Glass Animals are a British psychedelic pop band led by singer,
            songwriter, and producer Dave Bayley with his bandmates and
            childhood friends Joe Seaward, Ed Irwin-Singer, and Drew MacFarlane.
            Bayley wrote and self-produced both of the band's albums.
          </p>
        </li>
        <li>
          <Link to="/Hozier">Hozier</Link>
          <p>
            Andrew John Hozier-Byrne, known professionally as Hozier, is an
            Irish musician, singer, and songwriter from County Wicklow. He had
            his international breakthrough after releasing his debut single
            "Take Me to Church", which has been certified multi-platinum in
            several countries, including the US, the UK, and Canada.
          </p>
        </li>
      </ul>
    </>
  )
}

export default HomePage
