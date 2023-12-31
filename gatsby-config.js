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
  collectionTypes: ["product", "category", "subcategory", "service-area"],
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
    {
    resolve: `gatsby-source-google-reviews-en`,
    options: {

      placeId: process.env.place_id,
      apiKey: process.env.GOOGLE_API_KEY,
    },

    },
      {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    'gatsby-plugin-postcss',
    
    


  ],
}
