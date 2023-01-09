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
const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'default');
 
  useEffect(() => {
    localStorage.setItem('sortBy', sortBy);
    switch(sortBy) {
      case 'default':  
      sort(searchByCategoryQuery) 
      break;

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
  }, [sortBy])



  function sort(sortQuery, order) {
      const query = sortQuery(categoryType)

      client.fetch(query)
      .then(data => {
        if(order === 'asc' || !order) {
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
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} id="filter">
        <option value="default">Sortează după:</option>
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


// const Products = () => {
//   const {categoryType} = useParams()
  
//   const [products, setProducts] = useState(null)
//   const [sortQuery, setSortQuery] = useState(null)
  
//     useEffect(() => {
//       function sort(sortQuery, order) {
//         const query = sortQuery(categoryType)
  
//         client.fetch(query)
//         .then(data => {
//           if(order === 'asc') {
//             setProducts(data)
//           } else if(order === 'desc') {
//             setProducts(data.reverse())
//           }
//         })
//         .catch(err => console.log(err))
//       }  
//     }, [sortQuery])
//     useEffect(() => {
//       const query = searchByCategoryQuery(categoryType)
      
//       client.fetch(query)
//       .then(data => setProducts(data))
//       .catch(err => console.log(err))
//     }, [])
  
//     function handleSort(e) {
//       switch(e.target.value) {
//         case 'sort-by':
//         setSortQuery(null)
//         break;
  
//         case 'asc-price':
//         sort(filterByPrice, 'asc')
//         break;
  
//         case 'desc-price':
//         sort(filterByPrice, 'desc')
//         break;
  
//         case 'AToZ':
//         sort(filterByName, 'asc')
//         break;
  
//         case 'ZToA':
//         sort(filterByName, 'desc');
//         break;
//       }
//     }
  
//     return (
//       <div className="container">
//         <div className="filter-container">
//         <select onChange={(e) => handleSort(e)} id="filter">
//           <option value="sort-by">Preț: cel mai mic primul</option>
//           <option value="asc-price">Preț: cel mai mic primul</option>
//           <option value="desc-price">Preț: cel mai mare primul</option>
//           <option value="AToZ">Nume produs: A-Z</option>
//           <option value="ZToA">Nume produs: Z-A</option>
//         </select>
//         </div>
//       <div className="products-container">
//         {products?.map(product => {
//         return <Product key={product._id} product={product}/>
//       })}</div>
//       </div>
//     )
//   }
  
//   export default Products