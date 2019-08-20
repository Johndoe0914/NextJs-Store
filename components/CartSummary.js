import StripeCheckout from 'react-stripe-checkout'
import { Button, Segment, Divider } from 'semantic-ui-react'
require('dotenv').config()

export default ({
  handleCheckout,
  display_price: {
    with_tax: { amount, currency, formatted }
  }
}) => (
  <React.Fragment>
    <Divider />
    <Segment clearing size="large">
      <strong>Sub total:</strong> {formatted}
      <StripeCheckout
        name="NextJS Demo Store"
        amount={amount}
        currency={currency}
        stripeKey={
          process.env.STRIPE_PUBLISHABLE_KEY ||
          'pk_test_FAZflFLEBg2lvYARUds1McGu00SgMTAcmn'
        }
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
        <Button color="black" floated="right">
          Check out ->
        </Button>
      </StripeCheckout>
    </Segment>
  </React.Fragment>
)
