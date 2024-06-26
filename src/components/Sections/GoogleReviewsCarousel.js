import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StaticImage from '../StaticQueryImages';

const GoogleReviewsCarousel = () => {
  const data = useStaticQuery(graphql`
     query {
      allGoogleReview {
        edges {
          node {
            author_name
            id
            rating
            text
            relative_time_description
            language
            position
            profile_photo_url
          }
        }
      }
    }
  `);

  const reviews = data.allGoogleReview.edges;

  return (
    <div>
    <div className="heading-box-color heading-avatar heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 px-4 m-auto">
                <StaticImage
                  filename="HCA-avatar-WHITE-1400.png"
                  alt="home comfort air image"
                />
              </div>
              <div className="col">
                <h3 className="h2 fw-600 mt-2">
                   Our Customer Reviews
                </h3>
              </div>
            </div>
    <Carousel autoPlay useKeyboardArrows swipeable className='bg-white carousel-card my-1 border'>
      {reviews.map((review) => {
    

        return (
          <div key={review.node.id} className="review-item">
            <div className="author-info pt-3">
            <div className='py-2'>
             <img
                style={{width: 40}}
                src={review.node.profile_photo_url}
                alt={review.node.author_name}
                className="profile-photo"
              />
            </div>
             
              <div>
                <h4>{review.node.author_name}</h4>

                <div className='d-flex justify-content-center' style={{ marginTop: -22}}>
                  <p className='rating' style={{width: 70, display:'block',height:20 }}></p>
                </div> 

                <p className=''><small className="text-muted" >{review.node.relative_time_description}</small>
                </p>

                 <small>
                    <p className="mb-2 d-flex justify-content-center lh-1" style={{ marginTop: -25}}>
                      <span style={{ color: `#5B5B66`, fontWeight:'bold'}}>Positive: </span>  <small style={{marginTop:3}} className="text-muted pl-1 "> Professionalism, Punctuality, Quality, Responsiveness, Value
                     </small>
                    </p>
            
            
          </small>
      
              </div>
              <div className='pb-5'>
                <p>{review.node.text}</p>
              </div>
              
             </div>
            
            
          </div>
        );
      })}
    </Carousel>
    </div>
  );
};

export default GoogleReviewsCarousel;
