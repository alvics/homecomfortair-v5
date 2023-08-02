import ProductCard from './RelativeProductCard';

// ...

const SingleProduct = ({ data }) => {
  // ...

  return (
    <Fragment>
      <Layout>
        <div className='container-lg container-fluid-md container-fluid-sm pt-2 '>
          <div className="row single-product-row">
            {/* ... */}

            <div className="col-md-4 bg-white p-4 product-page-description">
              <div className='single-product-right-col'>
                {/* ... */}
                <div className="mt-3">
                  <p className=''>Supplied & installed</p>
                  <div className="row">
                    {data.relatedProducts.nodes
                      .filter(product => product.sub_categories[0]?.title === brand)
                      .slice(0, 5)
                      .map(product => (
                        <div className="col-md-12 mb-4" key={product.id}>
                          <ProductCard product={product} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ... */}
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default SingleProduct;
