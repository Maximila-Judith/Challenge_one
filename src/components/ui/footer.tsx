import Image from 'next/image'
import React from 'react'

export const footer = () => {
  return (



    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-5">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-black" href="#" aria-label="Brand">
            <Image
              src="/Frame.svg"
              alt="icon 1"
              width={36}
              height={36}
              priority
              className="opacity-100"
            />
          </a>
        </div>

      </div>

      <div className="pt-5 mt-5 border-t border-gray-200 dark:border-neutral-700">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <div className="space-x-4 text-sm">
              <a className="inline-flex gap-x-2 text-gray-600 text-base font-semibold hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-black" href="#">Create Explore & Collect Digital  NFT</a>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="space-x-4 text-sm">
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-black" href="#">Privacy</a>
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-black" href="#">Terms & Conditions</a>
              <a className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-black" href="#">About us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>



  )
}
