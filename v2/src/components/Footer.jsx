"use client";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FOOTER_MAIN, FOOTER_OTHER } from "@/constants/data";
import { THEME } from "@/constants/theme";

const SOCIAL_LINKS = [
  { Icon: FaEnvelope, href: "mailto:ronit14pai06@gmail.com", label: "Email" },
  { Icon: FaGithub, href: "https://github.com/Ronit-Pai", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/ronit-pai-85370a356/",
    label: "LinkedIn",
  },
  { Icon: FaInstagram, href: "https://www.instagram.com/ronit.pai", label: "Instagram" },
];

export function Footer() {
  return (
    <footer
      className="w-full border-t mt-16"
      style={{
        borderColor: THEME.border,
        padding: "3rem 1.5rem",
        background: "#050505",
      }}
    >
      <div className="section-inner">
        <div
          className="grid mb-12 footer-links-grid"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "3rem",
          }}
        >
          <div>
            <h4
              className="font-bold mb-4 uppercase tracking-wider"
              style={{
                fontSize: "0.9rem",
                color: THEME.accent,
                letterSpacing: "0.05em",
              }}
            >
              MAIN LINKS
            </h4>
            <div className="flex flex-col" style={{ gap: "0.75rem" }}>
              {FOOTER_MAIN.map((item) => {
                const itemKey = item.toLowerCase();
                const href = itemKey === "home" ? "/" : `/${itemKey}`;
                return (
                  <Link
                    key={item}
                    href={href}
                    className="footer-link"
                    style={{ color: THEME.textSecondary }}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4
              className="font-bold mb-4 uppercase tracking-wider"
              style={{
                fontSize: "0.9rem",
                color: THEME.accent,
                letterSpacing: "0.05em",
              }}
            >
              OTHERS
            </h4>
            <div className="flex flex-col" style={{ gap: "0.75rem" }}>
              {FOOTER_OTHER.map((item) => {
                const itemKey = item.toLowerCase();
                const isResume = itemKey === "resume";
                const href = isResume ? "/Resume.pdf" : `/${itemKey}`;

                return (
                  <Link
                    key={item}
                    href={href}
                    target={isResume ? "_blank" : undefined}
                    rel={isResume ? "noopener noreferrer" : undefined}
                    className="footer-link"
                    style={{ color: THEME.textSecondary }}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="flex justify-between items-center flex-wrap border-t pt-8"
          style={{ borderColor: THEME.border, gap: "1rem" }}
        >
          <p style={{ color: THEME.textSecondary, fontSize: "0.9rem" }}>
            © 2026 Ronit Pai.
          </p>
          <div className="flex" style={{ gap: "1rem" }}>
            {SOCIAL_LINKS.map(({ Icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social"
                style={{ color: THEME.textSecondary }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
