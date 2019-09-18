require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gravityforms = {
  "key": process.env.GATSBY_GRAVITY_FORMS_KEY,
  "secret": process.env.GATSBY_GRAVITY_FORMS_SECRET,
}

module.exports = {
  siteMetadata: {
    title: `Social Minds`,
    description: `Social Minds a podcast by Social Chain`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "socialmind.wpengine.com",
        protocol: "https",
        hostingWPCOM: false,
        verboseOutput: true,
        useACF: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-gravityforms`,
      options: {
        baseUrl: `https://admin.socialmindspodcast.com`,
        api: {
          key: gravityforms.key,
          secret: gravityforms.secret,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
