import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-grayishblue fixed w-full top-0 left-0 z-20 border-b border-gray-200 max-w-screen flex flex-wrap items-center justify-between mx-auto p-6">
      <div>
        <Link href="/">
          <span className="font-recursive text-lightergray self-center text-3xl font-semibold whitespace-nowrap">PDFile</span>
        </Link>
      </div>

      <div>
        <button></button>
        <Link href="/merge">Merge</Link>
        <Link href="/split">Split</Link>
        <Link href="/compress">Compress</Link>
      </div>

      <div>
        <Link href="/donate">Donate</Link>
        <Link href="/github">Github</Link>
      </div>
    </nav>
  );
};

export default Navbar;
