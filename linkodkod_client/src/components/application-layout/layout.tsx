import Logo from "./logo";
import Slogen from "./slogen";
import type { ReactNode } from 'react';
import React from "react";
import "../../syles/layoutStyle.css"
type MainLayout = {
      children: ReactNode;
      title?: string; 
    }

const Layout: React.FC<MainLayout> = ({children}) => {
  return (
    <>
      <header>
        <Slogen/>
        <Logo/>
      </header>
      {children}
    </>
  );
}

export default Layout;