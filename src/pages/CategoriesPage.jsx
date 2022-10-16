import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {client, urlFor} from "../client"
import { categoryInfoQuery, categoryTypeQuery } from '../utils/data'
import './CategoriesPage.scss'

const CategoriesPage = () => {
  const [categoryInfo, setCategoryInfo] = useState([])
  const [categoryTypes, setCategoryTypes] = useState([])
  const { categoryName } = useParams()

  const navigate = useNavigate()
  
  useEffect(() => {
    function fetchData(categoryName) {
      const query = categoryInfoQuery(categoryName)

    client.fetch(query)
    .then(data => {
      setCategoryInfo(data[0])
    })
    .catch(err => console.log(err))

    const typeQuery = categoryTypeQuery(categoryName)
    client.fetch(typeQuery)
    .then(data => {
      setCategoryTypes(data)
    })
    .catch(err => console.log(err))
    } 
    
    fetchData(categoryName)

  }, [categoryName])


  return (
    <div id="categories" className="container">
      <div>
    <h2 className="title">{categoryInfo && categoryInfo.title}</h2>
      <p className="category-info">
        {categoryInfo && categoryInfo.info}
      </p>
      </div>
        {categoryTypes && categoryTypes.map((category => {
          return ( 
          <div key={category._id} className="category-type">
            <img onClick={() => navigate(`${category.slug.current}`)} src={urlFor(category.image.asset._ref).url()}/>
            <Link to={`${category.slug.current}`}><p>{category.name}</p></Link>
          </div>
          )
        }))}
    </div>
  )
}

export default CategoriesPage