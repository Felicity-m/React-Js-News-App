import React from 'react'
import {CircularProgress} from '@material-ui/core';
import "./Loading.css"




  


const Loading = () => {
         return (
                  <main className="loading">
                           <p>Loading...</p>
                           <CircularProgress disableShrink />

                           
                  </main>
         )
}

export default Loading
