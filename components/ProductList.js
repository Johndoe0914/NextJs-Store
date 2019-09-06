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
          width: '100%x',
          marginBottom: '100px'
        }}
      >
        <div>{/* <h1>Heading</h1> */}</div>

        <center>
          <div
            className="productsContainer"
            style={{
              display: 'flex',
              width: '1000px',
              height: 'auto',
              marginTop: '50px',

              justifyContent: 'space-between',
              flexWrap: 'wrap',
              padding: '10px'
            }}
          >
            {this.state.products.length > 0
              ? this.state.products.map(product => (
                  // <Link href={`/product?id=${product.id}`}>

                  <Card
                    href={`/product?id=${product.id}`}
                    centered
                    style={{
                      height: '140px',
                      width: '310px',
                      marginBottom: '130px',
                      flex: '0 2 23%'
                    }}
                  >
                    <Image
                      src={product.image}
                      wrapped
                      width="300px"
                      height="140px"
                    />
                    <Card.Content>
                      <Card.Header>{product.name}</Card.Header>
                      <Card.Meta>
                        {product.meta.display_price.without_tax.formatted}
                      </Card.Meta>
                    </Card.Content>
                  </Card>

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
