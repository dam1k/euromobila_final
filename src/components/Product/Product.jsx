import React from 'react'
import {urlFor} from "../../client"
import "./Product.scss"
import { Link } from 'react-router-dom'


const Product = ({product}) => {
  const {images, name, _id} = product;
   const image = images ? `${images[0].asset._ref}` : null
  return (
    <div className="product-box-wrapper">
    <div className="product-box">
      {image && <Link to={`${_id}`}><img src={urlFor(image).url()} loading='lazy'/></Link>}
      <div className="product-box-info">
      <Link to={`${_id}`} className="product-name">{name}</Link>
      </div>
    </div>
    </div>
  )
}

export default Product