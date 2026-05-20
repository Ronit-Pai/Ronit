"use client";
import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { THEME } from "@/constants/theme";

export function ProjectRow({ reverse = false, project }) {
  const projectData = project || {
    title: "Project Title",
    description:
      "A brief description of the project goes here. This showcases the work and highlights key features.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: null,
    github: "https://github.com",
    demo: "https://example.com",
  };

  const content = (
    <div
      className="flex flex-col justify-center"
      style={{ gap: "1.5rem" }}
    >
      <h3
        className="font-bold font-montserrat"
        style={{
          fontSize: "2rem",
          color: THEME.accent,
          marginBottom: "0.5rem",
        }}
      >
        {projectData.title}
      </h3>

      <p
        className="font-exo2"
        style={{
          color: THEME.textSecondary,
          lineHeight: 1.6,
          fontSize: "1.1rem",
        }}
      >
        {projectData.description}
      </p>

      <div className="flex flex-wrap" style={{ gap: "0.75rem" }}>
        {projectData.tech.map((tech) => (
          <span key={tech} className="tag-pill tag-pill-lg">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex" style={{ gap: "1rem", marginTop: "0.5rem" }}>
        {projectData.github && (
          <a
            href={projectData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FaGithub size={18} /> GitHub
          </a>
        )}

        {projectData.demo && projectData.demo !== "" && (
          <a
            href={projectData.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );

  const imageContainer = (
    <div
      className="w-full overflow-hidden"
      style={{
        maxWidth: "500px",
        aspectRatio: "16/9",
        background: THEME.surface,
        border: `2px solid ${THEME.border}`,
        borderRadius: "1rem",
      }}
    >
      {projectData.image && (
        <img
          src={projectData.image.src || projectData.image}
          alt={projectData.title}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );

  return (
    <div
      className="grid items-center"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "3rem",
      }}
    >
      {reverse ? (
        <>
          {imageContainer}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageContainer}
        </>
      )}
    </div>
  );
}
