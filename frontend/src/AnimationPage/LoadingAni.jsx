import React from 'react'

const LoadingAni = () => {
    return (
        <main className='h-[100vh] w-[100vw] bg-black text-white flex justify-center items-center relative'>
            <div className="relative flex flex-col gap-[30px] justify-center items-center text-center text-white w-[25vw] h-[50vh] border-[0.6px] border-gray-600 rounded-full">
                <div className="heading text-gray-400 text-center h-[50px]">
                    <h1 className='text-[20px] w-[150px] text-center leading-[20px]'>Wellcome To My Potfolio</h1>
                </div>
                <div className="number">
                    <h1>1</h1>
                </div>
            </div>
        </main>
    )
}

export default LoadingAni