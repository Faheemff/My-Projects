import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import Smoothscroll from './ScrollingLebries/Smoothscroll'



const App = () => {
  gsap.registerPlugin(useGSAP)
  const container = useRef(null)

  useGSAP(()=> {
    gsap.to('.he', {
      scale: 1.1,
      duration:2,
      x:900
    })
  })
  return (
    <Smoothscroll>
      <div ref={container}  className="h-screen w-full bg-red-300">
        <div className='he h-[400px] w-[300px] bg-black rounded-[50px]'></div>
      </div>
      <div className="h-screen w-full bg-blue-500"></div>
      <div className="h-screen w-full bg-green-500"></div>
          <div className='flex bg-red-500 justify-center text-black text-3xl'>App</div>
    </Smoothscroll>
  )
}

export default App