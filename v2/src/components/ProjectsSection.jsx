"use client";
import React from "react";
import { ProjectRow } from "./ProjectRow";
import { PROJECTS } from "@/constants/data";

export function ProjectsSection() {
  return (
    <div className="flex flex-col" style={{ gap: "6rem" }}>
      {PROJECTS.map((project, index) => (
        <ProjectRow
          key={index}
          project={project}
          reverse={index % 2 === 1}
        />
      ))}

      <div className="text-center" style={{ marginTop: "2rem" }}>
        <a
          href="https://github.com/Ronit-Pai"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid"
        >
          Checkout more projects →
        </a>
      </div>
    </div>
  );
}
