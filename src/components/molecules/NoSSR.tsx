import dynamic from "next/dynamic"
import React from "react";


interface INoSSRProps {
  children: React.ReactNode;
}

const NoSSR: React.ComponentType<INoSSRProps> =
  dynamic(() => Promise.resolve(({ children }) => children), { ssr: false });

export { NoSSR }
