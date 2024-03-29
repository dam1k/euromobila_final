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
     const formRef = useRef()

     useEffect(() => { 
          if(searchTerm.trim() !== '') { 
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
          setShowSearchBar(false)
        }

          function goToFirstResult() {
          if(searchResults.length > 0) {
            goToResult(searchResults[0]?.category, searchResults[0]?._id)
          } else {
            return
          }
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
          (<form onSubmit={goToFirstResult} 
          ref={formRef} className="mobile-search">
            <input autoFocus={true} type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search" value={searchTerm}/>
          </form> )}

          {(showSearchBar && searchResults?.length > 0 && searchTerm !== '') && ( 
          <div className="results-container">
            {searchResults && searchResults.map(result => {
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