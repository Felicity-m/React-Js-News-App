import React, {useState} from 'react'

import "./SearchBar.css"

const SearchBar = ({apicall}) => {
         const [term, setTerm] = useState("")
         

         const onFormSubmit = (e)=>{
                  e.preventDefault()
                  

                  
              }

              const onFormChange = (e)=>{
                  setTerm( e.target.value)
          
              }

         return (
                  <div className="search-bar">
                           <form onSubmit={onFormSubmit}>
                                    <label htmlFor="search">Search News: </label>
                                    <input 
                                             className="search"
                                             onChange={onFormChange}
                                             type="text"
                                             placeholder="Type here" 
                                             id="search" 
                                             value={term}
                                             required
                                    />        
                           </form>          
                  </div>        
        )
}

export default SearchBar
