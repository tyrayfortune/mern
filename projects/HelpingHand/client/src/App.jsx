import{BrowserRouter, Routes, Route} from "react-router-dom"
import React, {useState} from 'react'
import Homepage from "./views/Homepage";
function App() {
        //STATE FOR KEEPING TRACK OF REFRESH
        const [refreshState, setRefreshState] = useState(false)
    
        //FUNCTION FOR KEEPING TRACK OF REFRESH
        const refresh = () => {
          setRefreshState(!refreshState)
        }

  return (
    <div >
          <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Homepage refresh={refresh} refreshState={refreshState}/> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
