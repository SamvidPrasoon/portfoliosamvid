"use client";

import Image from "next/image";
import Link from "next/link";
import { cards } from "@/staticData/cards";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function RecentProjectsSection() {
  return (
    <>
      {/* Section Heading */}
      <h1
        id="projects"
        className="bg-black flex justify-center text-4xl text-white font-bold"
      >
        Recent Side Projects
      </h1>

      {/* Grid */}
      <div className="bg-black py-16 px-6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <Link key={idx} href={card.link ?? "#"} className="block">
            <CardContainer className="inter-var w-full">
              <CardBody className="bg-black relative group/card border border-white/[0.2] w-full rounded-xl p-6 h-full">
                {/* Title */}
                <CardItem
                  translateZ={50}
                  className="text-xl font-bold text-white"
                >
                  {card.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ={60}
                  className="text-neutral-300 text-sm mt-2"
                >
                  {card.description}
                </CardItem>

                {/* Tech stack */}
                <CardItem translateZ={60} className="mt-2">
                  <p className="text-xs text-white/70">
                    Tech Stack: {card.tech.join(", ")}
                  </p>
                </CardItem>

                {/* Image */}
                <CardItem translateZ={100} className="w-full mt-4">
                  <Image
                    src={`/${card.img}.png`}
                    width={1000}
                    height={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`${card.title} preview`}
                    priority={idx === 0}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </Link>
        ))}
      </div>
    </>
  );
}
