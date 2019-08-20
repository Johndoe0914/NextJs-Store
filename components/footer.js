import React, { Fragment } from 'react'
import Link from 'next/link'

const Footer = () => (
  <Fragment>
    <footer
      style={{
        position: 'absolute',
        height: '175px',
        width: '100%',
        color: 'white',
        backgroundColor: 'black',
        marginBottom: '0',
        marginTop: '100px'
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
