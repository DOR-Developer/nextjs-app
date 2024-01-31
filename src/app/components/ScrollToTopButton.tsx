"use client";

import { useContext } from "react";
import { LanguageContext } from "../dashboard/pagecontent";
import { myLocalization } from "../lib/localizationStrings";

export default function ScrollToTopButton({...props}) {
  const { currentLanguage } = useContext(LanguageContext) as {
    currentLanguage: "es-ES" | "en-GB";
  };

  return (
    <button onClick={props.onClick} className="block m-auto border-solid border-2 border-emerald-500 text-emerald-600 px-3 py-2 rounded hover:bg-emerald-500 hover:text-white">
      {myLocalization[currentLanguage]["button_text"]}
    </button>
  )
}
