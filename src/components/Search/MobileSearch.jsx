import React, {useEffect, useState, useRef} from 'react'
import { urlFor } from "../../client"
import {FiSearch} from "react-icons/fi"
import './MobileSearch.scss'
import { useNavigate } from 'react-router-dom'
import { searchQuery } from "../../utils/data"
import { client } from "../../client"

const MobileSearch = () => {
     const [searchTerm, setSearchTerm] = useState('')
     const [searchResults, setSearchResults] = useState([])
     const [showSearchBar, setShowSearchBar] = useState(false)
     const navigate = useNavigate()
     const inputRef = useRef()

     useEffect(() => { 
          if(searchTerm !== '') { 
          const query = searchQuery(searchTerm)
      
            client.fetch(query)
          .then(data => {
            setSearchResults(data)
            console.log(data)})
          .catch(err => console.log(err))
          } 
          else {
            setSearchResults([])
          }
        }, [searchTerm])
      
        function goToResult(category, id) {
          navigate(`/canapele/${category}/${id}`)
          setSearchTerm('')
        }

     return (
          <div className="mobile-search-container">
               <div onClick={() => {
                    setShowSearchBar(prev => !prev) 

               }}
                className="search-icon-container">
                <FiSearch size={20} className={`search-icon ${showSearchBar ? 'active' : ''}`}/>
                </div>
          {showSearchBar && 
          (<form className="mobile-search">
            <input autoFocus={true} type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Mobile Search" value={searchTerm}/>
          </form> )}

          {(showSearchBar && searchResults?.length > 0 && searchTerm !== '') && ( 
          <div className="results-container">
            {searchResults.map(result => {
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

export default MobileSearch