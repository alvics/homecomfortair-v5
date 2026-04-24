import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const StarRating = ({ rating }) => (
  <div style={{ display: 'flex', gap: '2px', justifyContent: 'center' }}>
    {[1, 2, 3, 4, 5].map(i => (
      <span key={i} style={{ fontSize: '18px', color: i <= Math.round(rating) ? '#f59e0b' : '#d1d5db', lineHeight: 1 }}>★</span>
    ))}
  </div>
);

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=home+comfort+air#lrd=0x0:0x0,1';

const ReviewCard = ({ review }) => (
  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="review-card">
    <div className="review-quote">"</div>
    <p className="review-text">{review.text}</p>
    <div style={{ margin: '10px 0 8px' }}>
      <StarRating rating={review.rating} />
    </div>
    <div className="review-author">
      <img src={review.profile_photo_url} alt={review.author_name} className="review-avatar" />
      <div>
        <div className="review-name">{review.author_name}</div>
        <div className="review-time">{review.relative_time_description}</div>
      </div>
      <div className="review-google-badge">
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
    </div>
  </a>
);

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

  const staticReviews = [
    {
      node: {
        id: 'static-1',
        author_name: 'Susan Baxter',
        rating: 5,
        text: 'We would recommend Home Comfort Air. Price wise and efficiency. They cleaned up and showed us how to operate the remote. Very pleased with the result.',
        relative_time_description: '5 weeks ago',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Susan+Baxter&background=0075c9&color=fff&rounded=true',
      }
    },
    {
      node: {
        id: 'static-2',
        author_name: 'Derek Halstead',
        rating: 5,
        text: 'Allen did a great job installing the split system. Professional from start to finish and well priced.',
        relative_time_description: '6 weeks ago',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Derek+Halstead&background=00c4b3&color=fff&rounded=true',
      }
    },
    {
      node: {
        id: 'static-3',
        author_name: 'Melissa Saena',
        rating: 5,
        text: 'We had a split system aircon installed and an existing unit moved from the ground, onto a wall bracket. Prompt communication, punctual attendance, reliable, great price and professional job. Thank you.',
        relative_time_description: '18 weeks ago',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Melissa+Saena&background=7c3aed&color=fff&rounded=true',
      }
    },
    {
      node: {
        id: 'static-4',
        author_name: 'Rebecca Ullman',
        rating: 5,
        text: 'Allen was fantastic. From query to installation was less than two weeks - and that was due to tenant availability he could have done it sooner. 5 stars for communication and value. Highly recommended.',
        relative_time_description: '27 weeks ago',
        profile_photo_url: 'https://ui-avatars.com/api/?name=Rebecca+Ullman&background=ea580c&color=fff&rounded=true',
      }
    }
  ];

  const reviews = [...data.allGoogleReview.edges, ...staticReviews];

  // Group reviews into chunks of 3
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < reviews.length; i += chunkSize) {
    chunks.push(reviews.slice(i, i + chunkSize));
  }

  return (
    <div style={{ padding: '8px 0 32px' }}>

      <div className="section-heading">
        <h2 className="section-title">What Our Customers Say</h2>
      </div>

      <a
        href="https://www.google.com/search?q=home+comfort+air#lrd=0x0:0x0,1"
        target="_blank"
        rel="noopener noreferrer"
        className="google-rating-badge"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" style={{ flexShrink: 0 }}>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <div className="google-rating-stars">
          {[1,2,3,4,5].map(i => (
            <span key={i} style={{ color: '#f59e0b', fontSize: '22px', lineHeight: 1 }}>★</span>
          ))}
        </div>
        <div className="google-rating-info">
          <span className="google-rating-score">5.0</span>
          <span className="google-rating-count">36 Google Reviews</span>
        </div>
      </a>

      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        interval={6000}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        swipeable
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="reviews-grid">
            {chunk.map(({ node: review }) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ))}
      </Carousel>

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding: 8px 8px 32px;
          align-items: stretch;
          grid-auto-rows: 1fr;
        }
        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .review-card {
          background: #fff;
          border-radius: 14px;
          padding: 24px 20px 20px;
          box-shadow: 0 2px 12px rgba(4, 21, 33, 0.08);
          border: 1px solid #eef1f5;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          height: 100%;
          text-decoration: none;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .review-card:hover {
          box-shadow: 0 6px 24px rgba(4, 21, 33, 0.13);
          transform: translateY(-3px);
        }
        .review-quote {
          font-size: 52px;
          line-height: 0.6;
          color: rgb(0, 117, 201);
          opacity: 0.2;
          font-family: Georgia, serif;
          margin-bottom: 10px;
          flex-shrink: 0;
        }
        .review-text {
          font-size: 14px !important;
          color: #374151 !important;
          line-height: 1.6 !important;
          margin: 0 auto 4px !important;
          text-align: center;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .review-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
        }
        .review-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #e5e7eb;
          margin: 0 !important;
          padding: 0 !important;
        }
        .review-name {
          font-size: 13px !important;
          font-weight: 700;
          color: #041521 !important;
          text-align: left;
          line-height: 1.2;
        }
        .review-time {
          font-size: 11px !important;
          color: #9ca3af !important;
          text-align: left;
          white-space: nowrap;
        }
        .review-google-badge {
          margin-left: 2px;
          opacity: 0.8;
        }
        .google-rating-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 auto 28px;
          background: #fff;
          border: 1px solid #eef1f5;
          border-radius: 40px;
          padding: 10px 24px;
          width: fit-content;
          box-shadow: 0 2px 10px rgba(4, 21, 33, 0.07);
          text-decoration: none;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .google-rating-badge:hover {
          box-shadow: 0 4px 20px rgba(4, 21, 33, 0.13);
          transform: translateY(-2px);
        }
        .google-rating-stars {
          display: flex;
          gap: 1px;
        }
        .google-rating-info {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .google-rating-score {
          font-size: 1.1rem;
          font-weight: 800;
          color: #041521;
        }
        .google-rating-count {
          font-size: 0.75rem;
          color: #6b7280;
          white-space: nowrap;
        }
        :global(.carousel .control-arrow) {
          opacity: 1 !important;
          background: rgba(4, 21, 33, 0.4) !important;
          border-radius: 4px;
          transition: background 0.2s ease;
        }
        :global(.carousel .control-arrow:hover) {
          background: rgba(4, 21, 33, 0.75) !important;
        }
      `}</style>

    </div>
  );
};

export default GoogleReviewsCarousel;
