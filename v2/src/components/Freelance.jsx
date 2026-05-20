"use client";
import React from "react";
import { Mail } from "lucide-react";
import { THEME } from "@/constants/theme";

export function Freelance() {
  return (
    <section className="section-padding-roomy section-last text-center">
      <div className="section-inner">
        <div
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${THEME.surface}, ${THEME.borderLight})`,
            borderRadius: "1.5rem",
            padding: "clamp(2.5rem, 5vw, 4rem)",
            border: `1px solid ${THEME.border}`,
          }}
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "-50%",
              right: "-50%",
              width: "400px",
              height: "400px",
              background: `radial-gradient(circle, ${THEME.accent}15, transparent)`,
            }}
          />

          <h2
            className="font-bold relative z-10"
            style={{ fontSize: "1.8rem", marginBottom: "1.25rem" }}
          >
            Want to <span style={{ color: THEME.accent }}>collaborate</span>?!
          </h2>
          <p
            className="relative z-10"
            style={{
              color: THEME.textSecondary,
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            Have a project that needs a professional touch? Let&apos;s work together!
          </p>
          <a
            href="mailto:ronit14pai06@gmail.com"
            className="btn-solid relative z-10"
          >
            <Mail size={18} /> Hit me up!
          </a>
        </div>
      </div>
    </section>
  );
}
