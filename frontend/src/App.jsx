import React from 'react'
import Smoothscroll from './ScrollingLebries/Smoothscroll'


const App = () => {
  return (
    <Smoothscroll>
      <div className="h-screen w-full bg-red-300"></div>
      <div className="h-screen w-full bg-blue-500"></div>
      <div className="h-screen w-full bg-green-500"></div>
          <div className='flex bg-red-500 justify-center text-black text-3xl'>App</div>
    </Smoothscroll>
  )
}

export default App