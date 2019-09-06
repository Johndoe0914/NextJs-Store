import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

import Layout from '../components/Layout'
import Link from 'next/link'
import Router from 'next/router'

import { Card, Image, Button } from 'semantic-ui-react'

import NProgress from 'nprogress'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const token = false
const elements = []

export default class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: this.props.products
    }
  }

  componentDidMount() {
    console.log('carousel products', this.state.products)
  }

  render() {
    return (
      <div>
        <div className="pageWrapper">
          <div
            style={{
              position: 'relative'
            }}
          >
            <Image
              style={{ width: '100%', height: '400px' }}
              src="https://thewallpaper.co//wp-content/uploads/2017/09/area-sky-wild-beautiful-view-hd-landscape-wallpaperslandscape-nature-forest-tablet-health-mobile-wallpapers-landscapes.jpg"
            />

            <center>
              <Link href="/shop" prefetch={true} passHref={true}>
                <Button
                  secondary
                  style={{
                    position: 'absolute',
                    margin: '-200px auto auto -40px'
                  }}
                >
                  Shop now ->
                </Button>
              </Link>
            </center>
          </div>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100px',
              marginTop: '50px'
            }}
          >
            <center>
              <h3>Featured Collection</h3>
            </center>
          </div>

          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '400px',

              marginBottom: '150px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          ></div>
        </div>
      </div>
    )
  }
}
