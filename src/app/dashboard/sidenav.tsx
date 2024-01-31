"use client";

import styles from "@/app/dashboard/dashboard.module.scss";
import Link from "next/link";
import { routeLinks } from "@/app/lib/routeLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

export default function SideNav() {
  const pathName = usePathname();
  const [hiddenMenu, setHiddenMenu] = useState(false);

  return (
    <>
      <div onClick={() => setHiddenMenu(!hiddenMenu)} className={`${styles["dor-title-container"]} cursor-pointer hover:bg-indigo-600 bg-emerald-500 text-white`}>
        {/* TODO: Add logo */}
        <h2>My Portfolio</h2>
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
                  <p>{link.name}</p>
                </Link>

              </li>
            )
          })}
        </ul>
      }
    </>
  )
}
