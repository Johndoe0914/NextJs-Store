import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

import { getProducts } from '../lib/moltin'

const Shop = ({ products }) => (
  <Layout title="Shop">
    <ProductList products={products} />
  </Layout>
)

Shop.getInitialProps = async () => {
  const { data, included } = await getProducts()

  const products = data.map(product => {
    const imageId = product.relationships.main_image
      ? product.relationships.main_image.data.id
      : false

    return {
      ...product,
      image: imageId
        ? included.main_images.find(img => img.id === imageId).link.href
        : '/static/moltin-light-hex.svg'
    }
  })

  return {
    products
  }
}

export default Shop
