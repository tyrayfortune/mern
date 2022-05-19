import React, {useState} from 'react'
import Dashboard from "../components/Dashboard"
import{BrowserRouter, Routes, Route} from "react-router-dom"
const MainView = (props) => {
      //DESTRUCT REFRESH FROM PROPS
      const {refreshState, refresh} = props
    
  return (

    <div>
        
        <Dashboard refresh={refresh} refreshState={refreshState}/>

    </div>

  )
}

export default MainView