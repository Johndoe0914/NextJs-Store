import { Item, Label, Divider } from 'semantic-ui-react'

import AddToCart from './AddToCart'

export default ({ id, image, name, meta, sku, description }) => (
  <div
    style={{
      position: 'relative',
      width: '500px',
      height: '600px',
      margin: '50px auto'
    }}
  >
    <Item.Group>
      <Item>
        <Item.Image size="medium" src={image} />

        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>
            <p>{description}</p>
            <strong>
              {' '}
              <Label>{meta.display_price.with_tax.formatted}</Label>
            </strong>
          </Item.Description>
          <Item.Extra>
            <AddToCart productId={id} />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  </div>
)
