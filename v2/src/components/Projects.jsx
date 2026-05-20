"use client";
import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/constants/data";
import { THEME } from "@/constants/theme";

export function Projects() {
  return (
    <section id="projects" className="section-padding-roomy section-mid">
      <div className="section-inner">
        <h2
          className="font-bold text-center font-montserrat"
          style={{
            fontSize: "2rem",
            color: THEME.text,
            marginBottom: "3rem",
          }}
        >
          Stuff I&apos;ve enjoyed working on
        </h2>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-body">
                <div
                  className="w-full mb-4 overflow-hidden rounded-lg"
                  style={{ height: "200px", background: THEME.surface }}
                >
                  {typeof project.image === "string" &&
                  project.image.length <= 2 ? (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ fontSize: "4rem" }}
                    >
                      {project.image}
                    </div>
                  ) : (
                    <img
                      src={project.image.src || project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontSize: "1.3rem", color: THEME.accent }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    color: THEME.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </p>
                {project.tech && (
                  <div className="flex flex-wrap" style={{ gap: "0.5rem" }}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="project-card-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <ExternalLink size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: "2rem" }}>
          <Link href="/work" className="btn-solid">
            Check out more projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
