import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <div>
        <Link href="/">
          <span>PDFile</span>
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
