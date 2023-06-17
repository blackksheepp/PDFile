"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";
  return (
    <button className=" fixed z-40 bottom-5 right-5 dark:bg-primary-dark dark:text-primary-text bg-primary-light text-primary-dark w-10 h-10 rounded-full justify-center items-center">
      {light ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} size={27} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("light")} size={27} />
      )}
    </button>
  );
};

export default ThemeChanger;
