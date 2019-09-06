import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import Footer from './footer'
import { Menu, Image, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

import Header from './Header'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends React.Component {
  state = {
    token: null
  }

  componentDidMount() {
    const token = localStorage.getItem('customerToken')

    const cartId = localStorage.getItem('mcart')

    if (!cartId) {
      const cartId = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, () =>
        ((Math.random() * 16) | 0).toString(16)
      )
      localStorage.setItem('mcart', cartId)
    }

    this.setState({
      token,
      cartId
    })
  }

  render() {
    const { children, title = 'LukeWarm' } = this.props
    const { token } = this.state

    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
          />

          <title>{title}</title>
        </Head>

        <Header token={token} />

        <div
          style={{
            marginTop: '100px',
            marginRight: '75px',
            marginLeft: '75px',
            overflowX: 'hidden'
          }}
        >
          {children}
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}
