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

  productResult.data.products.nodes.forEach((product) => {
    const isDucted = product.categories?.some(c => c.title === 'ducted system');
    createPage({
      path: `/products/${product.slug}`,
      component: isDucted ? ductedTemplate : productTemplate,
      context: { slug: product.slug },
    });
  });

  const serviceAreaResult = await graphql(`
    query GetServiceAreas {
      serviceAreas: allStrapiServiceArea {
        nodes {
          slug
        }
      }
    }
  `);

  serviceAreaResult.data.serviceAreas.nodes.forEach((serviceArea) => {
    createPage({
      path: `/service-areas/${serviceArea.slug}`,
      component: serviceAreaTemplate,
      context: { slug: serviceArea.slug },
    });
  });
};
