import { Globe } from "./Globe";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export function DetailSectionOne() {
  return (
    <section id="stack" className="relative w-full px-6 py-20 bg-black">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Left Card */}
        <CardSpotlight className="relative md:col-span-2 row-span-2 rounded-2xl border border-white/10 bg-[#050505] overflow-hidden">
          {/* Globe */}
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <Globe />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-8 flex h-full flex-col justify-end">
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-200">
              Building globally distributed systems
            </h3>
            <p className="mt-2 text-sm text-neutral-400 max-w-md">
              Experience working with async teams and production systems across
              multiple time zones.
            </p>
          </div>
        </CardSpotlight>

        {/* Top Right Card */}
        <CardSpotlight className="rounded-2xl border border-white/10 bg-[#050505] p-6 flex items-center justify-center">
          <p className="text-center text-lg md:text-xl font-medium text-neutral-300 z-10">
            Flexible with
            <br /> global time zones
          </p>
        </CardSpotlight>

        {/* Bottom Right Card */}
        <CardSpotlight className="rounded-2xl border border-white/10 bg-[#050505] p-6">
          <p className="text-sm text-neutral-500 mb-3 z-10">
            Continuously evolving
          </p>
          <h4 className="z-10 text-xl font-semibold text-neutral-200 mb-5">
            My tech stack
          </h4>

          <div className="flex flex-wrap gap-3">
            {[
              "TypeScript",
              "Node.js",
              "Next.js",
              "Express",
              "Elysia",
              "Neon DB",
              "Upstash Redis",
              "tailwind CSS",
              "Drizzle ORM",
              "GIT",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-white/5 px-3 py-1 text-sm text-neutral-300 border border-white/10 z-10"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}
