"use client";

import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";

export default function ProjectsShowcasePage() {
  return (
    <section className="min-h-screen bg-black px-6 py-24">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          <Highlight className="text-black dark:text-white">
            GHOSTROOM
          </Highlight>
        </h1>
        <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          Self destruct chat message vanish forever,no histroy no recovery
        </p>
        <Link href="/">
          <button className="bg-white text-2xl mt-2 rounded p-1 cursor-pointer">
            Back
          </button>
        </Link>
      </div>

      {/* Bento Grid */}
      <BentoGrid className="max-w-7xl mx-auto">
        {/* 1️⃣ BIG HERO CARD */}
        <BentoGridItem
          className="md:col-span-2 md:row-span-2 bg-black"
          header={
            <ProjectImage
              src="/destruct01.png"
              title="GhostRoom"
              description="Landing Page"
            />
          }
        />

        {/* 2️⃣ MEDIUM CARD */}
        <BentoGridItem
          className="bg-black"
          header={
            <ProjectImage
              src="/destruct02.png"
              title="Chat Page"
              description=""
            />
          }
        />

        {/* 3️⃣ MEDIUM CARD */}
        <BentoGridItem
          className="bg-black"
          header={
            <ProjectImage
              src="/destruct03.png"
              title="Chat Section"
              description="message area"
            />
          }
        />

        {/* 4️⃣ SMALL CARD */}
        <BentoGridItem
          className="bg-black"
          header={
            <ProjectImage
              src="/destruct04.png"
              title="Room Full"
              description="Capacity Reached"
              compact
            />
          }
        />

        {/* 5️⃣ SMALL CARD */}
        <BentoGridItem
          className="bg-black"
          header={
            <ProjectImage
              src="/destruct05.png"
              title="Room Not Found"
              description="Non Existing Room accessed "
              compact
            />
          }
        />
      </BentoGrid>
    </section>
  );
}

/* -------------------------------------------- */
/* Image Card Component */
/* -------------------------------------------- */

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
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-5">
        <h3
          className={`font-semibold text-white ${
            compact ? "text-lg" : "text-2xl"
          }`}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-300 max-w-xs">{description}</p>
      </div>
    </div>
  );
}
