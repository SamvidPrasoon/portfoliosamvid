"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Layers, Briefcase, User, Mail, Network } from "lucide-react";

const navItems = [
  {
    title: "Techstack",
    icon: <Layers className="h-5 w-5" />,
    href: "#stack",
  },
  {
    title: "Projects",
    icon: <Network className="h-5 w-5" />,
    href: "#projects",
  },
  {
    title: "Experience",
    icon: <Briefcase className="h-5 w-5" />,
    href: "#experience",
  },
  {
    title: "Approach",
    icon: <User className="h-5 w-5" />,
    href: "#approach",
  },
  {
    title: "Contact",
    icon: <Mail className="h-5 w-5" />,
    href: "#contact",
  },
];

const Dock = () => {
  return (
    <div className="relative z-30 mt-16 flex justify-center">
      <FloatingDock items={navItems} />
    </div>
  );
};

export default Dock;
