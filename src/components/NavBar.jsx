import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <ul class="nav-bar">
      <li>
        <Link to="/HomePage">Home Page</Link>
      </li>
      <li>
        <Link to="/Khruangbin">Khruangbin</Link>
      </li>
      <li>
        <Link to="/GlassAnimals">Glass Animals</Link>
      </li>
      <li>
        <Link to="/Hozier">Hozier</Link>
      </li>
    </ul>
  )
}

export default NavBar
