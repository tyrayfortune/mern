import React, {useState} from 'react'
import Dashboard from '../components/Dashboard'
import Form from '../components/Form'

const Main = () => {
    //STATE FOR KEEPING TRACK OF REFRESH
    const [refreshState, setRefresh] = useState(false)
   //FUNCTION FOR KEEPING TRACK OF REFRESH
    const refresh = () => {
        setRefresh(!refreshState)
    }

  return (
    <div>Main
        <Form refresh={refresh} />
        <Dashboard refresh={refresh} refreshState={refreshState} />
    </div>
  )
}

export default Main