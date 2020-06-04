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
        <strong>Leo Pillar</strong>{' '}
      </h1>
      <h1> Junior Front-end Developer</h1>
      <h1> from Northern Ireland</h1>
    </div>
    <Footer />
  </header>
)

export default Header
