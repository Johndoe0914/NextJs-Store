import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Menu, Container, Image, Icon } from 'semantic-ui-react'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default ({ token }) => (
  <React.Fragment>
    <Head style={{ positon: 'relative', height: '300px' }}>
      <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    </Head>
    <Menu
      inverted
      fixed="top"
      size="huge"
      style={{ height: '100px', backgroundColor: 'white' }}
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
        <Link href="/shop" passHref prefetch={true}>
          <Menu.Item style={{ color: 'Black' }} position="left">
            Shop
          </Menu.Item>
        </Link>
        <Link href="/" prefetch={true} passHref>
          <center>
            {' '}
            <Menu.Item style={{ color: 'Black' }} as="a" header>
              <Image
                size="mini"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTV55jJ9MM--I1MzyvBEOQ6GL--vV94C9mbGx73RFvtEm9QG_zjw"
                style={{ marginRight: '1.5em' }}
              />
              <h3>LukeWarm</h3>
            </Menu.Item>
          </center>
        </Link>

        <Link href="/cart" passHref prefetch={true}>
          <Menu.Item style={{ color: 'Black' }} position="right" name="cart">
            <Icon name="cart" />
            Cart
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  </React.Fragment>
)
