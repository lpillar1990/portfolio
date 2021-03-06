module.exports = {
  siteMetadata: {
    title: 'Leo - Pillar - Portfolio',
    author: 'Leo Pillar',
    description: 'Portfolio on Leo Pillar',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-smoothscroll',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Leo-Pillar-Portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
