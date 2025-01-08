"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function BaseProvider({ children }: ThemeProviderProps) {
  return (
    <>
      <React.Suspense fallback={<>Is Loading...</>}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </React.Suspense>
    </>
  );
}
