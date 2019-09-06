import React, { Fragment } from 'react'
import Link from 'next/link'

const Footer = () => (
  <Fragment>
    <footer
      style={{
        position: 'relative',
        height: '175px',
        width: '100%',
        color: 'white',
        backgroundColor: 'black',
        marginBottom: '0%'
      }}
    >
      <div style={{ paddingLeft: '100px', paddingTop: '50px' }}>
        <p>Helpful Links</p>

        <ul>
          <li>
            <Link href="/returns">
              <a>Shipping and returns</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a>Terms and Condition</a>
            </Link>
          </li>
        </ul>
      </div>
      <center>
        <div>All rights reserved (c) 2019 LukeWarm.</div>
      </center>
      <div
        style={{ float: 'right', marginTop: '-105px', marginRight: '100px' }}
      >
        <p>Social links</p>
        <ul>
          <li>
            <Link href="/">
              <a>Instagram</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </Fragment>
)

export default Footer
