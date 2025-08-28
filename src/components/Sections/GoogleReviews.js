import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StaticImage from '../StaticQueryImages';

// A simple component to render star ratings based on a number
const StarRating = ({ rating }) => {
  const stars = [];
  // Render full stars for the integer part of the rating
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<span key={i} className="text-yellow-400">★</span>);
  }
  // Render an empty star if there's a remainder (e.g., 4.5)
  if (rating % 1 !== 0) {
    stars.push(<span key="half" className="text-yellow-400">☆</span>);
  }
  // Fill the rest with empty stars up to 5
  while (stars.length < 5) {
    stars.push(<span key={stars.length} className="text-gray-300">★</span>);
  }
  return <div>{stars}</div>;
};

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
      <div>

        {/* Original Heading Box */}
        <div className="heading-box-color heading-avatar heading-avatar rounded row d-flex align-items-center mb-2 mx-0">
              <div className="col-sm-3 col-lg-2 pt-2 pb-1 px-4 m-auto">
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
        
        {/* Carousel */}
        <Carousel 
          autoPlay 
          infiniteLoop
          showArrows={true}
          interval={5000} // Set the interval to 5 seconds
          centerMode={false} // Disable center mode for single card view
          showThumbs={false}
          showStatus={false}
          useKeyboardArrows 
          swipeable 
          className='bg-white rounded-xl shadow-lg border border-gray-200'
        >
          {reviews.map(({ node: review }) => (
            <div key={review.id} className="p-4 text-center flex flex-col items-center">
              <div className="mb-2">
                <img
                  src={review.profile_photo_url}
                  alt={review.author_name}
                  className="w-12 h-12 rounded-full mx-auto shadow-md"
                />
              </div>
              
              <div className="mb-2">
                <h4 className="text-md font-semibold text-gray-800">{review.author_name}</h4>
                <div className="mt-1 mb-1">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-xs text-gray-500">{review.relative_time_description}</p>
              </div>

              <div className="max-w-xl mx-auto">
                <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <style jsx>{`
        /* Responsive adjustments for mobile screens */
        @media (max-width: 768px) {
          .carousel .slide {
            width: 100% !important; /* Show one card at a time on small screens */
            margin: 0; /* Remove horizontal margin */
            padding: 0 1rem;
          }
          .carousel .carousel-status {
            display: none !important; /* Hide status dots on mobile */
          }
        }
        /* Custom arrow styling to make them always visible and positioned correctly */
        :global(.carousel .control-arrow) {
          opacity: 1 !important;
          background: rgba(0, 0, 0, 0.5) !important;
          transition: all 0.25s ease-in;
        }
        :global(.carousel .control-arrow:hover) {
          background: rgba(0, 0, 0, 0.8) !important;
        }
        :global(.carousel .control-prev.control-arrow) {
          left: 0;
        }
        :global(.carousel .control-next.control-arrow) {
          right: 0;
        }
      `}</style>
    </div>
  );
};

export default GoogleReviewsCarousel;
