import monitorFrame from '../assets/mockups/monitor.png';

export function DeviceMockup({ screen }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src={monitorFrame}
        alt="Monitor frame"
        style={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative', 
          zIndex: 2, 
          objectFit: 'contain',
          display: 'block',
        }}
        onError={(e) => {
          e.target.style.display = 'none';
          const parent = e.target.parentElement;
          if (parent) {
            parent.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 4rem;">💻</div>';
          }
        }}
      />
      {screen && (
        <img
          src={screen}
          alt="Project screenshot"
          style={{
            position: 'absolute',
            top: '9%',
            left: '8%',
            width: '84%',
            height: '64%',
            objectFit: 'cover',
            borderRadius: '6px',
            zIndex: 1,
          }}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}
    </div>
  );
}
