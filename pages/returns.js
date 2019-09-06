import React, { Component } from 'react'
import Layout from '../components/Layout'

export default class returns extends Component {
  render() {
    return (
      <Layout>
        <div style={{ width: '800px', height: 'auto', margin: 'auto' }}>
          <center>
            <h3> RETURN POLICY</h3>
            <hr />
          </center>
          <p style={{ marginBottom: '100px' }}>
            If you’re looking to return or exchange your order for whatever
            reason, we're here to help! We offer free returns within 30 days of
            receiving your order. You can return your product for store credit,
            a different product, or a refund to the original payment method.
            Please note the following exceptions to our return policy: Below are
            some examples of common exceptions. Discounted items are final and
            cannot be returned or exchanged Returned items must have tags still
            on and be returned in original packaging Returned items must have no
            visible signs of wear or use To initiate a return or exchange,
            please complete the following steps: Your steps should be laid out
            clearly, linking to relevant pages, such as your online portal.
            Login to our online return portal using your email address and order
            ID Choose the products you wish to return or exchange from your
            order Print your prepaid shipping label that you will receive by
            email Send all items back to us using the label provided Additional
            Information: The following are add-ons with more information that
            you may want to include. How long it takes to receive your refund,
            replacement product, or store credit Any shipping fees the customer
            will need to pay Any return restocking fees the customer will need
            to pay How you handle lost or damaged returns Contact information
            for your business if the customer has more question
          </p>
        </div>
      </Layout>
    )
  }
}
