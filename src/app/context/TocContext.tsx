"use client";

import React, { createContext, useContext, useState } from "react";

type Heading = { id: string; title: string };

const TocContext = createContext<{
  headings: Heading[];
  setHeadings: (h: Heading[]) => void;
}>({
  headings: [],
  setHeadings: () => {},
});

export function TocProvider({ children }: { children: React.ReactNode }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  return (
    <TocContext.Provider value={{ headings, setHeadings }}>
      {children}
    </TocContext.Provider>
  );
}

export function useToc() {
  return useContext(TocContext);
}
