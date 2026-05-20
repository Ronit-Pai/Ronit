import React from "react";
import styles from "./GlassCard.module.css";
import { THEME } from "@/constants/theme";

export function GlassCard({
  children,
  className = "",
  glow = true,
  style,
  ...props
}) {
  return (
    <div
      className={`${styles["glass-card"]} ${glow ? styles["with-glow"] : ""} ${className}`}
      style={{
        "--glow-color": THEME.accent,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
