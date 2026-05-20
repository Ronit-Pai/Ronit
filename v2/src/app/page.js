"use client";
import React from "react";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Freelance } from "@/components/Freelance";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <Hero />
      <Projects />
      <Freelance />
    </motion.div>
  );
}
