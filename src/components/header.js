import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>Aynur Shauerman</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Site Name</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
