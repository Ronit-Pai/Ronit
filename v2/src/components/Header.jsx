"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/data";

function getActiveKey(pathname) {
  if (pathname === "/") return "home";
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment || "home";
}

export function Header() {
  const pathname = usePathname();
  const activeSection = getActiveKey(pathname);
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const navRefs = useRef({});
  const containerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateIndicator = useCallback(() => {
    const activeRef = navRefs.current[activeSection];
    if (activeRef && containerRef.current) {
      const { offsetLeft, offsetWidth } = activeRef;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        opacity: 1,
      });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [activeSection]);

  useEffect(() => {
    updateIndicator();
    const t = setTimeout(updateIndicator, 100);
    return () => clearTimeout(t);
  }, [updateIndicator, pathname]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border backdrop-blur-[10px] bg-[#0a0a0acc]">
      <div
        className="section-inner flex justify-between items-center"
        style={{ padding: "1.5rem" }}
      >
        <div className="flex items-center justify-center w-[50px] h-[50px] shrink-0">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        <nav className="flex items-center gap-4">
          <div className="hidden md:block" ref={containerRef}>
            <div className="nav-pill-container">
              <div className="nav-pill-indicator" style={indicatorStyle} />

              {NAV_ITEMS.map((item) => {
                const itemKey = item.toLowerCase();
                const isResume = itemKey === "resume";
                const href = isResume
                  ? "/Resume.pdf"
                  : itemKey === "home"
                    ? "/"
                    : `/${itemKey}`;
                const isActive = !isResume && itemKey === activeSection;

                return (
                  <Link
                    key={item}
                    href={href}
                    ref={(el) => {
                      if (!isResume) navRefs.current[itemKey] = el;
                    }}
                    target={isResume ? "_blank" : undefined}
                    rel={isResume ? "noopener noreferrer" : undefined}
                    className={`nav-pill-link ${isActive ? "active" : ""}`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="mobile-nav-toggle md:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={`mobile-nav-icon ${isMenuOpen ? "open" : ""}`} />
          </button>
        </nav>
      </div>

      <div className={`mobile-nav-menu ${isMenuOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => {
          const itemKey = item.toLowerCase();
          const isResume = itemKey === "resume";
          const href = isResume
            ? "/Resume.pdf"
            : itemKey === "home"
              ? "/"
              : `/${itemKey}`;
          const isActive = !isResume && itemKey === activeSection;

          return (
            <Link
              key={item}
              href={href}
              target={isResume ? "_blank" : undefined}
              rel={isResume ? "noopener noreferrer" : undefined}
              className={`mobile-nav-link ${isActive ? "active" : ""}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
