import React from 'react'

const LoadingAni = () => {
    return (
        <main className=' h-[100vh] w-[100vw] bg-black text-white flex justify-center items-center relative'>
            <div className="relative w-[32vw] h-[50vh] border-t-[5px] border-b-[5px] border-gray-600 rounded-full overflow-hidden after:absolute after:content-[''] after:border-t-[1px] after:border-b-[1px] after:border-white after:animate-spin-slow ">
                
            </div>
        </main>
    )
}

export default LoadingAni