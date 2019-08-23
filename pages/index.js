import React, { Component } from 'react'

import Layout from '../components/Layout'
import Link from 'next/link'
import Router from 'next/router'
import { GetCollections } from '../lib/moltin'

import { Card, Image, Button } from 'semantic-ui-react'

import Carousel from 'semantic-ui-carousel-react'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const token = false
const elements = []

export default class index extends Component {
  componentDidMount() {
    GetCollections().then(res => {
      const products = res.data[0].relationships.products.data
      console.log(products)
      products.map(({ id, name, image, description, meta }) => {
        const price = meta.display_price.with_tax.formatted || null
        const newElements = {
          render: () => {
            return (
              <div key={id}>
                <Image src={image} width="350px" height="350px" />
                <p>{name}</p>
                <p>{price}</p>
              </div>
            )
          }
        }
        elements.push(newElements)
      })
    })
  }
  render() {
    return (
      <div>
        <Layout>
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
                  <Button secondary style={{ position: 'relative' }}>
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
                backgroundColor: 'green'
              }}
            >
              <Carousel
                elements={elements}
                duration={3000}
                animation="slide right"
                showNextPrev={true}
                showIndicators={true}
                style={{}}
              />
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
