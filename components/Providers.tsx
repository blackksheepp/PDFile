"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { Session } from "next-auth";

const Providers = ({
  children,
  session,
}: {
  children: ReactNode;
  session?: Session;
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider session={ session }>
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
