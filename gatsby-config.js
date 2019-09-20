require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const gravityforms = {
  key: process.env.GATSBY_GRAVITY_FORMS_KEY,
  secret: process.env.GATSBY_GRAVITY_FORMS_SECRET,
}

module.exports = {
  siteMetadata: {
    title: "Social Minds",
    titleTemplate: "%s | Social Minds Podcast",
    defaultTitle: "Social Minds | A Social Chain Podcast",
    description:
      "Social Minds is the UK’s first-ever dedicated social media marketing podcast, brought to you by Social Chain.",
    url: process.env.URL, // No trailing slash allowed!
    image: "/static/images/socialimage.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@thesocialchain",
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
        name: `Social Minds Podcast`,
        short_name: `Social Minds`,
        start_url: `/`,
        background_color: `#ff0066`,
        theme_color: `#ff0066`,
        display: `standalone`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WWXQLR9",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-iubenda-cookie-footer",
      options: {
        iubendaOptions: {
          lang: "en",
          siteId: 1676133,
          cookiePolicyId: 76482076,
          banner: {
            acceptButtonDisplay: true,
            customizeButtonDisplay: true,
            position: "float-center",
            acceptButtonColor: "#0073CE",
            acceptButtonCaptionColor: "white",
            customizeButtonColor: "#DADADA",
            customizeButtonCaptionColor: "#4D4D4D",
            textColor: "black",
            backgroundColor: "white",
            backgroundOverlay: true,
          },
        },
        // optional, if present, a Google Tag Manager event ("iubenda_consent_given") is triggered
      },
    },
  ],
}
