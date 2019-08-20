import React, { Component } from 'react'

import Layout from '../components/Layout'
import Link from 'next/link'
import Router from 'next/router'

import { Image } from 'semantic-ui-react'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const token = false

const index = ({}) => {
  return (
    <Layout>
      <center>
        <div className="pageWrapper">
          {/* <div
        style={{
          position: 'relative',
          backgroundColor: 'black',
          height: '75px'
        }}
      >
        <nav>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'center',
              wordSpacing: '50px',
              color: 'white',
              paddingTop: '30px',
              listStyle: 'none'
            }}
          >
            <li>
              <Link href="/shop">
                <a>Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <h4>
                  <a>LukeWarm</a>
                </h4>
              </Link>
            </li>
            <li>
              <Link href="/cart">
                <a>Cart</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div> */}
          {/* <Menu
        inverted
        fixed="top"
        size="huge"
        style={{
          height: '100px',
          backgroundColor: 'black',

          display: 'flex'
        }}
      >
        <Container text>
          {token ? (
            <Link href="/myaccount" passHref>
              <Menu.Item>My account</Menu.Item>
            </Link>
          ) : (
            [
              // <Link href="/register" passHref prefetch key="register">
              //   <Menu.Item position="left">Shop</Menu.Item>
              // </Link>,
              // <Link href="/login" passHref prefetch key="login">
              //   <Menu.Item position="left">Sign in</Menu.Item>
              // </Link>
            ]
          )}
          <Link href="/register" passHref prefetch key="register">
            <Menu.Item style={{ color: 'Black' }} position="left">
              Shop
            </Menu.Item>
          </Link>
          <Link href="/" prefetch passHref>
            <Menu.Item
              style={{ color: 'Black' }}
              as="a"
              position="right"
              header
            >
              <Image
                size="mini"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTV55jJ9MM--I1MzyvBEOQ6GL--vV94C9mbGx73RFvtEm9QG_zjw"
                style={{ marginRight: '1.5em' }}
              />
              <h3>LukeWarm</h3>
            </Menu.Item>
          </Link>

          <Link href="/cart" passHref>
            <Menu.Item style={{ color: 'Black' }} position="right" name="cart">
              <Icon name="cart" />
              Cart
            </Menu.Item>
          </Link>
        </Container>
      </Menu> */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '300px'
            }}
          >
            <Image
              src="https://www.wallpaperflare.com/static/185/27/737/photography-landscape-storm-lightning-wallpaper.jpg"
              fluid
            />
          </div>

          <h1>Featured Collection</h1>

          <div
            className="featuredCollection"
            style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              backgroundColor: 'red',
              display: 'flex'
            }}
          >
            <div className="card1">
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/61Fc3LRAo4L._SY679_.jpg"
                size="medium"
              />
              <div className="price">$20.00</div>
            </div>
            <div className="card1">
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/61Fc3LRAo4L._SY679_.jpg"
                size="medium"
              />
              <div className="price">$20.00</div>
            </div>
            <div className="card1">
              <Image
                src="https://images-na.ssl-images-amazon.com/images/I/61Fc3LRAo4L._SY679_.jpg"
                size="medium"
              />
              <div className="price">$20.00</div>
            </div>
          </div>
        </div>
      </center>
    </Layout>
  )
}

export default index
