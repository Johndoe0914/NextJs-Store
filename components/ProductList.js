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
      <div className="wrapper">
        <div>
          <h1>Heading</h1>
        </div>
        <center>
          <div
            className="productsContainer"
            style={{
              position: 'relative',
              display: 'flex',
              height: 'auto',
              width: '100%'
            }}
          >
            {this.state.products.length > 0
              ? this.state.products.map(product => (
                  <Link href={`/product?id=${product.id}`}>
                    <div
                      key={product.id}
                      className="card"
                      style={{
                        position: 'relative',
                        height: '250px',
                        width: '250px'
                      }}
                    >
                      <div className="productImage">
                        <img
                          src={product.image}
                          alt={product.description}
                          style={{
                            position: 'relative',
                            width: '200px',
                            height: '200px'
                          }}
                        />
                      </div>

                      <div className="productContent">
                        <p>{product.name}</p>
                        <p>{parseInt(product.price)}</p>
                      </div>
                    </div>
                  </Link>
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
