"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { THEME } from "@/constants/theme";
import { AnimatedButton } from "./AnimatedButton";

export function Hero() {
  const router = useRouter();

  const handleKnowMoreClick = () => {
    router.push("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="section-padding-roomy section-first"
    >
      <div className="section-inner text-center">
        <h1
          className="text-[4.5rem] font-bold font-montserrat leading-tight"
          style={{
            marginBottom: "1rem",
            textShadow: `0 0 20px ${THEME.accent}15, 0 0 40px ${THEME.accent}10, 0 0 60px ${THEME.accent}05`,
          }}
        >
          Hey there{" "}
          <span
            className="text-[3rem] inline-block origin-[70%_70%] animate-wave-hand"
            aria-label="waving hand"
          >
            👋
          </span>
        </h1>
        <h2
          className="text-[3rem] font-montserrat font-bold"
          style={{ marginBottom: "1.5rem" }}
        >
          I&apos;m <span className="text-accent">Ronit Pai</span>
        </h2>
        <p
          className="text-[1.3rem] text-text-secondary font-exo2"
          style={{ marginBottom: "0.75rem" }}
        >
          A 19 year old{" "}
          <span className="text-blue font-semibold">Frontend Developer</span> from
          India.
        </p>
        <p
          className="text-[1.15rem] text-text-secondary leading-relaxed font-exo2"
          style={{ marginBottom: "2rem" }}
        >
          I am also an AI/ML enthusiast with a passion for learning and creating.
        </p>

        <div className="flex justify-center" style={{ marginTop: "0.5rem" }}>
          <AnimatedButton
            text="Know More"
            animationColor={THEME.accent}
            textStrokeColor="rgba(255,255,255,0.6)"
            fontSize="1.5em"
            onClick={handleKnowMoreClick}
          />
        </div>
      </div>
    </section>
  );
}
