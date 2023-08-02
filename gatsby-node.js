const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/product-template.js`);
  const serviceAreaTemplate = path.resolve(`src/templates/serviceArea-template.js`);

  // Query for products
  const productResult = await graphql(`
    query GetProducts {
      products: allStrapiProduct {
        nodes {
          slug
        }
      }
    }
  `);

  // Create product pages
  productResult.data.products.nodes.forEach((product) => {
    createPage({
      path: `/products/${product.slug}`,
      component: productTemplate,
      context: {
        slug: product.slug,
      },
    });
  });

  // Query for service areas
  const serviceAreaResult = await graphql(`
    query GetServiceAreas {
      serviceAreas: allStrapiServiceArea {
        nodes {
          slug
        }
      }
    }
  `);

  // Create service area pages
  serviceAreaResult.data.serviceAreas.nodes.forEach((serviceArea) => {
    createPage({
      path: `/service-areas/${serviceArea.slug}`,
      component: serviceAreaTemplate,
      context: {
        slug: serviceArea.slug,
      },
    });
  });
};
