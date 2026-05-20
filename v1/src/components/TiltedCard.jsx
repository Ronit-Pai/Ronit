import React, { useState, useRef } from 'react';
import styles from './TiltedCard.module.css';

export function TiltedCard({
  children,
  scale = 1.05,
  className = '',
  ...props
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const handleMouseMove = (e) => {
    if (isTouchDevice) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateXValue = (mouseY / rect.height) * 15;
    const rotateYValue = (mouseX / rect.width) * -15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleTouchStart = () => {
    setIsTouchDevice(true);
  };

  return (
    <div
      className={`${styles['tilt-container']} ${className}`}
      onTouchStart={handleTouchStart}
      {...props}
    >
      <div
        ref={cardRef}
        className={styles['tilted-card']}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${
            rotateX === 0 && rotateY === 0 ? 1 : scale
          })`,
        }}
      >
        <div className={styles['card-content']}>{children}</div>
      </div>
    </div>
  );
}
