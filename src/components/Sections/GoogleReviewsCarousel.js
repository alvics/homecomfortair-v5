import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const GOOGLE_URL = 'https://www.google.com/search?q=home+comfort+air#lrd=0x6b914f51f3fca14b:0xf7e3f0a4a4b4e4a4,1';

const StarRating = ({ rating }) => {
  const r = parseInt(rating, 10) || 0;
  return (
    <div className="sp-review-stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill={star <= r ? '#f59e0b' : '#e5e7eb'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const DUCTED_SIZE_GUIDE = [
  {
    label: 'Small Home',
    example: '2–3 Bed / Apartment',
    size: '5 outlets',
    kw: '8kW',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="4" y="20" width="72" height="36" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <path d="M4 32 L40 8 L76 32" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="30" y="38" width="20" height="18" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="12" y="38" width="14" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="54" y="38" width="14" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Medium Home',
    example: '3–4 Bed',
    size: '6–8 outlets',
    kw: '12.5kW',
    color: '#16a34a',
    bg: '#f0fdf4',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="4" y="22" width="72" height="34" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <path d="M4 34 L40 6 L76 34" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="28" y="40" width="24" height="16" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="8" y="40" width="16" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="56" y="40" width="16" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="28" y="30" width="10" height="12" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="42" y="30" width="10" height="12" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Large Home',
    example: '4–5 Bed',
    size: '8–10 outlets',
    kw: '14–16kW',
    color: '#ea580c',
    bg: '#fff7ed',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="2" y="24" width="76" height="32" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <path d="M2 36 L40 4 L78 36" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="26" y="38" width="28" height="18" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="4" y="38" width="18" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="58" y="38" width="18" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="26" y="28" width="12" height="12" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="42" y="28" width="12" height="12" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Extra Large',
    example: '5+ Bed / Large Home',
    size: '10+ outlets',
    kw: '20–25kW',
    color: '#7c3aed',
    bg: '#faf5ff',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="2" y="24" width="76" height="32" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <path d="M2 36 L40 4 L78 36" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="24" y="38" width="32" height="18" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="2" y="38" width="18" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="60" y="38" width="18" height="10" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="24" y="26" width="12" height="14" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="44" y="26" width="12" height="14" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const SIZE_GUIDE = [
  {
    label: 'Small Room',
    example: 'Bedroom / Study',
    size: 'Up to 20m²',
    kw: '2.6kW',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="4" y="4" width="72" height="52" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="10" y="22" width="26" height="20" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="12" y="20" width="10" height="4" rx="1" fill="#cbd5e1"/>
        <rect x="24" y="20" width="10" height="4" rx="1" fill="#cbd5e1"/>
        <rect x="42" y="30" width="22" height="12" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="66" cy="10" r="4" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="66" y1="14" x2="66" y2="22" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Medium Room',
    example: 'Lounge / Dining',
    size: '20 – 30m²',
    kw: '3.5kW',
    color: '#16a34a',
    bg: '#f0fdf4',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="4" y="4" width="72" height="52" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="10" y="28" width="42" height="18" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="10" y="22" width="14" height="8" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="38" y="22" width="14" height="8" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="56" y="30" width="14" height="10" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="58" y="18" width="10" height="14" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="18" cy="10" r="4" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="40" cy="10" r="4" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Large Room',
    example: 'Open Plan Living',
    size: '30 – 45m²',
    kw: '5 – 6kW',
    color: '#ea580c',
    bg: '#fff7ed',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="4" y="4" width="72" height="52" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="8" y="26" width="36" height="20" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="8" y="20" width="10" height="8" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="22" y="20" width="10" height="8" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="48" y="26" width="24" height="14" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="50" y="14" width="20" height="14" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="54" y1="18" x2="66" y2="18" stroke="#94a3b8" strokeWidth="1"/>
        <line x1="54" y1="21" x2="66" y2="21" stroke="#94a3b8" strokeWidth="1"/>
        <circle cx="20" cy="10" r="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="36" cy="10" r="3" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: 'Extra Large',
    example: 'Large Open Plan',
    size: '45 – 65m²',
    kw: '7 – 8kW',
    color: '#7c3aed',
    bg: '#faf5ff',
    icon: (
      <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="54">
        <rect x="4" y="4" width="72" height="52" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="8" y="28" width="30" height="18" rx="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="8" y="22" width="10" height="8" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="22" y="22" width="10" height="8" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="42" y="28" width="16" height="18" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="60" y="28" width="12" height="18" rx="2" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="44" y="14" width="26" height="16" rx="1" stroke="#94a3b8" strokeWidth="1.5"/>
        <line x1="48" y1="18" x2="66" y2="18" stroke="#94a3b8" strokeWidth="1"/>
        <line x1="48" y1="22" x2="66" y2="22" stroke="#94a3b8" strokeWidth="1"/>
        <circle cx="16" cy="10" r="3" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="30" cy="10" r="3" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

const STATIC_REVIEWS = [
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
  },
  {
    node: {
      id: 'static-5',
      author_name: 'Jason Tran',
      rating: 5,
      text: 'Highly recommend Allen and the team. Got a great deal on a Daikin split system and the install was super clean. Turned up on time, explained everything and left no mess. Will be using again.',
      relative_time_description: '3 months ago',
      profile_photo_url: 'https://ui-avatars.com/api/?name=Jason+Tran&background=16a34a&color=fff&rounded=true',
    }
  },
  {
    node: {
      id: 'static-6',
      author_name: 'Karen Mitchell',
      rating: 5,
      text: "Excellent service from start to finish. Very competitive pricing and the quality of the installation was outstanding. Allen was punctual, professional and friendly. Couldn't be happier!",
      relative_time_description: '4 months ago',
      profile_photo_url: 'https://ui-avatars.com/api/?name=Karen+Mitchell&background=be185d&color=fff&rounded=true',
    }
  },
  {
    node: {
      id: 'static-7',
      author_name: 'Chris Nguyen',
      rating: 5,
      text: 'Best price I found after getting 4 quotes. The install was done quickly and neatly. Allen is very knowledgeable and took the time to answer all my questions. 100% recommend.',
      relative_time_description: '5 months ago',
      profile_photo_url: 'https://ui-avatars.com/api/?name=Chris+Nguyen&background=b45309&color=fff&rounded=true',
    }
  },
  {
    node: {
      id: 'static-8',
      author_name: 'Tracey Walters',
      rating: 5,
      text: 'Had two units installed at our place. Allen was very professional and the job was completed without any fuss. The price was very reasonable and I will definitely use Home Comfort Air again.',
      relative_time_description: '6 months ago',
      profile_photo_url: 'https://ui-avatars.com/api/?name=Tracey+Walters&background=0e7490&color=fff&rounded=true',
    }
  },
];

const GoogleReviewsCarousel = ({ mode }) => {
  const guide = mode === 'ducted' ? DUCTED_SIZE_GUIDE : SIZE_GUIDE;
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
            profile_photo_url
          }
        }
      }
    }
  `);

  const reviews = [...data.allGoogleReview.edges, ...STATIC_REVIEWS];

  // Group into pairs for 2-per-slide
  const chunks = [];
  for (let i = 0; i < reviews.length; i += 2) {
    chunks.push(reviews.slice(i, i + 2));
  }

  return (
    <div className="sp-reviews-section" id="reviews">
      {/* Heading */}
      <div className="sp-reviews-heading-row">
        <h5 className="sp-section-heading">Customer Reviews</h5>
      </div>

      {/* Google rating badge — centred */}
      <div className="sp-grbadge-wrap">
        <a
          href={GOOGLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="sp-google-rating-badge"
        >
          <svg viewBox="0 0 24 24" width="22" height="22" style={{ flexShrink: 0 }}>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <div className="sp-grbadge-stars">
            {[1,2,3,4,5].map(i => (
              <span key={i} style={{ color: '#f59e0b', fontSize: '18px', lineHeight: 1 }}>★</span>
            ))}
          </div>
          <div className="sp-grbadge-info">
            <span className="sp-grbadge-score">5.0</span>
            <span className="sp-grbadge-count">36 Google Reviews</span>
          </div>
        </a>
      </div>

      {/* Carousel — 2 cards per slide */}
      <Carousel
        autoPlay
        infiniteLoop
        useKeyboardArrows
        swipeable
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        className="sp-reviews-carousel"
      >
        {chunks.map((chunk, index) => (
          <div key={index} className="sp-review-grid">
            {chunk.map((review) => (
              <a
                key={review.node.id}
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-review-card"
              >
                <div className="sp-review-header">
                  <img
                    src={review.node.profile_photo_url}
                    alt={review.node.author_name}
                    className="sp-review-avatar"
                  />
                  <div className="sp-review-meta">
                    <p className="sp-review-name">{review.node.author_name}</p>
                    <StarRating rating={review.node.rating} />
                    <p className="sp-review-time">{review.node.relative_time_description}</p>
                  </div>
                </div>
                <p className="sp-review-text">"{review.node.text}"</p>
              </a>
            ))}
          </div>
        ))}
      </Carousel>

      {/* Size guide */}
      <div className="sp-size-guide">
        <div className="sp-size-guide-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0,117,201)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>Air Conditioner Buying Guide</span>
        </div>
        <div className="sp-size-guide-grid">
          {guide.map((row) => (
            <div key={row.kw} className="sp-sg-card" style={{ '--sg-color': row.color, '--sg-bg': row.bg }}>
              <div className="sp-sg-icon">{row.icon}</div>
              <div className="sp-sg-body">
                <p className="sp-sg-label">{row.label}</p>
                <p className="sp-sg-example">{row.example}</p>
                <p className="sp-sg-size">{row.size}</p>
                <span className="sp-sg-kw">{row.kw}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="sp-sg-note">* Approximate guide only. {mode === 'ducted' ? 'Number of outlets, home layout, and insulation affect the ideal system size.' : 'Insulation, ceiling height, and sun exposure affect the ideal size.'}</p>
      </div>

      {/* Override carousel's global img { width: 100% } for avatars */}
      <style>{`
        .sp-reviews-carousel .sp-review-avatar {
          width: 44px !important;
          height: 44px !important;
          max-width: 44px !important;
          border-radius: 50% !important;
          object-fit: cover !important;
          flex-shrink: 0 !important;
        }
        .sp-review-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding: 4px 4px 8px;
          text-align: left;
        }
        @media (max-width: 600px) {
          .sp-review-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default GoogleReviewsCarousel;
