import { Header, Divider, Table, Image } from 'semantic-ui-react'
import { Carousel } from 'semantic-ui-carousel-react'
import React, { Component } from 'react'

export default class ProductAttributes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      similarProducts: this.props.products
    }
  }
  componentDidMount() {
    console.log('similar products', this.props)
  }
  render() {
    return (
      <div>
        {/* <Carousel
          elements={elements}
          duration={3000}
          animation="slide right"
          showNextPrev={true}
          showIndicators={true}
          style={{}}
        /> */}
      </div>
    )
  }
}

let elements = [
  {
    render: () => {
      return (
        <Image src="http://theactivephotographer.com/wp-content/uploads/2012/07/TAP_Ad_300x300.jpg" />
      )
    }
  },
  {
    render: () => {
      return (
        <Image src="http://theactivephotographer.com/wp-content/uploads/2012/07/TAP_Ad_300x300.jpg" />
      )
    }
  }
]
