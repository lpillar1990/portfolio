import React from 'react'
import Helmet from 'react-helmet'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import logo2 from '../assets/images/logo2.png'

const HomeIndex = () => {
  const siteTitle = 'Leo Pillar | Portfolio'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Hi.
              <br />
            </h2>
          </header>
          <p>
            My name is Leo, I am a Front-End Developer from Bangor, Northern
            Ireland. My professional path has taken many twists and turns - from
            being a Commercial Diver to co-owning a small Diving business. It
            has led me back to being a Front-end Developer once again, and
            loving every minute of it.
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            If you have a project that you want to get started, think you need
            my help with something or just fancy saying hey, then get in touch.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form name="contact" method="POST" action="#" data-netlify="true">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Bangor
                  <br />
                  Co.Down
                  <br />
                  Northern Ireland
                </li>

                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:lpillar1990@gmail.com">
                    lpillar1990@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <button className="lp_logo" onClick={() => scrollTo('#one')}>
          {' '}
          <img src={logo2} alt="logo2" width="110px" />
        </button>
      </div>
    </Layout>
  )
}

export default HomeIndex
