import React from 'react'
import Dashboard from '../components/Dashboard'
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