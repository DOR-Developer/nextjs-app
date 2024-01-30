"use client";

import Image from "next/image";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function Page() {
  
  const scrollToTop = () => {
    document.getElementsByTagName("main")[0].scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className="max-w-screen-md m-auto">
      <Image
        src={`/next.svg`}
        alt={`Webmaster photography`}
        className="dark:invert"
        width={394}
        height={80}
        priority
      />
      <br/>
      <p>I'm Daniel Otero Rivera, a Software Developer.</p>
      <br/>
      <p>At the moment I'm focusing on web technologies, using primarily frontend frameworks such as <span className="text-emerald-500 font-bold">NextJS and React</span> - which I've used for this website - and<span className="text-rose-500 font-bold"> Angular.</span></p>
      <p>In the past I've mostly used <b>Vanilla JavaScript</b> and <b>jQuery</b>, developing custom components - that you can preview from the sidemenu - and customizing component libraries such as Highcharts and jQWidgets.</p>
      <br/>
      <p>Even though I'm not as fluent in backend languages, I'm fairly used to <b>NodeJS</b>, and I use it together with <b>MongoDB</b> in order to build APIs for my frontend projects. I also use Python pretty often when I want to work with files or just to try things out quickly.</p>
      <br/>
      <p>I'm obsessed with CSS. It's been more than 4 years since I started figuring out the rules and I'm still  discovering some tricks up to this day!</p><p>Recently I've been getting into <b>TailwindCSS</b> and I'm having so much fun discovering alternatives to my styling workflow. Early in my programming journey I tried getting into Bootstrap, but I've always had the feeling that I can work faster and better writing the classes myself - something I haven't felt with Tailwind latelly.</p>
      <br/>
      <p>You can find my social media accounts through the next links.</p>
      <section className="flex flex-wrap gap-6 align-middle justify-around py-4 px-4 my-4 border-solid border-2 border-emerald-500 rounded-lg">
        <a className="flex align-middle gap-2" href="https://github.com/DOR-Developer/" target="_blank">
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
        <a className="flex align-middle gap-2" href="https://linkedin.com/in/daniel-otero-rivera-98961a25a" target="_blank">
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
      </section>
      <p>Or contact me directly through my personal email at <a className="font-bold text-emerald-500" href="mailto:oteroriveradaniel@gmail.com">oteroriveradaniel@gmail.com</a></p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic beatae architecto nulla magni perspiciatis aperiam assumenda adipisci, veniam quod, tempore quibusdam nisi velit esse consequuntur delectus possimus, odio dolore?</p>

      <p className="text-gray-500 text-sm py-2">- January 2024</p>
      <ScrollToTopButton onClick={scrollToTop}/>
    </div>
  )
}