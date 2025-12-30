"use client";

import Image from "next/image";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Highlight } from "@/components/ui/hero-highlight";

export default function ProjectsShowcasePage() {
  return (
    <section className="min-h-screen bg-black px-4 md:px-6 py-20 md:py-24">
      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16 text-center">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white">
          <Highlight className="text-black dark:text-white">
            GHOSTROOM
          </Highlight>
        </h1>

        <p className="mt-3 md:mt-4 text-sm md:text-base text-neutral-400 max-w-2xl mx-auto">
          Self-destructing chat rooms — no history, no recovery, no traces left
          behind.
        </p>

        <Link href="/" className="inline-block mt-4">
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition">
            ← Back
          </button>
        </Link>
      </div>

      {/* ================= BENTO GRID ================= */}
      <BentoGrid
        className="
          max-w-7xl mx-auto
          grid-cols-1
          md:grid-cols-3
          auto-rows-[18rem]
          md:auto-rows-[22rem]
          gap-4
        "
      >
        {/* BIG HERO CARD */}
        <BentoGridItem
          className="bg-black h-[22rem] md:h-auto md:col-span-2 md:row-span-2"
          header={
            <ProjectImage
              src="/destruct01.png"
              title="GhostRoom"
              description="Landing page & entry flow"
            />
          }
        />

        {/* MEDIUM */}
        <BentoGridItem
          className="bg-black h-[18rem] md:h-auto"
          header={
            <ProjectImage
              src="/destruct02.png"
              title="Chat Page"
              description="Secure message interface"
            />
          }
        />

        {/* MEDIUM */}
        <BentoGridItem
          className="bg-black h-[18rem] md:h-auto"
          header={
            <ProjectImage
              src="/destruct03.png"
              title="Chat Section"
              description="Message area & live updates"
            />
          }
        />

        {/* SMALL */}
        <BentoGridItem
          className="bg-black h-[16rem] md:h-auto"
          header={
            <ProjectImage
              src="/destruct04.png"
              title="Room Full"
              description="Capacity reached"
              compact
            />
          }
        />

        {/* SMALL */}
        <BentoGridItem
          className="bg-black h-[16rem] md:h-auto"
          header={
            <ProjectImage
              src="/destruct05.png"
              title="Room Not Found"
              description="Invalid or expired room"
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
    <div className="group relative h-full w-full overflow-hidden rounded-xl">
      {/* Image */}
      <Image
        src={src}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        priority={title === "GhostRoom"}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 p-4 md:p-5">
        <h3
          className={`font-semibold text-white ${
            compact ? "text-base" : "text-xl md:text-2xl"
          }`}
        >
          {title}
        </h3>

        <p className="mt-1 text-xs md:text-sm text-neutral-300 max-w-xs">
          {description}
        </p>
      </div>
    </div>
  );
}
