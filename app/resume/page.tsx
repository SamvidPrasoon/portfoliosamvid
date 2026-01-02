"use client";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Page() {
  return (
    <main className={`${inter.className} bg-white text-gray-900`}>
      <Link href="samvid_resume.pdf">
        <button className="m-6 fixed cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 print:hidden">
          Download as PDF
        </button>
      </Link>

      <div className="max-w-[900px] mx-auto p-8">
        <div className="grid grid-cols-12 gap-8 relative">
          {/* LEFT COLUMN */}
          <aside className="col-span-4 text-sm space-y-6 pr-4 relative after:absolute after:top-0 after:bottom-0 after:left-full after:w-px after:bg-gray-300 after:-translate-x-1/2">
            {/* Contact */}
            <div>
              <p className="font-semibold">prasoonsamvid@gmail.com</p>
              <p>+91 8077521933</p>
              <p>Dibiyapur, India – 206244</p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Skills
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <b>Languages:</b> JavaScript, TypeScript, Python
                </li>
                <li>
                  <b>Frameworks:</b> Next.js, Express.js, Elysia.js
                </li>
                <li>
                  <b>Backend:</b> Node.js, REST API Design
                </li>
                <li>
                  <b>Data:</b> SQL, Drizzle ORM
                </li>
                <li>
                  <b>Cloud:</b> AWS (S3, Lambda, Secrets Manager)
                </li>
                <li>
                  <b>DevOps:</b> Docker, Kubernetes, CI/CD
                </li>
                <li>
                  <b>UI:</b> Tailwind CSS, shadcn/ui, Aceternity UI
                </li>
                <li>
                  <b>Tools:</b> Git
                </li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Education
              </h3>
              <p className="font-semibold">
                B.Tech – Electronics & Computer Science
              </p>
              <p>Kalinga Institute of Industrial Technology, Bhubaneswar</p>
              <p className="mt-2">
                <b>Higher Secondary:</b> Woodbine Gardenia School
              </p>
              <p>
                <b>Matriculation:</b> Woodbine Gardenia School
              </p>
            </div>

            {/* Profiles */}
            <div>
              <h3 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Profiles
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>linkedin.com/in/samvidprasoon</li>
                <li>github.com/SamvidPrasoon</li>
                <li>portfoliosamvid.vercel.app</li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Certifications
              </h3>
              <p>Full-Stack Web Development – IIT Kanpur</p>
              <p>Programming Essentials in Python – Cisco</p>
            </div>
            {/* Accomplishments */}
            <section>
              <h2 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Accomplishments
              </h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Star Performer – Q2 2024 (HSBC)</li>
                <li>Pat on the Back – Q2 2024 (HSBC)</li>
              </ul>
            </section>
          </aside>

          {/* RIGHT COLUMN */}
          <section className="col-span-8 space-y-6 pl-6">
            {/* Header */}
            <header>
              <h1 className="text-4xl font-bold">Samvid Prasoon</h1>
              <p className="text-gray-600 mt-1">
                Senior Software Engineer | Full-Stack Developer
              </p>
            </header>

            {/* Summary */}
            <section>
              <h2 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Summary
              </h2>
              <p className="text-sm leading-relaxed">
                Senior Software Engineer with 3+ years of experience building
                and operating production-grade full-stack systems using Next.js,
                Node.js, and TypeScript. Strong background in API design,
                cloud-native architectures, and system reliability. Proven
                ownership of end-to-end features, production incident
                management, and mentoring engineers in Agile teams.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Experience
              </h2>

              <div className="text-sm space-y-4">
                <div>
                  <p className="font-semibold">
                    HSBC – Senior Software Engineer
                    <span className="italic font-normal"> | Pune, India</span>
                  </p>
                  <p className="italic text-gray-600">Aug 2022 – Oct 2025</p>

                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>
                      Designed and developed scalable REST APIs supporting
                      critical business workflows, ensuring reliability,
                      backward compatibility, and clean contract definitions.
                    </li>
                    <li>
                      Led investigation and resolution of high-severity
                      production incidents, performing root-cause analysis and
                      implementing long-term preventive fixes within SLA
                      requirements.
                    </li>
                    <li>
                      Owned end-to-end feature delivery including design
                      discussions, implementation, testing, deployment, and
                      post-release monitoring.
                    </li>
                    <li>
                      Integrated and migrated third-party services
                      (notifications, CMS), reducing operational risk and
                      minimizing service disruption.
                    </li>
                    <li>
                      Mentored junior engineers through code reviews and
                      architectural discussions, promoting maintainable and
                      testable code practices.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="font-semibold uppercase border-b border-gray-300 mb-2 pb-1">
                Projects
              </h2>

              <div className="text-sm space-y-4">
                <div>
                  <p className="font-semibold">Portfolio Website</p>
                  <p className="italic text-gray-600">
                    Next.js, TypeScript, Tailwind CSS, shadcn/ui, Aceternity UI
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Designed and built a high-performance personal portfolio
                      using Next.js with reusable components and responsive
                      layouts.
                    </li>
                    <li>
                      Optimized client-side data fetching using React Query,
                      improving load times and application responsiveness.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">
                    Trek – Task & Board Management System
                  </p>
                  <p className="italic text-gray-600">
                    Next.js, BetterAuth, Neon (Postgres BaaS), Drizzle ORM
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Architected and developed a full-stack task and board
                      management system enabling structured workflows with
                      boards, statuses, and priorities.
                    </li>
                    <li>
                      Implemented authentication and session management using
                      BetterAuth, ensuring secure access control and role-safe
                      operations.
                    </li>
                    <li>
                      Designed and managed a cloud-native PostgreSQL data layer
                      on Neon, using Drizzle ORM to enforce schema consistency,
                      type safety, and data integrity.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">
                    Ghostroom – Ephemeral Real-Time Chat Application
                  </p>
                  <p className="italic text-gray-600">
                    Next.js, Elysia, Redis (Upstash)
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      Built a real-time chat application using Redis (Upstash)
                      for low-latency message propagation and concurrent
                      communication.
                    </li>
                    <li>
                      Designed ephemeral chat rooms with automatic expiration
                      and manual room teardown.
                    </li>
                    <li>
                      Implemented complete data purging on room destruction,
                      ensuring no data persisted beyond room lifetime.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
