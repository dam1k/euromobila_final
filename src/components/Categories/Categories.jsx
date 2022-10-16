import React from 'react'
import Category from './Category'
import "./Categories.scss"

import canapea from "../../assets/images/canapea.jpeg"
import coltar from "../../assets/images/coltar.jpeg"
import fotoliu from "../../assets/images/fotoliu.jpg"

const data = [
    {
        name: 'canapele',
        image: [canapea]
    },
    {
        name: 'coltare',
        image: [coltar]
    },
    {
        name: 'fotolii',
        image: [fotoliu]
    }
]

const Categories = () => {
  return (
    <div className="categories container">
        {data.map(item => {
            return <Category key={item.name} item={item}/>
        })}
    </div>
  )
}

export default Categories