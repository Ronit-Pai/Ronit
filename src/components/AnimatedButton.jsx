import styles from './AnimatedButton.module.css';

export function AnimatedButton({
  text = 'Button',
  animationColor = '#37FF8B',
  textStrokeColor = 'rgba(255,255,255,0.6)',
  fontSize = '2em',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) {
  const buttonStyle = {
    '--animation-color': animationColor,
    '--text-stroke-color': textStrokeColor,
    '--fs-size': fontSize,
  };

  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
      {...props}
    >
      <span className={styles['actual-text']}>&nbsp;{text}&nbsp;</span>
      <span aria-hidden className={styles['hover-text']}>
        &nbsp;{text}&nbsp;
      </span>
    </button>
  );
}
