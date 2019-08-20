import React, { Fragment } from 'react'
import Link from 'next/link'

const Footer = () => (
  <Fragment>
    <footer
      style={{
        position: 'relative',
        height: '175px',
        color: 'white',
        backgroundColor: 'black',
        marginTop: '250px'
      }}
    >
      <div style={{ paddingLeft: '100px', paddingTop: '50px' }}>
        <p>Helpful Links</p>
        <hr />
        <ul>
          <li>
            <Link href="/returns">
              <a>Shipping and returns</a>
            </Link>
          </li>
          <li>
            <Link href="/policy">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  </Fragment>
)

export default Footer
