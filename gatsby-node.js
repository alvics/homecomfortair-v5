/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

 const path = require(`path`)

// RETURN STRAPI API PAGES DYNAMICALLY
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetProducts {
      products: allStrapiProduct {
        nodes {
          slug
        }
      }
    }
  `)

  const productTemplate = path.resolve(`src/templates/product-template.js`)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: productTemplate,
      context: {
        slug: product.slug,
      },
    })
  })
}



 