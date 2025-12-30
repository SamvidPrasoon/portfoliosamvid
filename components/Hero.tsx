"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import Dock from "./Dock";
import { Highlight } from "./ui/hero-highlight";

export function Hero() {
  return (
    <section id="home" className="relative w-full bg-black">
      <BackgroundLines className="flex min-h-[36rem] md:min-h-[42rem] items-center justify-center w-full flex-col px-6 bg-black">
        {/* Headline */}
        <h1
          className="relative z-20 text-center font-extrabold tracking-tight
          text-3xl md:text-5xl lg:text-7xl
          bg-clip-text text-transparent
          bg-gradient-to-b from-neutral-200 to-neutral-400
          py-4"
        >
          Hi, I’m{" "}
          <span className="text-white">
            {" "}
            <Highlight className="text-black dark:text-white">
              SAMVID
            </Highlight>
          </span>{" "}
          
          <br />
          I build products that scale
          <br />
          <span className="text-neutral-400">in the real world.</span>
        </h1>

        {/* Subheading */}
        <p
          className="relative z-20 mt-6 max-w-2xl text-center
          text-sm md:text-lg leading-relaxed
          text-neutral-400"
        >
          Senior Full-Stack Engineer focused on clean architecture, performance,
          and developer experience. I enjoy turning complex problems into
          simple, reliable systems — usually powered by a lot of tea ☕.
        </p>

        {/* Floating Dock */}
        <Dock />
      </BackgroundLines>
    </section>
  );
}
