import Image from 'next/image'
import React from 'react'

export const Section1 = () => {
    return (
        <div className='flex flex-row w-[1200px] h-[607px] pr-20 items-center'>
            <div className='w-[787px] h-[390px] flex flex-col gap-y-8'>
                <h1 className='text-black text-8xl'>See the NFT new world</h1>
                <p className='text-black w-[412px] h-[48px]'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, di</p>
                <div className='flex flex-row items-center gap-x-5'>
                    <span>Discover Vow</span>
                    <Image
                        src="/Frame 126.svg"
                        alt="icon 1"
                        width={35}
                        height={35}
                        priority
                        className="opacity-100"
                    />
                </div>
            </div>
            {/* h-[588.19px] */}
            <div className="flex flex-row items-center justify-center w-[596.89px] relative">
                <div className="relative top-[145.9px]">
                    <Image
                        src="/img/s1.png"
                        alt="icon 1"
                        width={287.58}
                        height={442.29}
                        priority
                        className="opacity-100 rounded-full"
                    />
                </div>

                <div className="absolute top-[10px] left-[110px]">
                    <Image
                        src="/img/Frame.png"
                        alt="icon 2"
                        width={157.44}
                        height={116.49}
                        priority
                        className="opacity-100"
                    />
                </div>

                <div className="relative top-0 left-[15px]">
                    <Image
                        src="/img/Rectangle 4.png"
                        alt="icon 3"
                        width={287.58}
                        height={442.29}
                        priority
                        className="opacity-100 rounded-full"
                    />
                </div>

            </div>

        </div>
    )
}
