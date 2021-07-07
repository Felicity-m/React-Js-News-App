import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import SearchBar from './components/SearchBar'
import Loading from './components/Loading'

import NewsCard from './components/NewsCard'

const App = () => {
    const[ state, setState]= useState([])
    const [loading, setLoading] = useState(true)

    const apiCall = async ()=>{
        setLoading(true)
       

        const response = await axios.get( "https://gnews.io/api/v4/search?q=example&token=a18641a96046e510fd7bc2f21a4c9e1c", {
            params : {
                q: "business",
                country: "us", 
                max: 6  
            }
        })
            //"http://api.mediastack.com/v1/news?access_key=31e3268803e5d619ecb9a5de8d89faba"
        //console.log(response)
        setLoading(false)
        setState(response.data.articles)
    }
   //apiCall()

 useEffect(() => {
      apiCall()
   }, [])

   if(loading){
       return (
           <main>
               <Loading />
           </main>
       )
   }

    return (
        <div>
            <SearchBar  apiCall={apiCall}/>
           
            <NewsCard articles={state}/>  
        </div>
    )
}

export default App
