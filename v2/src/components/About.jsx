"use client";
import React from "react";
import { THEME } from "@/constants/theme";
import { GlassCard } from "./GlassCard";
import { TiltedCard } from "./TiltedCard";
import { TechStack } from "./TechStack";
import profileImg from "@/assets/art/profile.jpg";

export function About() {
  return (
    <section id="about" className="section-padding-roomy section-solo">
      <div className="section-inner">
        {/* About Me */}
        <div className="about-block">
          <div
            className="grid items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "3rem",
            }}
          >
            <div className="h-[400px]">
              <TiltedCard scale={1.08}>
                <img
                  src={profileImg.src || profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{
                    borderRadius: "1rem",
                    border: `2px solid ${THEME.border}`,
                    boxShadow: `inset 0 0 30px ${THEME.accent}20`,
                  }}
                />
              </TiltedCard>
            </div>

            <div>
              <h1
                className="text-[3rem] font-bold font-montserrat"
                style={{ marginBottom: "1rem" }}
              >
                I&apos;m <span className="text-accent">Ronit Pai</span>
              </h1>
              <div
                className="text-[1.3rem] text-blue font-semibold"
                style={{ marginBottom: "1.5rem" }}
              >
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Montserrat&size=22&duration=3000&pause=1000&color=D4AF37&center=false&vCenter=true&width=400&lines=I+Code;I+Draw;I+Design;I+Game"
                  alt="Typing SVG"
                  style={{ filter: `drop-shadow(0 0 8px ${THEME.accent}80)` }}
                />
              </div>
              <p
                className="text-base text-text-secondary leading-[1.8] font-exo2"
                style={{ marginTop: "0.5rem" }}
              >
                I&apos;m a passionate Frontend Developer with a keen interest in AI/ML. I
                combine technical expertise with creative thinking to build products that
                make a real impact. Apart from coding I enjoy drawing, watching
                movies/webseries and mainly gaming!!
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="about-block">
          <h2
            className="text-[2rem] font-bold text-center text-text-primary font-montserrat"
            style={{ marginBottom: "3rem" }}
          >
            Education
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            <GlassCard glow>
              <h3
                className="text-[1.3rem] font-bold text-accent font-montserrat"
                style={{ marginBottom: "0.75rem" }}
              >
                B.Tech. Computer Science
              </h3>
              <p
                className="text-blue text-[0.95rem] font-semibold"
                style={{ marginBottom: "0.75rem" }}
              >
                NMAMIT, Nitte
              </p>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                Specialized in computer science with focus on full-stack development and
                modern web technologies.
              </p>
            </GlassCard>

            <GlassCard glow>
              <h3
                className="text-[1.3rem] font-bold text-accent font-montserrat"
                style={{ marginBottom: "0.75rem" }}
              >
                Pre-University
              </h3>
              <p
                className="text-blue text-[0.95rem] font-semibold"
                style={{ marginBottom: "0.75rem" }}
              >
                Karkala Jnanasudha P.U. College
              </p>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                Strong foundation in physics, chemistry, mathematics and Statistics that
                fueled my passion for technology and Data Science.
              </p>
            </GlassCard>

            <GlassCard glow>
              <h3
                className="text-[1.3rem] font-bold text-accent font-montserrat"
                style={{ marginBottom: "0.75rem" }}
              >
                School Education
              </h3>
              <p
                className="text-blue text-[0.95rem] font-semibold"
                style={{ marginBottom: "0.75rem" }}
              >
                Dr. N.S.A.M English Medium High School
              </p>
              <p className="text-text-secondary text-[0.9rem] leading-relaxed">
                Developed problem-solving skills and passion for learning through diverse
                coursework.
              </p>
            </GlassCard>
          </div>
        </div>

        <div className="about-block">
          <TechStack />
        </div>

        {/* Milestones */}
        <div className="about-block">
          <h2
            className="text-[2rem] font-bold text-center text-text-primary font-montserrat"
            style={{ marginBottom: "3rem" }}
          >
            Important Milestones
          </h2>
          <div
            className="flex justify-center items-center"
            style={{ minHeight: "220px" }}
          >
            <h3 className="text-[3rem] font-bold text-accent text-center font-montserrat">
              Coming Soon . . . !?
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
