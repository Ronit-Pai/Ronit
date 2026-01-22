import { useState } from 'react';
import { THEME } from '../constants/theme';
import art1 from '../assets/art/art1.png';

export function ArtSection() {
  // Array of art images - add more imports here as you add images
  const artImages = [art1, null, null, null, null, null]; // null = placeholder
  
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
      }}
    >
      {artImages.map((artImg, i) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [imageError, setImageError] = useState(false);
        
        return (
          <div
            key={i}
            style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: `1px solid ${THEME.border}`,
              background: THEME.surface,
              aspectRatio: '1',
              position: 'relative',
            }}
          >
            {/* Placeholder - only visible when no image or image hasn't loaded */}
            {(!artImg || (!imageLoaded && !imageError)) && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: THEME.textSecondary,
                  fontSize: '3rem',
                  background: THEME.surface,
                  borderRadius: '1rem',
                  zIndex: 1,
                }}
              >
                🎨
              </div>
            )}
            
            {/* Image - only render if artImg exists */}
            {artImg && (
              <img
                src={artImg}
                alt={`Art piece ${i + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                  opacity: imageLoaded ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(false);
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
