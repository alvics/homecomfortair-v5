const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/product-template.js`);
  const ductedTemplate = path.resolve(`src/templates/product-template-ducted.js`);
  const serviceAreaTemplate = path.resolve(`src/templates/serviceArea-template.js`);

  const productResult = await graphql(`
    query GetProducts {
      products: allStrapiProduct {
        nodes {
          slug
          categories {
            title
          }
        }
      }
    }
  `);

  if (productResult.errors) {
    console.warn(`[gatsby-node] GraphQL errors fetching products:`, productResult.errors);
  }

  if (productResult.data?.products?.nodes?.length) {
    productResult.data.products.nodes.forEach((product) => {
      const isDucted = product.categories?.some(c => c.title === 'ducted system');
      createPage({
        path: `/products/${product.slug}`,
        component: isDucted ? ductedTemplate : productTemplate,
        context: { slug: product.slug },
      });
    });
  } else {
    console.warn(`[gatsby-node] No products found — skipping product page generation. Is Strapi running?`);
  }

  const serviceAreaResult = await graphql(`
    query GetServiceAreas {
      serviceAreas: allStrapiServiceArea {
        nodes {
          slug
        }
      }
    }
  `);

  if (serviceAreaResult.errors) {
    console.warn(`[gatsby-node] GraphQL errors fetching service areas:`, serviceAreaResult.errors);
  }

  if (serviceAreaResult.data?.serviceAreas?.nodes?.length) {
    serviceAreaResult.data.serviceAreas.nodes.forEach((serviceArea) => {
      createPage({
        path: `/service-areas/${serviceArea.slug}`,
        component: serviceAreaTemplate,
        context: { slug: serviceArea.slug },
      });
    });
  } else {
    console.warn(`[gatsby-node] No service areas found — skipping service area page generation.`);
  }
};
