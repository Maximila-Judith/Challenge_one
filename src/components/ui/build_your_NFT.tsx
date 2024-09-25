import React from 'react'

export const Building = () => {
    return (
        <div className="relative bg-[url('/img/bg.png')] bg-cover bg-center border rounded-[32px] h-[336px] py-[72px] w-full flex flex-col items-center mt-5 mb-8 gap-[40px]">
            <div className="absolute rounded-l-[32px] left-0 top-0 w-1/3 h-full bg-[#0E1218] opacity-60"></div>
            <div className="absolute left-1/3 top-0 w-1/3 h-full bg-[#0E1218] opacity-60"></div>
            <div className="absolute rounded-r-[32px] right-0 top-0 w-1/3 h-full bg-[#0E1218] opacity-60"></div>
            <h1 className="relative items-center text-white text-4xl lg:text-6xl">Build your NFT profile</h1>
            <p className="relative items-center text-white font-bold">Join almost 10k NFT profiles on Digit!</p>
            <button className="relative items-center border rounded-full w-[150px] p-2 bg-white text-black font-semibold">Sign up now</button>
        </div>


    )
}
