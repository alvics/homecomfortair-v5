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
        title: `Home Comfort Air`,
        description: `Residential air conditioning specialists, we supply and install all major brands throughout south east Queensland, from Ipswich, Brisbane and the Gold Coast.`,
        keywords: `air conditioning, split systems, home, comfort`,
        image: `/Home-Comfort-Air-COL-03-650.png`,
        author: `HOME COMFORT AIR`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-XF1GKXN75R`],
        PluginCongig: {
          head: true
        }
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://homecomfortair.net.au`,
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
