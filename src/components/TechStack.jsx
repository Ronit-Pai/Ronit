import React from "react";
import { THEME } from "../constants/theme";
import { GlassCard } from "./GlassCard";

import ReactIcon from "../assets/icons/react.svg?react";
import NextIcon from "../assets/icons/nextjs.svg?react";
import TypeScriptIcon from "../assets/icons/typescript.svg?react";
import PythonIcon from "../assets/icons/python.svg?react";
import TailwindIcon from "../assets/icons/tailwind.svg?react";
import Html5Icon from "../assets/icons/html5.svg?react";
import Css3Icon from "../assets/icons/css3.svg?react";
import JavaScriptIcon from "../assets/icons/javascript.svg?react";
import GitIcon from "../assets/icons/git.svg?react";

export function TechStack() {
  const technologies = [
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextIcon /> },
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "Python", icon: <PythonIcon /> },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
    { name: "HTML5", icon: <Html5Icon /> },
    { name: "CSS3", icon: <Css3Icon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "Git", icon: <GitIcon /> },
  ];

  return (
    <div style={{ marginBottom: "6rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "3rem",
          textAlign: "center",
          color: THEME.text,
        }}
      >
        Technical Skills
      </h2>

      <GlassCard glow={false}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "1rem 0",
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.15) translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.75rem",
                  border: `2px solid ${THEME.borderLight}`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  color: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = THEME.borderLight;
                  e.currentTarget.style.background = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = THEME.borderLight;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {tech.icon}
                </div>
              </div>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: THEME.textSecondary,
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
