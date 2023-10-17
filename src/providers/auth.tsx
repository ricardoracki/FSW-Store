"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";

export const AuthProviider = ({ children }: SessionProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
