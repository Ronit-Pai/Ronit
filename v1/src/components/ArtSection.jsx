import { useState } from 'react';
import { THEME } from '../constants/theme';
import art1 from '../assets/art/art1.png';
import pic1 from '../assets/art/pic1.jpg';
import pic2 from '../assets/art/pic2.jpg';
import pic3 from '../assets/art/pic3.jpg';
import pic4 from '../assets/art/pic4.jpg';
import pic5 from '../assets/art/pic5.jpg';

export function ArtSection() {
  // Add nulls wherever you want "Coming Soon"
  const artImages = [art1, pic1, pic2, pic3, pic4, pic5, null];

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
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {artImages.map((artImg, i) => (
          <div
            key={i}
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: `1px solid ${THEME.border}`,
              background: THEME.surface,
              aspectRatio: '1',
              position: 'relative',
              cursor: artImg ? 'pointer' : 'default',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onClick={() => openModal(artImg)}
            onMouseEnter={(e) => {
              if (artImg) {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = `0 0 20px ${THEME.accent}40`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* REAL IMAGE */}
            {artImg && (
              <img
                src={artImg}
                alt={`Art piece ${i + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            )}

            {/* COMING SOON TILE */}
            {!artImg && (
              <>
                {/* Fake image background */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
                  }}
                />

                {/* Text overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    letterSpacing: '0.08em',
                    color: THEME.textSecondary,
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  Coming Soon...
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              background: THEME.surface,
              borderRadius: '1rem',
              padding: '1.5rem',
              maxWidth: '90vw',
              maxHeight: '90vh',
              border: `1px solid ${THEME.border}`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              onClick={closeModal}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                cursor: 'pointer',
                stroke: THEME.accent,
              }}
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>

            <img
              src={modalImage}
              alt="Full size artwork"
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                borderRadius: '0.5rem',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
