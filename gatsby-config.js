/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cesar Salazar`,
        short_name: `Cesarsg`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
  ],
  siteMetadata: {
    title: "Cesar Salazar | Audio Engineer",
    author: `Emmet Romo`,
    description: `Official Cesar Salazar Site. Audio Engineer.`,
    siteUrl: `https://www.cesarsg.com`,
  },
}
