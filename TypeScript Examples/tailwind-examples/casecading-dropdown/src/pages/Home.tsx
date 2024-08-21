import React from 'react'
import Dropdowns from '../components/Dropdown'

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center items-center w-full'>
      <h1 className='m-10 sm:text-[35px] font-bold'>Cascading Dropdown Example!</h1>
      <Dropdowns/>
    </div>
  )
}

export default Home