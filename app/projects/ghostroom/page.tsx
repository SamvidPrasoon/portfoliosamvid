"use client";

import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Highlight } from "@/components/ui/hero-highlight";

export default function ProjectsShowcasePage() {
  return (
    <section className="min-h-screen bg-black px-4 md:px-6 py-20 md:py-28">
      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto mb-14 md:mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
          <Highlight className="text-black dark:text-white">
            GHOSTROOM
          </Highlight>
        </h1>

        <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Self-destructing chat rooms built for privacy — no history, no
          recovery, no traces left behind.
        </p>

        <Link href="/" className="inline-block mt-6">
          <button
            className="
              rounded-lg
              border border-white/15
              bg-white/5
              px-4 py-2
              text-sm font-medium text-white
              backdrop-blur
              transition
              hover:bg-white/10
            "
          >
            ← Back
          </button>
        </Link>
        <a
          href="https://excalidraw.com/#json=Oclq7T0HL3JaaJdqALyDU,AQatQwMFviurF0N1t7N_5Q"
          className="inline-block mt-6"
        >
          <button
            className="
              rounded-lg
              border border-white/15
              bg-amber-700
              px-4 py-2
              text-sm font-medium text-white
              backdrop-blur
              transition
              hover:bg-white/10
              ml-2
              cursor-pointer
            "
          >
            Design Details
          </button>
        </a>
      </div>

      {/* ================= BENTO GRID ================= */}
      <BentoGrid
        className="
          max-w-7xl mx-auto
          grid-cols-1 md:grid-cols-3
          auto-rows-[17rem] md:auto-rows-[20rem]
          gap-4
        "
      >
        {/* BIG HERO */}
        <BentoGridItem
          className="
            bg-black
            md:col-span-2 md:row-span-2
            transition-transform duration-300
            hover:-translate-y-1
          "
          header={
            <ProjectImage
              src="/destruct01.png"
              title="GhostRoom"
              description="Landing page & secure entry flow"
            />
          }
        />

        {/* MEDIUM */}
        <BentoGridItem
          className="bg-black transition-transform duration-300 hover:-translate-y-1"
          header={
            <ProjectImage
              src="/destruct02.png"
              title="Chat Page"
              description="Minimal, secure messaging interface"
            />
          }
        />

        {/* MEDIUM */}
        <BentoGridItem
          className="bg-black transition-transform duration-300 hover:-translate-y-1"
          header={
            <ProjectImage
              src="/destruct03.png"
              title="Live Chat"
              description="Real-time updates with zero persistence"
            />
          }
        />

        {/* SMALL */}
        <BentoGridItem
          className="bg-black transition-transform duration-300 hover:-translate-y-1"
          header={
            <ProjectImage
              src="/destruct04.png"
              title="Room Full"
              description="Capacity enforcement"
              compact
            />
          }
        />

        {/* SMALL */}
        <BentoGridItem
          className="bg-black transition-transform duration-300 hover:-translate-y-1"
          header={
            <ProjectImage
              src="/destruct05.png"
              title="Room Not Found"
              description="Expired or invalid rooms"
              compact
            />
          }
        />
      </BentoGrid>
    </section>
  );
}

/* ================================================= */
/* PROJECT IMAGE CARD */
/* ================================================= */

function ProjectImage({
  src,
  title,
  description,
  compact = false,
}: {
  src: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div
      className="
        group relative h-full w-full overflow-hidden rounded-2xl
        border border-white/10
        bg-neutral-950
        transition-all duration-300
        hover:border-white/20
        hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.85)]
      "
    >
      {/* IMAGE */}
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.04]
        "
        priority={title === "GhostRoom"}
      />

      {/* OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/75
          via-black/35
          to-transparent
        "
      />

      {/* TEXT PANEL */}
      <div
        className="
          absolute bottom-0 w-full
          p-4 md:p-5
          backdrop-blur-sm
          bg-black/30
        "
      >
        <h3
          className={`font-medium tracking-tight text-white ${
            compact ? "text-sm" : "text-lg md:text-xl"
          }`}
        >
          {title}
        </h3>

        <p
          className="
            mt-1 text-xs md:text-sm
            text-neutral-400
            leading-relaxed
            max-w-xs
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
