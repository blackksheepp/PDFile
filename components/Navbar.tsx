"use client"

import React from 'react'
import Link from 'next/link';

const svg = {
  tools: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      className="icon line"
      data-icon-name="menu-alt-2"
      data-style="line"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#FBB637"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M10 10H3V3h7zm11-7h-7v7h7zM10 14H3v7h7zm11 0h-7v7h7z"
      ></path>
    </svg>
  ),
};


const Navbar = () => {
  return (
    <nav
      className="fixed p-3 w-full items-center bg-primary-dark dark:bg-opacity-30 dark:firefox:bg-opacity-90 dark:backdrop-filter dark:backdrop-blur-lg dark:border-b dark:border-primary-text
    text-primary-light dark:text-primary-text"
    >
      
      
      <div className="relative align-middle">
        <span className="pl-7 font-recursive text-2xl font-semibold">
          PDFile
        </span>
      </div>

      <div className='relative align-middle flex flex-rows flex-row-reverse gap-2 font-exo'>
        <Link href="/github">GITHUB</Link>
        <button>TOOLS</button>
      </div>

    </nav>
  );
}

export default Navbar