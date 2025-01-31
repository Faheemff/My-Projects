import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import Smoothscroll from './ScrollingLebries/Smoothscroll'



const App = () => {

  const container = useRef(null)

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=> {
      gsap.to('.he', {
      scale: 1.1,
      duration:2,
      x: 900,
      scrollTrigger: {
        trigger: '.he',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'restart pause reset',
      }
    })
    gsap.to('.h', {
      x:800,
      duration:2,
      delay:1,
      scrollTrigger: {
        trigger:'.h',
        scroller:'body',
        start:'top 80%',
        end: 'bottom 20%',
        markers:true
      }
    })
  })
  return (
    <Smoothscroll>
      <div ref={container}  className="h-screen w-full bg-red-300">
        <div className='he h-[400px] w-[300px] bg-black rounded-[50px]'></div>
      </div>
      <div
      ref={container}
       className="h-screen w-full bg-blue-500 flex items-center justify-center">
        <div className='h h-[400px] w-[300px] bg-red-500 rounded-[50px]'></div>
       </div>
      <div className="h-screen w-full bg-green-500"></div>
          <div className='flex bg-red-500 justify-center text-black text-3xl'>App</div>
    </Smoothscroll>
  )
}

export default App