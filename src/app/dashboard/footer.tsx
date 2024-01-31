"use client";

import Image from 'next/image'
import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
    document.getElementsByTagName("main")[0].scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <ScrollToTopButton onClick={scrollToTop}/>
      <section className="flex flex-wrap gap-3 align-middle justify-around py-2 px-4 m-4 bg-white text-black rounded-lg">
        <a className="flex align-middle gap-2 py-2 px-4 rounded-lg hover:bg-gray-100" href="https://github.com/DOR-Developer/" target="_blank">
          <Image
            src={"/github-mark.svg"}
            alt={`Logo GitHub`}
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          GitHub
        </a>
        <a className="flex align-middle gap-2 py-2 px-4 rounded-lg hover:bg-gray-100" href="https://linkedin.com/in/daniel-otero-rivera-98961a25a" target="_blank">
          <Image
            src={"/LI-In-Bug.png"}
            alt={`Logo GitHub`}
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          LinkedIn
        </a>
        <a className="flex align-middle gap-2 py-2 px-4 rounded-lg hover:bg-gray-100" href="mailto:oteroriveradaniel@gmail.com">
          <Image
            src={"/gmail.svg"}
            alt={`Logo GitHub`}
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
          Gmail
        </a>
      </section>
    </>
  )
}
