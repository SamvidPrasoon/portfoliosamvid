"use client";

import Link from "next/link";


export function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative bg-black border-t border-white/[0.08] overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Main content */}
        <div className="flex flex-col items-center text-center gap-6">
          <h3 className="text-2xl font-semibold text-white">
            Let’s build something meaningful 🚀
          </h3>

          <p className="text-neutral-400 max-w-xl">
            I enjoy turning complex problems into simple, reliable solutions.
            Occasionally, I also turn tea ☕ (yes, lots of it) into
            production-ready code — debugging powered by caffeine.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mt-4">
            <Link
              href="mailto:prasoonsamvid31@gmail.com"
              className="px-5 py-2 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
            >
              Say Hello
            </Link>
            <Link
              href="/resume"
              className="px-5 py-2 rounded-xl  text-white font-medium border border-amber-100 border-2"
            >
              Check out My Resume
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/[0.08]" />

        {/* Bottom line */}
        <div className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Samvid Prasoon. Built with care,
          caffeine, and the occasional bug 🐛
        </div>
      </div>
    </footer>
  );
}
