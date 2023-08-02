// Single Product Page Template
// Use graphql query to render page
// import ButtonGroup from '../components/Products/ButtonGroup';

import React, { Fragment, useState,  useRef, useEffect } from 'react';

import { graphql, Link } from 'gatsby'
import { useLocation } from '@reach/router';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import GoldStars from '../components/Products/GoldStars';
import MitsubishiArticle from '../components/Mitsubishi-md-query'
import Layout from '../components/Layouts/layout';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
// import RelativeProducts from '../components/Products/Product'


// import KwAccordion from '../components/Products/KwAccordion';


const SingleProduct = ({ data }) => {
  const rightSideRef = useRef(null);
  const otherDivRef = useRef(null);
  const scrollPosition = 500;
  const [isFixed, setIsFixed] = useState(false);
  

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      setIsFixed(currentScroll < scrollPosition);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isFixed) {
      const handleResize = () => {
        const rightSideElement = rightSideRef.current;
        const otherDivElement = otherDivRef.current;

        if (rightSideElement && otherDivElement) {
          const rightSideHeight = rightSideElement.offsetHeight;
          const otherDivPosition = otherDivElement.offsetTop;

          if (otherDivPosition <= rightSideHeight) {
            setIsFixed(false);
          }
        }
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize);
      };
    }
  }, [isFixed]);

