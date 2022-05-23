import{BrowserRouter, Routes, Route} from "react-router-dom"
import React, {useState} from 'react'
import MainView from "./views/MainView";
import NewPirate from "./views/NewPirate";
import ViewPirate from "./views/ViewPirate";
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
      {/* MAKE SURE TO PUT THE REFRESH INSIDE THE ELEMENT!!!!!!! NOT OUTSIDE THE BRACES */}
      <Route path="/pirates" element={<MainView refresh={refresh} refreshState={refreshState}/> } />
      <Route path="/pirate/new" element={<NewPirate   refresh={refresh} refreshState={refreshState}/>}/>
      <Route path="/pirate/:pirate_id" element={<ViewPirate   refresh={refresh} refreshState={refreshState}/>}/>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
