import Image from 'next/image'
import React from 'react'

export const Section3 = () => {
    return (
        <div className='flex flex-col w-[1130px] h-[298px] gap-y-5 mt-10'>
            <h1 className='dark:text-black text-3xl font-semibold'>Create and Sell Now</h1>
            <div className='flex flex-row justify-between items-center gap-x-5 '>
                <div className="flex flex-col border rounded-3xl p-4 md:p-5 bg-[#E8E9EA]">
                    <Image
                        src="/Frame 129.svg"
                        alt="icon 1"
                        width={50}
                        height={50}
                        priority
                        className="opacity-100"

                    />
                    <h3 className="text-lg font-bold text-gray-800 dark:text-black pt-2">
                        Set up your wallet
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>

                <div className="flex flex-col border rounded-3xl p-4 md:p-5 bg-[#E8E9EA]">
                    <Image
                        src="/Frame 130.svg"
                        alt="icon 1"
                        width={50}
                        height={50}
                        priority
                        className="opacity-100"

                    />
                    <h3 className="text-lg font-bold text-gray-800 dark:text-black pt-2">
                        Set up your wallet
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>

                <div className="flex flex-col border rounded-3xl p-4 md:p-5 bg-[#E8E9EA]">
                    <Image
                        src="/Frame 131.svg"
                        alt="icon 1"
                        width={50}
                        height={50}
                        priority
                        className="opacity-100"

                    />
                    <h3 className="text-lg font-bold text-gray-800 dark:text-black pt-2">
                        Set up your wallet
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>

                <div className="flex flex-col border rounded-3xl p-4 md:p-5 bg-[#E8E9EA]">
                    <Image
                        src="/Frame 146.svg"
                        alt="icon 1"
                        width={50}
                        height={50}
                        priority
                        className="opacity-100"

                    />
                    <h3 className="text-lg font-bold text-gray-800 dark:text-black pt-2">
                        Set up your wallet
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>
            </div>

        </div>

    )
}

