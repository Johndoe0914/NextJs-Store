import Link from 'next/link'
import { Card, Image } from 'semantic-ui-react'

const mapProductsToItems = products =>
  products.map(({ id, name, image, description, meta }) => {
    const price = meta.display_price.with_tax.formatted || null

    return {
      childKey: id,
      image,
      header: name,
      meta: price,
      fluid: true,
      href: `/product?id=${id}`
    }
  })

export default ({ products }) => (
  <Card.Group
    style={{
      marginTop: '100px',
      position: 'relative',
      height: '450px',
      width: '900px'
    }}
    items={mapProductsToItems(products)}
    itemsPerRow="4"
    stackable
  />
)