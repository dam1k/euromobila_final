import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import product from './product'
import banner from "./banner"
import categoryType from "./categoryType"
import categoryInfo from "./categoryInfo"
import stofa from "./stofa"
import productInfo from './productInfo'
import shipping from "./shipping"
// import siteSettings from "./siteSettings"
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    product,
    banner,
    categoryType,
    categoryInfo,
    stofa,
    productInfo,
    shipping
  ]),
})
