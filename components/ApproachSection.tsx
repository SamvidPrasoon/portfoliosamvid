"use client";

import { approach } from "@/staticData/approach";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function ApproachSection() {
  return (
    <section id="approach" className="bg-black py-24 px-6">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-white">My Approach</h2>
        <p className="text-neutral-400 mt-4">
          How I approach building scalable, maintainable, and user-focused
          software projects.
        </p>
      </div>

      {/* Hover Cards */}
      <div className="max-w-5xl mx-auto">
        <HoverEffect
          items={approach.map((item, index) => ({
            title: `${index + 1}. ${item.title}`,
            description: item.description,
            link: index.toString(),
          }))}
        />
      </div>
    </section>
  );
}
