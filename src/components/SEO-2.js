import React, { Fragment } from "react"

const DEFAULT_TITLE = "Gold Coast Air Conditioning | Supply & Install | Home Comfort Air"
const DEFAULT_DESC = "Gold Coast air conditioning specialists. Supply, installation & servicing of split system, ducted & multi-head air conditioning. Licensed installers with a 5-year warranty."
const DEFAULT_URL = "https://homecomfortair.net.au/"
const DEFAULT_IMAGE = "https://res.cloudinary.com/ewebdesigns/image/upload/v1597993348/facebook-cover-3_rzv8bs.png"

export default function newSeo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  url = DEFAULT_URL,
  image = DEFAULT_IMAGE,
} = {}) {
  return (
    <Fragment>
      <link rel="canonical" href={url} />
      <meta property="og:locale" content="en_AU" />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Home Comfort Air" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="300" />
      <meta property="article:publisher" content="https://www.facebook.com/Home-Comfort-Air" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="HOME COMFORT AIR" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="theme-color" content="#0075c9" />
    </Fragment>
  )
}
