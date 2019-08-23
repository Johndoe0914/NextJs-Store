import Link from 'next/link'
import { Card, Image } from 'semantic-ui-react'
import dynamic from 'next/dynamic'

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
  <center>
    <Card.Group
      style={{
        marginTop: '150px',
        position: 'relative',
        height: '300px',
        width: '700px'
      }}
      items={mapProductsToItems(products)}
      itemsPerRow="3"
      stackable
      centered={true}
    />
  </center>
)
