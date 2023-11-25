import React, { Component } from 'react'

export default class Schema extends Component {

    
  render() {

    const Myschema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Air Conditioning", "Installation","Split Systems", "Website"],
  "name": "Home Comfort Air",
  "description":"Air Conditioning Gold Coast - Sales, Installation Service. Browse our affordable reverse cycle split system range",
  "image": "https://homecomfortair.net.au/static/a480d1793c1eefd2201dfbfc149f4be9/e781a/HCA-2-avatar.png",
  "@id":  "https://homecomfortair.net.au/#website",
  "url": "https://homecomfortair.net.au/",
  "telephone": "0404602657",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "22 Beitz Ave",
    "addressLocality": "Labrador",
    "addressRegion": "QLD",
    "postalCode": "4215",
    "addressCountry": "AU"
  },
  "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
      },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.9403803,
    "longitude": 153.3984457
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "17:00"
  },
  "sameAs": "https://www.facebook.com/profile.php?id=100067867194837" 

  }
    return (
      <div><Myschema /></div>
    )
  }
}
