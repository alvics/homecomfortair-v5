// Single Product Page Template
// Use graphql query to render page
// import ButtonGroup from '../components/Products/ButtonGroup';

import React, { Fragment } from 'react';

import { graphql, Link } from 'gatsby'
import { useLocation } from '@reach/router';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import GoldStars from '../components/Products/GoldStars';
import DesktopNav from '../components/Sections/DesktopNav'
// import KwAccordion from '../components/Products/KwAccordion';






const SingleProduct = ({ data }) => {

const location = useLocation();
  const { pathname } = location;


 



  const { description } = data.strapiProduct.description.data
   const { title, price, heat_capacity,room_size, model, cool_capacity } = data.strapiProduct
   const  brand = data.strapiProduct.sub_categories[0]?.title || '';
    // const  image2  = data.strapiProduct.image2.url

   const gallery = data.strapiProduct.gallery
 
 const images = gallery.map((item) => ({
    src: item.url,
    alt: title,
    
  }));

 

  //  const images = gallery.map((item) => ({
  //   src: item.url
  // }));

 console.log(data, 'From Product-Template!!');
  return (
  <Fragment>
  <DesktopNav />
    <div className='container-lg container-fluid-md container-fluid-sm pt-5' style={{marginTop:'65px'}}>
       <div className="row single-product-row">


    <div className="col-md-8 bg-white text-center p-4 scrollable-column">
        <div aria-label="breadcrumb" className='my-4 fsz-14'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
    <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
    <li className="breadcrumb-item active" aria-current="page">Split-systems / {brand}-{model}</li>
  </ol>
</div>
    <div className='gallery-img-container'>

  
    
   <Carousel images={images} index={2} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} hasCaption={true} className='bg-white d-flex img-fluid gallery-img' /> 

    </div>

</div>


    <div className="col-md-4 bg-white p-4 product-page-description">
    <div className='single-product-right-col'>
    <div className="mt-5 text-wrap single-product-right-col-text">
    <h1 className="h5 fw-700 text-wrap">{title}</h1>
   <GoldStars />
    <div className='pt-2'>
    <div className='text-capitalize'><span className='fw-600'>Brand:</span> {brand}</div>
      <span><span className='fw-600'>Model:</span> {model}</span>
    </div>
     
    </div>
     
   
<div>
  <div className="btn-group mt-1">
    <button type="button" className="border border-dark px-2 pt-1 pb-1 text-black fsz-16 gallery-btn dropdown-toggle-split d-flex justify-between fw-400" data-bs-toggle="dropdown" style={{ width: '220px' }}>
      {cool_capacity} <span className='pt-1 pb-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="bi bi-chevron-down" viewBox="0 0 16 16">
  <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" strokeWidth="1" />
</svg>
</span>
    </button>
<ul className='dropdown-menu text-black fsz-16' style={{ width: '250px' }}>
  {data.relatedProducts.nodes.map((product) => {
    if (product.sub_categories[0]?.title === brand) {
      const isActive = pathname.includes(product.slug) ? 'active' : '';

      return (
        <li
          key={product.id}
          className={`dropdown-item--- px-2 pb-0 text-black ${isActive}`}
        >
          <Link to={`/products/${product.slug}`} 
          className={`text-black d-flex justify-between ${isActive}` }
          >

      <span>{product.cool_capacity}</span> <span className='text-end' style={{ paddingLeft: '50px'  }}>${product.price}</span> {/*call the brand name {product.sub_categories[0]?.title} */}
          </Link>
        </li>
      );
    }
    return null;
  })}
</ul>


  </div>
</div>







     <div className="mt-3">
     <p className=''>Supplied & installed</p>
      <span className="fsz-38 fw-700"><span>$</span>{price} <span className='fsz-14 fw-400'>incl GST</span>  </span>
      <div className='fw-bold fs-6 d-flex flex-column my-3'>
      <span>{cool_capacity} cooling capacity</span>
      <span>{heat_capacity} heating capacity</span>
      </div>
      <p className='short-description fsz-16 single-product-right-col-text'> {title} will suit a room size of approximately {room_size}m². <br /> <span className='fsz-14'>*Price is based on a back to back installation (maximum pipe length 3 metres).</span></p>
     </div>
     <button className='btn-- btn-orange-- '>ENQUIRE NOW</button>
     </div>
     <div>
   
    
     </div>
    </div>
    </div>
   
  {/* Second row */}
     <div className="row single-product-row">
      
     <div className="col-md-8">
       <div className="bg-white p-3 header-nav pt-5" >
    <div className="d-flex flex-row border-bottom" >
    <div className='header-nav-item fw-bold'> <Link to='#'>Gallery<span></span></Link>
    </div>
    <div className='header-nav-item fw-bold'><Link to='#description'>Description</Link><span></span></div>
    <div className='header-nav-item fw-bold'><Link to='#reviews'>Reviews</Link><span></span></div>
    </div>

   
     
    <div className='border-end pt-3'><div id='description'></div><ReactMarkdown children={description} /></div>
     
     <div className='' id='reviews'>
     <p>This is my reviews </p>
     </div>
    </div>
     </div>

     <div className="col-md-4 bg-white">
     <div className='single-product-right-col right-form'>
     
     
     <div className='p-3'>
     <h4 className='fsz-18'>Get your installation quote</h4>
     <form className='border p-2'>
     
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <button type="submit" class="btn btn-primary--">Submit</button>
</form>
     </div>
     </div>
     </div> 

     
     </div>
    
  
   
    </div>
    </Fragment>
  )
}

export const query = graphql`
query GetProducts($slug: String, $brand: String) {
  strapiProduct(slug: {eq: $slug}) {
    title
    price
    id
    model
    image {
      url
    }
    description {
      data {
        description
      }
    }
    
    gallery {
      url
    }
    heat_capacity
    cool_capacity
    room_size
    sub_categories {
      title
    }
  }
 relatedProducts: allStrapiProduct(  filter: {
        sub_categories: {
          elemMatch: { title: { eq: $brand } }
        }
        id: { ne: $slug }
      }
    ) {
      nodes {
        id
        slug
        cool_capacity
        price
         sub_categories {
          title
        }
      }
    }
  }
`
 export default SingleProduct