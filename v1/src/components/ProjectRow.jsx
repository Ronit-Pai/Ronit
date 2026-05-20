import React from "react";
import { THEME } from "../constants/theme";
import { ExternalLink, Github } from "lucide-react";
import projectScreenshot from "../assets/screenshots/project1.png";
import { PROJECTS } from "../constants/data";

export function ProjectRow({ reverse = false, project }) {
  const projectData = project || {
    title: "Project Title",
    description:
      "A brief description of the project goes here. This showcases the work and highlights key features.",
    tech: ["React", "TypeScript", "Tailwind"],
    image: projectScreenshot,
    github: "https://github.com",
    demo: "https://example.com",
  };

  const content = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: THEME.accent,
          marginBottom: "0.5rem",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        {projectData.title}
      </h3>

      <p
        style={{
          color: THEME.textSecondary,
          lineHeight: "1.6",
          fontSize: "1.1rem",
          fontFamily: "'Exo 2', sans-serif",
        }}
      >
        {projectData.description}
      </p>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        {projectData.tech.map((tech) => (
          <span
            key={tech}
            style={{
              padding: "0.4rem 0.9rem",
              borderRadius: "9999px",
              background: `${THEME.accent}15`,
              border: `1px solid ${THEME.accent}40`,
              color: THEME.accent,
              fontSize: "0.85rem",
              fontWeight: "500",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
        {projectData.github && (
          <a
            href={projectData.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: THEME.accent,
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              border: `1.5px solid ${THEME.accent}`,
              borderRadius: "1.5rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${THEME.accent}15`;
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <Github size={18} /> GitHub
          </a>
        )}

        {projectData.demo && projectData.demo !== "" && (
          <a
            href={projectData.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: THEME.accent,
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              border: `1.5px solid ${THEME.accent}`,
              borderRadius: "1.5rem",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${THEME.accent}15`;
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );

  const imageContainer = (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        aspectRatio: "16/9",
        background: THEME.surface,
        border: `2px solid ${THEME.border}`,
        borderRadius: "1rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {projectData.image && (
        <img
          src={projectData.image}
          alt={projectData.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}
    </div>
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "3rem",
        alignItems: "center",
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
