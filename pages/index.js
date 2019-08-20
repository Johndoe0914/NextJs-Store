import React, { Component } from 'react'

import Layout from '../components/Layout'
import Link from 'next/link'
import Router from 'next/router'

import { Image } from 'semantic-ui-react'
import Carousel from 'semantic-ui-carousel-react'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const token = false

const index = ({}) => {
  let elements = [
    {
      render: () => {
        return (
          <div>
            <Image
              src="https://www.wallpaperflare.com/static/185/27/737/photography-landscape-storm-lightning-wallpaper.jpg"
              width="350px"
              height="350px"
            />
            <Image
              src="https://www.wallpaperflare.com/static/185/27/737/photography-landscape-storm-lightning-wallpaper.jpg"
              width="350px"
              height="350px"
            />
            <Image
              src="https://www.wallpaperflare.com/static/185/27/737/photography-landscape-storm-lightning-wallpaper.jpg"
              width="350px"
              height="350px"
            />
          </div>
        )
      }
    },
    {
      render: () => {
        return (
          <Image
            src="https://www.wallpaperflare.com/static/185/27/737/photography-landscape-storm-lightning-wallpaper.jpg"
            width="350px"
            height="350px"
          />
        )
      }
    },
    {
      render: () => {
        return (
          <Image
            src="https://www.wallpaperflare.com/static/185/27/737/photography-landscape-storm-lightning-wallpaper.jpg"
            width="350px"
            height="350px"
          />
        )
      }
    }
  ]
  return (
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
            style={{ marginBottom: '100px' }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default index
