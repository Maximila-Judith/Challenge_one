import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"


export function Section2() {
    return (
        <div className="w-[1100px] flex flex-col gap-y-10">
            <h1 className='dark:text-black text-3xl font-semibold pt-10'>Our Collections</h1>

            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-x-3">
                    <button className="border rounded-xl w-[150px] p-2 bg-neutral-800 text-white">All categories</button>
                    <Button variant="outline" className="bg-gray-200">Art</Button>
                    <Button variant="outline" className="bg-gray-200">Celebrities</Button>
                    <Button variant="outline" className="bg-gray-200">Gaming</Button>
                    <Button variant="outline" className="bg-gray-200">Sport</Button>
                </div>
                <a href="#" className="underline underline-offset-2">View more</a>
            </div>

            <div className="flex flex-row items-center gap-x-10">
                <Card className="w-[250px] p-1 rounded-2xl">
                    <CardHeader>
                        <CardTitle>
                            <Image
                                src="/img/Rectangle 3.png"
                                alt="icon 1"
                                width={258}
                                height={213}
                                priority
                                className="opacity-100"

                            />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-row justify-between pt-2">
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
                    </CardContent>
                    <CardFooter className="flex items-center mt-1.5">
                        <button className="border rounded-xl w-[650px] p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                    </CardFooter>
                </Card>

                <Card className="w-[250px] p-1 rounded-2xl">
                    <CardHeader>
                        <CardTitle>
                            <Image
                                src="/img/1.png"
                                alt="icon 1"
                                width={258}
                                height={213}
                                priority
                                className="opacity-100"

                            />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-row justify-between pt-2">
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
                    </CardContent>
                    <CardFooter className="flex items-center mt-1.5">
                        <button className="border rounded-xl w-[650px] p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                    </CardFooter>
                </Card>

                <Card className="w-[250px] p-1 rounded-2xl">
                    <CardHeader>
                        <CardTitle>
                            <Image
                                src="/img/2.png"
                                alt="icon 1"
                                width={258}
                                height={213}
                                priority
                                className="opacity-100"

                            />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-row justify-between pt-2">
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
                    </CardContent>
                    <CardFooter className="flex items-center mt-1.5">
                        <button className="border rounded-xl w-[650px] p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                    </CardFooter>
                </Card>

                <Card className="w-[250px] p-1 rounded-2xl">
                    <CardHeader>
                        <CardTitle>
                            <Image
                                src="/img/3.png"
                                alt="icon 1"
                                width={258}
                                height={213}
                                priority
                                className="opacity-100"

                            />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-row justify-between pt-2">
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
                    </CardContent>
                    <CardFooter className="flex items-center mt-1.5">
                        <button className="border rounded-xl w-[650px] p-2 font-semibold border-neutral-800 text-neutral-800">Place a Bid</button>
                    </CardFooter>
                </Card>
            </div>

        </div>

    )
}
