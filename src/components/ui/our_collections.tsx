import Image from 'next/image'
import React from 'react'

export const Collections = () => {
    return (
        <div className='flex flex-col w-full p-5 mt-5 gap-y-10'>
            <h1 className='dark:text-black text-3xl font-semibold'>Our Collections</h1>

            <div className="flex flex-row justify-between md:items-center pr-5">
                <div className="flex flex-row gap-x-3">
                    <button className="border rounded-xl w-[150px] p-2 bg-neutral-800 text-white">All categories</button>
                    <button className="border rounded-xl w-[100px] p-2 bg-gray-200 text-black">Art</button>
                    <button className="border rounded-xl w-[100px] p-2 bg-gray-200 text-black">Celebrities</button>
                    <button className="border rounded-xl w-[100px] p-2 bg-gray-200 text-black">Gaming</button>
                    <button className="border rounded-xl w-[100px] p-2 bg-gray-200 text-black">Sport</button>
                </div>
                <a href="#" className="underline underline-offset-2">View more</a>
            </div>

            <div className='w-full flex flex-col md:flex-row gap-y-5 justify-between md:items-center gap-x-5 '>
                <div className="w-full flex flex-col border rounded-2xl p-3 gap-y-3 bg-white">
                    <Image
                        src="/img/Rectangle 3.png"
                        alt="icon 1"
                        width={300}
                        height={213}
                        priority
                        className="opacity-100 rounded-2xl w-full"
                    />

                    <div className="w- full flex flex-row justify-between pt-2">
                        <p className="font-bold">CyberPunk</p>
                        <div className="flex flex-row">
                            <Image
                                src="/ethereum-ellipse.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 font-semibold"
                            />
                            <span className="font-semibold">68</span>
                        </div>
                    </div>

                    <button className="border rounded-xl w-full p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                </div>

                <div className="w-full flex flex-col border rounded-2xl p-3 gap-y-3 bg-white">
                    <Image
                        src="/img/Rectangle 3.png"
                        alt="icon 1"
                        width={300}
                        height={213}
                        priority
                        className="opacity-100 rounded-2xl w-full"
                    />

                    <div className="w- full flex flex-row justify-between pt-2">
                        <p className="font-bold">CyberPunk</p>
                        <div className="flex flex-row">
                            <Image
                                src="/ethereum-ellipse.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 font-semibold"
                            />
                            <span className="font-semibold">68</span>
                        </div>
                    </div>

                    <button className="border rounded-xl w-full p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                </div>

                <div className="w-full flex flex-col border rounded-2xl p-3 gap-y-3 bg-white">
                    <Image
                        src="/img/Rectangle 3.png"
                        alt="icon 1"
                        width={300}
                        height={213}
                        priority
                        className="opacity-100 rounded-2xl w-full"
                    />

                    <div className="w- full flex flex-row justify-between pt-2">
                        <p className="font-bold">CyberPunk</p>
                        <div className="flex flex-row">
                            <Image
                                src="/ethereum-ellipse.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 font-semibold"
                            />
                            <span className="font-semibold">68</span>
                        </div>
                    </div>

                    <button className="border rounded-xl w-full p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                </div>

                <div className="w-full flex flex-col border rounded-2xl p-3 gap-y-3 bg-white">
                    <Image
                        src="/img/Rectangle 3.png"
                        alt="icon 1"
                        width={300}
                        height={213}
                        priority
                        className="opacity-100 rounded-2xl w-full"
                    />

                    <div className="w- full flex flex-row justify-between pt-2">
                        <p className="font-bold">CyberPunk</p>
                        <div className="flex flex-row">
                            <Image
                                src="/ethereum-ellipse.svg"
                                alt="icon 1"
                                width={24}
                                height={24}
                                priority
                                className="opacity-100 font-semibold"
                            />
                            <span className="font-semibold">68</span>
                        </div>
                    </div>

                    <button className="border rounded-xl w-full p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                </div>
            </div>

        </div>

    )
}

