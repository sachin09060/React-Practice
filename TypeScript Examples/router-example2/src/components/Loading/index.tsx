import React from 'react'
import "./Loading.css"
import loading from "../../assets/loading.gif"

const Loading = () => {
  return (
    <div className='loading-container'>
        <img src={loading} alt="" />
        <p>Loading...!</p>
    </div>
  )
}

export default Loading