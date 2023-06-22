/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["product", "category", "subcategory"],
  singleTypes: [],
};


module.exports = {
  siteMetadata: {
    siteUrl: `https://homecomfortair.net.au`,
  },
  plugins: [
        {
    resolve: `gatsby-source-strapi`,
    options: strapiConfig,
  },
   {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    'gatsby-plugin-postcss',
    


  ],
}
