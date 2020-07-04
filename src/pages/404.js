import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <h1>NOT SENT</h1>
      <p>Your message did not send, please try again in a few minutes.</p>
      <p>Thank you.</p>
      <Link to="/">Back</Link>
    </div>
  </Layout>
)

export default NotFoundPage
