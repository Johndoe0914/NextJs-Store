import Link from 'next/link'
import { Card, Image, Responsive, Segment } from 'semantic-ui-react'
import dynamic from 'next/dynamic'

import React, { Component } from 'react'
import { parse } from 'path'

export default class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: this.props.products
    }
  }
  componentDidMount() {
    console.log('State', this.state)
  }
  render() {
    return (
      <div
        className="wrapper"
        style={{
          position: 'relative',
          height: 'auto',
          width: '100%',
          marginBottom: '100px'
        }}
      >
        <div>
          <h1>Heading</h1>
        </div>

        <center>
          <div
            className="productsContainer"
            style={{
              position: 'relative',
              display: 'flex',
              width: '1000px',
              height: 'auto',
              marginTop: '50px'
            }}
          >
            {this.state.products.length > 0
              ? this.state.products.map(product => (
                  // <Link href={`/product?id=${product.id}`}>
                  <div>
                    <Card
                      href={`/product?id=${product.id}`}
                      style={{
                        height: '140px',
                        width: '200px',
                        marginBottom: '130px'
                      }}
                    >
                      <Image
                        src={product.image}
                        wrapped
                        width="200px"
                        height="140px"
                      />
                      <Card.Content>
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Meta>{product.price.toString()}</Card.Meta>
                      </Card.Content>
                    </Card>
                  </div>
                  // </Link>
                ))
              : null}
          </div>
        </center>
      </div>
    )
  }
}

const mapProductsToItems = products =>
  products.map(({ id, name, image, description, meta }) => {
    const price = meta.display_price.with_tax.formatted || null

    return {
      childKey: id,
      image,
      header: name,
      meta: price,
      href: `/product?id=${id}`
    }
  })

// export default ({ products }) => (
//   <Responsive as={Segment}>
//     <center>
//     <Card.Group
//       style={{
//         marginTop: '150px',
//         position: 'relative',
//         height: 'auto',
//         width: '850px',
//         paddingBottom: '-10px'
//       }}
//       items={mapProductsToItems(products)}
//       itemsPerRow="3"
//       stackable
//     />
//   </center>
//   </Responsive>
// )
