import React from 'react'
import NewForm from "../components/NewForm"
const newAuthor = (props) => {
      //DESTRUCT REFRESH FROM PROPS
      const {refreshState, refresh} = props

  return (
    <div>
      <NewForm refresh={refresh} refreshState={refreshState}/>
    </div>
  )
}

export default newAuthor