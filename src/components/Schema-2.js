import React from "react";

export default function schema() {
  return (
    <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Home Comfort Air",
    "description": "Gold Coast air conditioning specialists. Supply, installation and servicing of split system, ducted and multi-head air conditioning. Licensed installers with a 5-year warranty.",
    "image": "https://homecomfortair.net.au/static/a480d1793c1eefd2201dfbfc149f4be9/e781a/HCA-2-avatar.png",
    "@id": "https://homecomfortair.net.au/#business",
    "url": "https://homecomfortair.net.au/",
    "telephone": "+61404602657",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "22 Beitz Ave",
      "addressLocality": "Labrador",
      "addressRegion": "QLD",
      "postalCode": "4215",
      "addressCountry": "AU"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "36",
      "bestRating": "5",
      "worstRating": "1"
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
    "areaServed": [
      { "@type": "City", "name": "Gold Coast" },
      { "@type": "City", "name": "Brisbane" },
      { "@type": "City", "name": "Ipswich" },
      { "@type": "City", "name": "Tweed Heads" }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100067867194837"
    ]
  })}
  </script>
  )
}
