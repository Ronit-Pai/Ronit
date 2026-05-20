"use client";
import React from "react";
import { GlassCard } from "./GlassCard";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import PythonIcon from "@/assets/icons/python.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import GitIcon from "@/assets/icons/git.svg";

export function TechStack() {
  const technologies = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "HTML5", icon: Html5Icon },
    { name: "CSS3", icon: Css3Icon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "Git", icon: GitIcon },
  ];

  return (
    <section id="skills">
      <h2
        className="text-[2rem] font-bold text-center text-text-primary font-montserrat"
        style={{ marginBottom: "3rem" }}
      >
        Technical Skills
      </h2>

      <GlassCard glow={false}>
        <div
          className="flex items-center justify-center flex-wrap"
          style={{ gap: "2rem", padding: "1.5rem 1rem" }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.15] hover:-translate-y-1"
              style={{ gap: "1rem" }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-border-light transition-all duration-300 bg-transparent">
                <img
                  src={tech.icon.src || tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <p className="text-xs text-text-secondary text-center font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}
