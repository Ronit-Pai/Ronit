"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { THEME } from "@/constants/theme";
import art1 from "@/assets/art/art1.png";
import art2 from "@/assets/art/art2.png";
import pic1 from "@/assets/art/pic1.jpg";
import pic2 from "@/assets/art/pic2.jpg";
import pic3 from "@/assets/art/pic3.jpg";
import pic4 from "@/assets/art/pic4.jpg";
import pic5 from "@/assets/art/pic5.jpg";

export function ArtSection() {
  const artImages = [art1, art2, pic1, pic2, pic3, pic4, pic5, null];
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    if (!imageSrc) return;
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div
        className="grid gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {artImages.map((artImg, i) => {
          const imgSrc = artImg?.src || artImg;
          return (
            <div
              key={i}
              onClick={() => openModal(imgSrc)}
              className={`aspect-square relative overflow-hidden transition-[transform,box-shadow] duration-200 ease-out ${
                artImg ? "cursor-pointer" : "cursor-default"
              }`}
              style={{
                borderRadius: "1rem",
                border: `1px solid ${THEME.border}`,
                background: THEME.surface,
              }}
              onMouseEnter={(e) => {
                if (artImg) {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 0 20px ${THEME.accent}40`;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {artImg && (
                <img
                  src={imgSrc}
                  alt={`Art piece ${i + 1}`}
                  className="w-full h-full object-cover block"
                />
              )}

              {!artImg && (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.05), transparent)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xl tracking-wider text-text-secondary backdrop-blur-[2px]">
                    Coming Soon...
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 flex items-center justify-center z-[1000] p-8"
            style={{ background: "rgba(0, 0, 0, 0.85)" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-surface rounded-2xl p-6 max-w-[90vw] max-h-[90vh] border border-border"
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 cursor-pointer p-1 rounded-full bg-black/50 text-accent hover:bg-black/80 transition-colors border-none"
                aria-label="Close modal"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <img
                src={modalImage}
                alt="Full size artwork"
                className="max-w-full max-h-[80vh] rounded-lg block object-contain"
                style={{ boxShadow: `0 0 40px ${THEME.accent}30` }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
