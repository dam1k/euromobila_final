import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {client, urlFor} from "../client"
import { categoryInfoQuery, categoryTypeQuery } from '../utils/data'
import './CategoriesPage.scss'
import Spinner from '../components/Spinner'
import { setDocumentTitle } from '../utils/setDocumentTitle'

const CategoriesPage = () => {
  const [categoryInfo, setCategoryInfo] = useState([])
  const [categoryTypes, setCategoryTypes] = useState([])
  const { categoryName } = useParams()

  setDocumentTitle(`Euromobila | ${categoryName.slice(0, 1).toUpperCase() + categoryName.slice(1)}`)
  const navigate = useNavigate()
  
  useEffect(() => {
    function fetchData(categoryName) {
      const query = categoryInfoQuery(categoryName)

    client.fetch(query)
    .then(data => {
      if(data[0] !== undefined) {
    setCategoryInfo(data[0])
    console.log(data[0])
      }
      else {
        navigate('/notfound')
      }
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
    console.log(categoryName);
  }, [categoryName])

  if(categoryInfo.length === 0 || categoryTypes.length === 0) {
    return <Spinner/>
  }
  return (
    <div id="categories" className={`container ${categoryName === "office" ? "category-office" : ''}`}>
      <div className="category-info-container">
    <h2 className="title">{categoryInfo && categoryInfo.title}</h2>
      <p className="category-info">
        {categoryInfo &&
        <>
         <p>{categoryInfo.info.split('-')[0]}</p>
         <br/>
         <p>{categoryInfo.info.split('-')[1]}</p>
         </>}
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