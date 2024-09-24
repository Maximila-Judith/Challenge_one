'use client'
import { Section1 } from "@/components/ui/section1";
import { Section2 } from "@/components/ui/section2";
import { Section3 } from "@/components/ui/section3";
import { Section4 } from "@/components/ui/section4";
import Image from "next/image";
import React from "react"
import { useState } from 'react';


export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <div>

      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-[#F8F8F8]">
        <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center gap-x-1">
            <a className="dark:text-black flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white" href="#">
              <Image
                src="/Frame.svg"
                alt="icon 1"
                width={36}
                height={36}
                priority
                className="opacity-100"

              />
            </a>

            <button
              type="button"
              className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className={`hs-collapse ${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`}>
            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-60 justify-between items-center gap-x-1">
                <div className="grow">
                  <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-5 dark:text-black">
                    <a className="dark:text-black p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#" aria-current="page">
                      Home
                    </a>
                    <a className="dark:text-black p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                      Top sales
                    </a>
                    <a className="dark:text-black p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                      Collections
                    </a>
                    <a className="dark:text-black p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                      Our blog
                    </a>
                    <a className="dark:text-black p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                      About us
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-2">
                  <a className="dark:text-black py-[7px] px-2.5 inline-flex items-center font-medium text-sm" href="#">
                    Sign up
                  </a>
                  <div className="my-2 md:my-0 md:mx-2">
                    <div className="w-full w-[0.5px] h-px md:w-1px md:h-6 bg-black md:bg-black dark:bg-black"></div>
                  </div>
                  <a className="py-2 px-6 inline-flex items-center font-medium text-sm rounded-full bg-black text-white focus:outline-none" href="#">
                    Connect Wallet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>


      <main className="flex flex-col gap-y-20">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-5">
          <div className="col-span-full lg:col-span-1">
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
    </div>
  );
}
