import{BrowserRouter, Routes, Route} from "react-router-dom"
import NewAuthor from "./views/NewAuthor"
import MainView from './views/MainView';
import EditAuthor from './views/EditAuthor';
import React, {useState} from 'react'

function App() {
    //STATE FOR KEEPING TRACK OF REFRESH
    const [refreshState, setRefreshState] = useState(false)
    
   //FUNCTION FOR KEEPING TRACK OF REFRESH
    const refresh = () => {
        setRefreshState(!refreshState)
    }


  return (
      <BrowserRouter>
    <div className="App">
      <Routes>
      {/* ROOT ROUTE FOR MAINVIEW */}
      {/* MAKE SURE TO PUT THE REFRESH INSIDE THE ELEMENT!!!!!!! NOT OUTSIDE THE BRACES */}
      <Route path="/" element={<MainView refresh={refresh} refreshState={refreshState}/> } />
      <Route path="/new" element={<NewAuthor   refresh={refresh} refreshState={refreshState}/>}/>

      {/* product_id route for details */}
      <Route path="/edit/:author_id" element={<EditAuthor/>}/>
      </Routes>
      
      
    </div>
      </BrowserRouter>
  );
}

export default App;
