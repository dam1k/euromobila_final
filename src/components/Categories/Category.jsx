import React from 'react'
import {BsChevronRight} from "react-icons/bs"
import {useNavigate, Link} from "react-router-dom"

const Category = ({item}) => {
    const navigate = useNavigate()
  return (
    <div className={`category category-${item.name}`} onClick={() => navigate(item.path)}>
    <div className="category-navigation">
    <Link to={item.path}><button className="brown-btn btn" type="button">{item.name[0].toUpperCase() + item.name.substring(1)}<BsChevronRight/></button> </Link>
    </div>  
     </div>
  )
}

export default Category