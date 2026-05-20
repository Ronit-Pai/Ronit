"use client";
import React from "react";

export function WorkTabs({ active, setActive }) {
  const tabs = [
    { id: "projects", label: "Projects" },
    { id: "art", label: "Art & Photography" },
  ];

  return (
    <div
      className="flex justify-center border-b border-border"
      style={{ gap: "2.5rem" }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => setActive(tab.id)}
          onFocus={(e) => e.target.blur()}
          className={`work-tab ${active === tab.id ? "active" : ""}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
