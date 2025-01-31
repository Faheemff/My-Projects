import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Smoothscroll from './ScrollingLebries/Smoothscroll'
import LoadingAni from './AnimationPage/LoadingAni'



const App = () => {

  const container = useRef(null)

  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=> {
    //   gsap.to('.he', {
    //   scale: 1.1,
    //   duration:2,
    //   x: 900,
    //   scrollTrigger: {
    //     trigger: '.he',
    //     start: 'top 80%',
    //     end: 'bottom 20%',
    //     toggleActions: 'restart pause reset',
    //   }
    // })
    // gsap.to('.h', {
    //   x:800,
    //   duration:2,
    //   delay:1,
    //   scrollTrigger: {
    //     trigger:'.h',
    //     scroller:'body',
    //     start:'top 80%',
    //     end: 'bottom 20%',
    //     markers:true
    //   }
    // })
  })
  return (
    <Smoothscroll>
      <LoadingAni />
    </Smoothscroll>
  )
}

export default App