"use client";

import React, { useState, createContext } from 'react'
import SideNav from './sidenav';
import Footer from './footer';


export const LanguageContext = createContext<{
  currentLanguage: "es-ES" | "en-GB";
} | null>(null);

export default function PageContent({...props}) {
  const [currentLanguage, setCurrentLanguage] = useState<"es-ES" | "en-GB">("es-ES");

  return (
    <LanguageContext.Provider value={{ currentLanguage }}>
      <aside className="flex flex-col p-2 shadow-md bg-white">
        <SideNav changeLanguage={setCurrentLanguage} language={currentLanguage}/>
      </aside>
      <main className="flex-auto flex flex-col items-center">
        <div className="max-w-screen-md m-auto">
          {props.childNode}
        </div>
        <footer>
          <Footer />
        </footer>
      </main>
    </LanguageContext.Provider>
  )
}
