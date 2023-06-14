"use client"
import React, {useState} from "react";
import Link from "next/link";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="bg-navbar text-primary-light-text relative flex flex-wrap items-center w-full p-5">
      <div className="static md:pl-3 sm:pl-0">
        <Link href="/">
          <span className="font-recursive font-black text-3xl md:text-4xl">
            PDFile
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="md:flex hidden p-4 pt-5 text-lg font-recursive font-medium">
        <div className="flex flex-wrap gap-1.5 pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            className="icon line"
            data-icon-name="menu-alt-2"
            data-style="line"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#BCBEDC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 10H3V3h7zm11-7h-7v7h7zM10 14H3v7h7zm11 0h-7v7h7z"
            ></path>
          </svg>
          <button>Tools</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="icon line mt-1"
            data-icon-name="double-down-sign"
            data-style="line"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#BCBEDC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 5L12 10 3 5"
            ></path>
            <path
              fill="none"
              stroke="#BCBEDC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 14L12 19 3 14"
              data-name="primary"
            ></path>
          </svg>
        </div>

        <div className="flex flex-wrap gap-3 ml-6 pl-18">
          <Link href="/merge">Merge</Link>
          <Link href="/split">Split</Link>
          <Link href="/compress">Compress</Link>
        </div>

        <div className="flex flex-wrap gap-3 absolute top-0 right-0 p-10 pt-10">
          <Link href="/donate">Donate</Link>
          <Link href="/github">Github</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex flex-rows gap-1 pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            className="icon line"
            data-icon-name="menu-alt-2"
            data-style="line"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#BCBEDC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 10H3V3h7zm11-7h-7v7h7zM10 14H3v7h7zm11 0h-7v7h7z"
            ></path>
          </svg>
          <button className="text-lg font-recursive">Tools</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="icon line mt-1"
            data-icon-name="double-down-sign"
            data-style="line"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#BCBEDC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 5L12 10 3 5"
            ></path>
            <path
              fill="none"
              stroke="#BCBEDC"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 14L12 19 3 14"
              data-name="primary"
            ></path>
          </svg>
        </div>
        <div className="flex flex-rows gap-3 absolute top-0 right-0 p-7 pt-7">
          <div
            className="menu"
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              data-icon-name="menu-alt"
              data-style="line"
              viewBox="0 0 24 24"
              style={{ cursor: "pointer" }}
            >
              <path
                fill="none"
                stroke="#BCBEDC"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M3 18h18M3 12h18M3 6h18"
              ></path>
            </svg>
          </div>
        </div>
        {toggleDropdown && (
          <div className="dropdown absolute flex flex-col gap-2 right-0 top-full w-full justify-start items-start bg-navbar pl-7 pb-6 text-lg font-recursive">
            <Link href="/merge" onClick={() => setToggleDropdown(false)}>
              Merge
            </Link>
            <Link href="/split" onClick={() => setToggleDropdown(false)}>
              Split
            </Link>
            <Link href="/compress" onClick={() => setToggleDropdown(false)}>
              Compress
            </Link>
            <br /> <br />
            <Link href="/github" onClick={() => setToggleDropdown(false)}>
              Github
            </Link>
            <Link href="/donate" onClick={() => setToggleDropdown(false)}>
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
