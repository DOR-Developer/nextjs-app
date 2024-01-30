"use client";

import styles from "@/app/dashboard/dashboard.module.scss";
import Link from "next/link";
import { routeLinks } from "@/app/lib/routeLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function SideNav() {
  const pathName = usePathname();
  return (
    <>
      <div className={`${styles["dor-title-container"]} bg-emerald-600 text-white`}>
        {/* TODO: Add logo */}
        <h2>DOR Portfolio</h2>
        <small className="text-emerald-50">- By Daniel Otero Rivera</small>
      </div>
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
                    "hover:border-red-500 hover:text-red-600": link.name === "Logout", 
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
    </>
  )
}