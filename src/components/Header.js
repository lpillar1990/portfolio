import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar1.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a className="image avatar">
        <img src={avatar} alt="leo" />
      </a>
      <h1>
        <strong>Leo Pillar</strong>
        <br />
        Junior Front-end Developer
        <br />
        from Northern Ireland
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
