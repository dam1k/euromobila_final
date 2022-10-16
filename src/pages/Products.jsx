import React from 'react'
import {client} from "../client"
import {useState, useEffect} from "react"
import { searchByCategoryQuery, 
  filterByPrice,
  filterByName
} from '../utils/data'
import {useParams} from "react-router-dom"
import Product from '../components/Product/Product'
import "./Products.scss"

const Products = () => {
const {categoryType} = useParams()

const [products, setProducts] = useState(null)

  useEffect(() => {
    const query = searchByCategoryQuery(categoryType)
    
    client.fetch(query)
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  }, [])

  function handleSort(e) {
    switch(e.target.value) {
      case 'asc-price':
      sort(filterByPrice, 'asc')
      break;

      case 'desc-price':
      sort(filterByPrice, 'desc')
      break;

      case 'AToZ':
      sort(filterByName, 'asc')
      break;

      case 'ZToA':
      sort(filterByName, 'desc');
      break;
    }
  }

  function sort(sortQuery, order) {
      const query = sortQuery(categoryType)

      client.fetch(query)
      .then(data => {
        if(order === 'asc') {
          setProducts(data)
        } else if(order === 'desc') {
          setProducts(data.reverse())
        }
      })
      .catch(err => console.log(err))
    }  

  

  return (
    <div className="container">
      <div className="filter-container">
      <select onChange={(e) => handleSort(e)} id="filter">
        <option value="asc-price">Preț: cel mai mic primul</option>
        <option value="desc-price">Preț: cel mai mare primul</option>
        <option value="AToZ">Nume produs: A-Z</option>
        <option value="ZToA">Nume produs: Z-A</option>
      </select>
      </div>
    <div className="products-container">
      {products?.map(product => {
      return <Product key={product._id} product={product}/>
    })}</div>
    </div>
  )
}

export default Products