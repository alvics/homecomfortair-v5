const stripMarkdown = (md = "") =>
  md
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/[#*_`>~]/g, "")
    .replace(/\s+/g, " ")
    .trim()

const absoluteUrl = (url = "") =>
  url.startsWith("http") ? url : `https://homecomfortair.net.au${url}`

export const buildProductSchema = (product, category) => {
  const brand = product.sub_categories?.[0]?.title || ""
  const productUrl = `https://homecomfortair.net.au/products/${product.slug}/`
  const images = (product.gallery || []).map(g => absoluteUrl(g.url))
  const description = stripMarkdown(product.description?.data?.description) ||
    `Supplied & installed ${product.title} air conditioner by Home Comfort Air.`

  const additionalProperty = [
    product.cool_capacity && { "@type": "PropertyValue", name: "Cooling Capacity", value: product.cool_capacity },
    product.heat_capacity && { "@type": "PropertyValue", name: "Heating Capacity", value: product.heat_capacity },
    product.room_size && { "@type": "PropertyValue", name: "Recommended Room Size", value: `${product.room_size}m²` },
  ].filter(Boolean)

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: images,
    description,
    brand: { "@type": "Brand", name: brand },
    sku: product.model || product.slug,
    category,
    url: productUrl,
    ...(additionalProperty.length ? { additionalProperty } : {}),
    ...(typeof product.price === "number" ? {
      offers: {
        "@type": "Offer",
        url: productUrl,
        priceCurrency: "AUD",
        price: String(product.price),
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@type": "Organization", name: "Home Comfort Air" },
      },
    } : {}),
  }
}
