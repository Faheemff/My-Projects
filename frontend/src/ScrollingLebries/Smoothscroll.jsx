import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'

const Smoothscroll = ({ children }) => {
    const lenis = useRef(null);

    useEffect(() => {
        lenis.current = new Lenis({
            duration: 2,
            smooth: true,
        });

        const scroll = (time) => {
            lenis.current.raf(time);
            requestAnimationFrame(scroll);
        };


        requestAnimationFrame(scroll);
    }, []);


    return (
        <div>{ children }</div>
    )
}

export default Smoothscroll