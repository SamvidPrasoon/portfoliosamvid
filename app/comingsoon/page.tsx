"use client";

import Image from "next/image";
import Link from "next/link";
import { Highlight } from "@/components/ui/hero-highlight";

export default function ComingSoonPage() {
  return (
    <section className="relative min-h-screen  flex flex-col items-center justify-center px-4 md:px-6 text-center overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 -z-15">
        <Image
          src="/comingSoon.png" // Your crazy 'coming soon' graphic
          alt="Coming Soon Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-7xl font-extrabold text-black mb-6 ">
        <br />
        COMING SOON 🚀
      </h1>

      <p className="text-black text-sm md:text-lg max-w-xl mb-8">
        Something amazing is brewing behind the scenes. Stay tuned! Meanwhile,
        you can explore my other projects or say hello.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <button className="rounded-lg bg-black px-6 py-3 text-white font-semibold cursor-pointer">
            Explore Other Projects
          </button>
        </Link>
      </div>

      {/* Footer Fun Text */}
      <p className="absolute bottom-6 text-xs text-neutral-500 w-full text-center">
        Built with Tea ☕, curiosity 🤓, and a dash of chaos 🐉
      </p>
    </section>
  );
}
