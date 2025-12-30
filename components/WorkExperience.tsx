"use client";

import { workExperience } from "@/staticData/work-experience";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";

export function WorkExperienceSection() {
  return (
    <section id="experience" className="bg-black py-24 px-6">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Work Experience
      </h2>

      {/* Timeline */}
      <Timeline
        data={workExperience.map((exp) => ({
          title: exp.duration,
          content: (
            <div className="bg-neutral-900 border border-white/[0.1] rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>

              <p className="text-sm text-neutral-400 mt-1">{exp.company}</p>

              <p className="text-neutral-300 text-sm mt-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="bg-white/10 text-white border-white/[0.15]"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </section>
  );
}
