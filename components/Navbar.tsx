"use client";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const svg = {
  profile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      data-icon-name="user-circle-2"
      data-style="line"
      viewBox="0 0 24 24"
    >
      <path
        className=" stroke-primary-light dark:stroke-primary-text"
        fill="none"
        stroke="#FBB637"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.875"
        d="M12 21h0a9 9 0 01-9-9h0a9 9 0 019-9h0a9 9 0 019 9h0a9 9 0 01-9 9zm0-14a4 4 0 104 4 4 4 0 00-4-4zm2.17 7.35a3.95 3.95 0 01-4.34 0 7 7 0 00-4.28 3.92 9 9 0 0012.81.09l.09-.09a7 7 0 00-4.28-3.92z"
      ></path>
    </svg>
  ),
};

const Navbar = () => {
  const { data: session } = useSession();

  const [smProfile, setSmProfile] = useState(false);
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav
      className="fixed p-3 w-full items-center bg-primary-dark dark:bg-opacity-30 dark:firefox:bg-opacity-90 dark:backdrop-filter dark:backdrop-blur-lg dark:border-b dark:border-primary-text
    text-primary-light dark:text-primary-text"
    >
      <div className="relative align-middle">
        <span className="sm:pl-7 pl-3 font-recursive text-3xl font-semibold">
          PDFile
        </span>
      </div>

      {/*Desktop*/}
      <div className="sm:flex hidden absolute items-center top-0 right-0 grid-cols-3 gap-3 p-4 pr-7 text-lg font-exo">
        <button>TOOLS</button>
        <Link href="/github">GITHUB</Link>
        <button className="pb-1" onClick={() => setSmProfile((prev) => !prev)}>
          {session?.user ? (
            <>
              <Image
                src={session.user.image as string}
                width={34}
                height={34}
                className="p-0.5 rounded-full"
                alt="profile"
              />
            </>
          ) : (
            <>{svg.profile}</>
          )}
        </button>
      </div>

      {/*Mobile*/}
      <div className="sm:hidden flex absolute items-center top-0 p-3 pr-3 right-0">
        <button
          className="pt-0.5"
          onClick={() => setSmProfile((prev) => !prev)}
        >
          {session?.user ? (
            <>
              <Image
                src={session.user.image as string}
                width={34}
                height={34}
                className="rounded-full"
                alt="profile"
              />
            </>
          ) : (
            <>{svg.profile}</>
          )}
        </button>
      </div>

      {smProfile && (
        <div className="profile">
          <div className="absolute top-0 left-0 p-4 w-full bg-primary-dark dark:bg-opacity-30 dark:firefox:bg-opacity-90 dark:backdrop-filter dark:backdrop-blur-lg dark:border-b dark:border-primary-text">
            {session?.user ? (
              <>
                <div
                  className="flex flex-wrap"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSmProfile((prev) => !prev)}
                >
                  <Image
                    src={session.user.image as string}
                    width={34}
                    height={34}
                    className="rounded-full"
                    alt="profile"
                  />
                  <span className="text-xl font-recursive pt-1 pl-1.5">
                    {session.user.name}
                  </span>
                </div>
                <div className="absolute top-0 right-0 p-4">
                  <button
                    className="text-sm font-exo rounded-full pl-3 pr-3 pb-1.5 pt-1.5 bg-primary-light text-primary-dark dark:text-primary-dark dark:bg-primary-text"
                    type="button"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div
                  className="flex flex-wrap"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSmProfile((prev) => !prev)}
                >
                  {svg.profile}
                  <span className="text-xl font-exo pt-1 pl-1">Profile</span>
                </div>
                {providers &&
                  Object.values(providers).map((provider: any) => (
                    <div className="absolute top-0 right-0 p-4">
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                        className="text-sm font-exo rounded-full pl-3 pr-3 pb-1.5 pt-1.5 bg-primary-light text-primary-dark dark:text-primary-dark dark:bg-primary-text"
                      >
                        Sign in
                      </button>
                    </div>
                  ))}
              </>
            )}

            <hr className="h-px my-3 bg-primary-light dark:bg-primary-text bg-opacity-75 border-0" />
            <div className="font-exo text-lg text-primary-light dark:text-primary-text flex flex-col items-start pl-1 gap-1">
              <button className="sm:hidden flex">Tools</button>
              <Link href="/github" className="sm:hidden flex">
                Github
              </Link>
              <Link href="/settings">Settings</Link>
              <Link href="/about">About</Link>
              <Link href="/help">Help</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