/////////////////////////////
const location = useLocation();
  const { pathname } = location;

  const [activeAccordion, setActiveAccordion] = useState('installation');
  
  const toggleAccordion = (eventKey, event) => {
    if (event) {
    event.stopPropagation();
    }

    if (activeAccordion === eventKey) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(eventKey);
    }
  };

  
   const { description } = data.strapiProduct.description.data
   const { title, price, heat_capacity,room_size, model, cool_capacity } = data.strapiProduct
   const  brand = data.strapiProduct.sub_categories[0]?.title || '';
    // const  image2  = data.strapiProduct.image2.url

    function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      className='mt-3'
      style={{ backgroundColor: 'transparent', marginRight:'20px' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


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
  <Layout>
    <div className='container-lg container-fluid-md container-fluid-sm pt-2 '>
       <div className="row single-product-row">


    <div className="col-md-8 bg-white text-center p-4 scrollable-column">
        <div aria-label="breadcrumb" className='my-4'>
  <ol className="breadcrumb">
    <li className="breadcrumb-item fsz-12 text-uppercase text-sm-start"><Link to='/'>Home</Link></li>
    <li className="breadcrumb-item fsz-12 text-uppercase text-sm-start"><Link to="/products">Products</Link></li>
    <li className="breadcrumb-item active fsz-12 text-uppercase text-sm-start" aria-current="page">Split-systems  /  {brand}-{model}</li>
  </ol>
</div>
    <div className='gallery-img-container'>

  
    
   <Carousel images={images} index={2} hasSizeButton={false} hasMediaButton={false} hasIndexBoard={false} hasCaption={true} className='bg-white d-flex img-fluid gallery-img' /> 

    </div>

</div>


    <div className="col-md-4 bg-white p-4 product-page-description">
    <div className={isFixed ? 'single-product-right-col' : ''} ref={rightSideRef} id='right-side-element'>
    <div className="mt-5 text-wrap single-product-right-col-text">
    <h1 className="fsz-18 fw-700 text-wrap shrink-text lh-sm">{title}</h1>
   <GoldStars />
    <div className='pt-2'>
    <div className='text-capitalize shrink-text fsz-16'><span className='fw-600 fsz-16'>Brand:</span> {brand}</div>
      <div className='shrink-text fsz-16'><span className='fw-600 fsz-16'>Model:</span> {model}</div>
    </div>
     
    </div>
     
   
<div>
  <div className="btn-group mt-1 shrink-text">
    <button type="button" className="border border-light--- px-2 pt-1 pb-1 text-black fsz-16 gallery-btn dropdown-toggle-split d-flex justify-between fw-400" data-bs-toggle="dropdown" style={{ width: '220px' }}>
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
      <span className="fsz-38 fw-700 shrink-text position-relative"><span className='fsz-16 position-absolute top-0 start-0 fx-700' style={{marginTop: '5px'}}>$</span><span  className='ml-2'>{price}</span> <span className='fsz-12 fw-400' data-bs-toggle="tooltip" data-bs-placement="top" title="This is the standard retail price at which this exclusive product is offered for sale by home comfort air."><del>SRP {price + 100}</del></span>  </span>
      <div className='fw-bold fsz-16 d-flex flex-column my-3 shrink-text'>
      <span>{cool_capacity} cooling capacity</span>
      <span>{heat_capacity} heating capacity</span>
      </div>
      <p className='short-description fsz-16 single-product-right-col-text shrink-text lh-base'> {title} will suit a room size of approximately {room_size}m². <br /> <span className='fsz-14'>*Price is based on a back to back installation (maximum pipe length 3 metres).</span></p>
     </div>
     <button className='btn-- btn-orange-- shrink-text'>ENQUIRE NOW</button>
     </div>
     <div>
   
    
     </div>
    </div>
    </div>
   
  {/* Second row */}
     <div className="row single-product-row">
      
     <div className="col-md-8">
       <div className="bg-white p-3 header-nav pt-5" >
    <div className="d-flex flex-row" >
    <div className='header-nav-item fw-bold'> <Link to='#'>Gallery<span></span></Link>
    </div>
    <div className='header-nav-item fw-bold'><Link to='#description' variant="link" onClick={() => toggleAccordion('description')} >Description</Link><span></span></div>
    <div className='header-nav-item fw-bold'><Link to='#reviews'>Reviews</Link><span></span></div>
    </div>

 

    {/*  Accordion  */}

     <Accordion defaultActiveKey="0" activeKey={activeAccordion}>
      <Accordion.Item eventKey="installation" activeKey={activeAccordion}>
        <Accordion.Header onClick={(event) => toggleAccordion('installation',event)}>Installation</Accordion.Header>
        <Accordion.Body>
         
        
        <h5 className='fsz-18'>What's included:</h5>
        <p>Your new <span className='text-capitalize'>{ brand }</span> { cool_capacity + " " + model } air conditioning package includes:</p>
         
         <div>
        <ul className="pl-3">
         <li>* Licensed Installers.</li>
         <li>* Back to back installation, up to 3 meters of pipework connecting indoor to outdoor unit for a single story home.</li>

        {cool_capacity <= "5.4" ? ( 
         <li>* Up to 20 meters of electrical cable run in the roof to an existing and available circuit.</li>
        ) : ( <span></span>  )}


        {cool_capacity <= "5.4" ? (
        <li>* New mounted weatherproof safety isolation.</li> ) : (
        <li>* New mounted weatherproof safety isolation switch to existing circuit. <small>(For replacement units only, does NOT include new electrical circuit added. Additional charges may apply).</small> </li> )}
        <li>* PVC ducting to conceal pipe connection and electrical work.</li>
        <li>  {brand === "Toshiba"  ? "* 7 year manufacturer warranty." : "* 5 year manufacturer warranty."}</li> 
        <li>* 5 year Installation warranty.</li>
        </ul>
         </div>

        {/* Additional Charges */}

              <Accordion className='custom-accordion'>
        <Accordion.Item eventKey="add">
          <Accordion.Header id="add-charges">
            <CustomToggle className="custom-btn" onClick={(event) => toggleAccordion('add', event)}>Additional charges may apply <i class="fa-solid fa-chevron-down"></i></CustomToggle>
          </Accordion.Header>
          <Accordion.Body>
            <div className="mb-4">
              <p>The requirements for installation may vary depending on the layout and structure of your house. As a result, some additional costs may apply.</p>
              <p>The most common reasons for additional costs are:</p>
              <ul className="pl-3">
                <li>* Double storey properties.</li>
                <li>* Non back to back installations.</li>
                <li>* Extra piping.</li>
                <li>* Poly slab Installation (if not already present).</li>
                <li>* Brackets (e.g. wall or roof).</li>
                <li>* Mounting blocks.</li>
                <li>* Electrical work (e.g new circuit).</li>
              </ul>
              <small>Note: your installer will explain the reasons and requirements for the additional charges (if there are any) before proceeding.</small>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        {/* End Additional Charges */}

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="description">
        <Accordion.Header onClick={(event) => toggleAccordion('description',event)}>Description</Accordion.Header>
        <Accordion.Body>
         <div className='pt-3 description-container'>
         <div id='description'></div>
         {model === "MSZ-AP" ? <MitsubishiArticle />  : <ReactMarkdown children={description} />}
         </div>
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="spec">
        <Accordion.Header onClick={(event) => toggleAccordion('spec',event)}>Specifications</Accordion.Header>
        <Accordion.Body>
         Here is the PDF for your system
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="warranty">
        <Accordion.Header onClick={(event) => toggleAccordion('warranty',event)}>Warranty</Accordion.Header>
        <Accordion.Body>
         <p>*5 Year manufacturer warranty</p>
         <p>*5 Year installation warranty</p>
         
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    


    {/*  END Accordion  */}

   
     
    
     
     <div className='' id='reviews'   ref={otherDivRef}>
<div id="other-div"></div>
     
     <p>This is my reviews </p>
     </div>
    </div>
     </div>

    

     {/* Product Recommended List */}










      {/* Product Recommended List */}
     </div>
    
      {/* Product Related List */}
      
  <div className='related-products'>
  <h3>Related Products:</h3>
  <div className="container bg-white">
  <div className="row">
    {data.relatedProducts.nodes
      .filter((relatedProduct) =>
        relatedProduct.sub_categories[0]?.title === brand
      )
      .map((relatedProduct) => (
        <div key={relatedProduct.id} className="col-md-2 mb-4">
        <Link to={`/products/${relatedProduct.slug}`} key={relatedProduct.id}>
          <div className="card archive">
          <div className='archive-img' style={{ display: `flex`, justifyContent: `center` }}>  
          <img
              
              src={relatedProduct.image.url}
              className="rounded-t-lg"
              alt={relatedProduct.title}
              loading="lazy" height="250" width="250"
            /></div>
          
            <div className="card-body">
              <h5 className="card-title">{relatedProduct.title}</h5>
              <p className="card-text">Price: ${relatedProduct.price}</p>
            </div>
          </div>
          </Link>
        </div>
        
      ))}
  </div>
  </div>
</div>
   
    </div>
    </Layout>
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
        title
        slug
        cool_capacity
        price
         sub_categories {
          title
        }
         image {
      url
    }
      }
    }
  }
`
 export default SingleProduct