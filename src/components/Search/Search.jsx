import React, {useEffect, useState, useRef} from 'react'
import { urlFor } from "../../client"
import {FiSearch} from "react-icons/fi"
import './Search.scss'
import { useNavigate } from 'react-router-dom'
import { searchQuery } from "../../utils/data"
import { client } from "../../client"
import useUIContext from '../../UIContext'

const Search = () => {
     const [searchTerm, setSearchTerm] = useState('')
     const [searchResults, setSearchResults] = useState([])
     const [activeInput, setActiveInput] = useState(false)
     const navigate = useNavigate()
     const formRef = useRef()
     const inputRef = useRef()

        useEffect(() => { 
          if(searchTerm !== '') {
      
          const query = searchQuery(searchTerm)
      
            client.fetch(query)
          .then(data => {
            setSearchResults(data)})
          .catch(err => console.log(err))
          } 
          else {
            setSearchResults([])
          }
        }, [searchTerm])

        useEffect(() => {
          function hideResults(e) {
           if(!formRef.current.contains(e.target)) {
            setSearchResults([])
           }
          }
          window.addEventListener('click', hideResults)
       
          return () => window.removeEventListener('click', hideResults)
         }, [])


        function goToResult(category, id) {
          navigate(`/canapele/${category}/${id}`)
          setSearchTerm('')
        }

        function goToFirstResult() {
          if(searchResults.length > 0) {
            goToResult(searchResults[0]?.category, searchResults[0]?._id)
          } else {
            return
          }
        }

  return (
     <div className="search-container">
     <form onSubmit={goToFirstResult} ref={formRef} className="search">
       <input 
       ref={inputRef}
       type="text" 
       onFocus={() => setActiveInput(true)}
       onBlur={() => setActiveInput(false)}
       onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" 
       value={searchTerm}/>
       <FiSearch 
       onClick={() => inputRef.current.focus()} size={20} 
       className={`search-icon ${activeInput ? 'active' : ''}`}/>
     </form>
     {(searchResults.length > 0 && searchTerm !== '') && ( 
     <div className="results-container">
       {searchResults.map(result => {
        console.log(result)
         return (  
         <div onClick={() => goToResult(result.category, result._id)} key={result._id} className="result">
           <h3>{result.name}</h3>
           {result.images && <img src={urlFor(result.images[0].asset._ref).url()}/>}
           </div>
         )
       })}
       </div>
       )}
       </div>
  )
}

export default Search