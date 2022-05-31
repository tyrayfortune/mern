import{BrowserRouter, Routes, Route} from "react-router-dom"
import React, {useState} from 'react'
import Main from "./views/Main"
import Register from './views/Register';
import Login from "./views/Login"
import NewSandwich from "./views/NewSandwich"
import Payment from "./views/Payment"

function App() {
        //STATE FOR KEEPING TRACK OF REFRESH
        const [refreshState, setRefreshState] = useState(false)
    
        //FUNCTION FOR KEEPING TRACK OF REFRESH
        const refresh = () => {
          setRefreshState(!refreshState)
        }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register refresh={refresh} refreshState={refreshState}/> } />
        <Route path="/login" element={<Login refresh={refresh} refreshState={refreshState}/> } />
        <Route  path="/" element={<Main refresh={refresh} refreshState={refreshState}/> } />
        <Route  path="/new/sandwich" element={<NewSandwich refresh={refresh} refreshState={refreshState}/> } />
        <Route  path="/payment/:sandwich_id" element={<Payment refresh={refresh} refreshState={refreshState}/> } />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
