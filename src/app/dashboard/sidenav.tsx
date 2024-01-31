"use client";

import styles from "@/app/dashboard/dashboard.module.scss";
import Link from "next/link";
import { routeLinks } from "@/app/lib/routeLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useContext, useState } from "react";
import { LanguageContext } from "./pagecontent";
import { myLocalization } from "../lib/localizationStrings";

export default function SideNav(props: {
  changeLanguage: Function;
  language: string;
}) {
  const pathName = usePathname();
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const { currentLanguage } = useContext(LanguageContext) as {
    currentLanguage: "es-ES" | "en-GB";
  };

  return (
    <>
      <div onClick={() => setHiddenMenu(!hiddenMenu)} className={`${styles["dor-title-container"]} cursor-pointer hover:bg-indigo-600 bg-emerald-500 text-white`}>
        {/* TODO: Add logo */}
        <h2>{myLocalization[currentLanguage]["sidebar"]["title"]}</h2>
      </div>
      {!hiddenMenu && 
        <ul className={styles["sidebar-routes"]}>
          {routeLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    "border-transparent border-solid border-2 hover:border-emerald-500", 
                    {
                      "bg-emerald-100": pathName === link.href, 
                      "hover:border-indigo-500 hover:bg-indigo-50": link.name === "Logout", 
                      "bg-gray-50": pathName !== link.href, 
                    }
                  )}
                >
                  <Image
                    src={`/${link.icon}.svg`}
                    alt={`Logo ${link.name}`}
                    className="dark:invert"
                    width={24}
                    height={24}
                    priority
                  />
                  <p>{myLocalization[currentLanguage]["sidebar"][link.name as "home" | "about" | "component"]}</p>
                </Link>

              </li>
            )
          })}
        </ul>
      }
      <div className="flex gap-4">
          <Image
            src={`/english.png`}
            alt={`Idioma inglés`}
            className={`${props.language != "en-GB" && "opacity-30"} hover:opacity-100 dark:invert cursor-pointer`}
            width={56}
            height={56}
            priority
            onClick={() => props.changeLanguage("en-GB")}
          />
          <Image
            src={`/spanish.png`}
            alt={`Idioma español`}
            className={`${props.language != "es-ES" && "opacity-30"} hover:opacity-100 dark:invert cursor-pointer`}
            width={50}
            height={50}
            priority
            onClick={() => props.changeLanguage("es-ES")}
          />
      </div>
    </>
  )
}
