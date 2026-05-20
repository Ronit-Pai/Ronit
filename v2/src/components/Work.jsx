"use client";
import React, { useState } from "react";
import { THEME } from "@/constants/theme";
import { WorkTabs } from "./WorkTabs";
import { ProjectsSection } from "./ProjectsSection";
import { ArtSection } from "./ArtSection";

export function Work() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="work" className="section-padding-lg">
      <div className="section-inner">
        <div className="text-center mb-12">
          <h2
            className="font-bold mb-4 font-montserrat"
            style={{ fontSize: "4.5rem", lineHeight: 1.1 }}
          >
            My Work
          </h2>
          <p
            className="font-exo2"
            style={{ color: THEME.textSecondary, fontSize: "1.15rem" }}
          >
            Projects, experiments, and visual explorations.
          </p>
        </div>

        <WorkTabs active={activeTab} setActive={setActiveTab} />

        <div style={{ marginTop: "4rem" }}>
          {activeTab === "projects" && <ProjectsSection />}
          {activeTab === "art" && <ArtSection />}
        </div>
      </div>
    </section>
  );
}
