import { useRef, useEffect, useCallback } from 'react';

export default function BeforeAfterSlider({ avant, apres, label }) {
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const clipDivRef = useRef(null);
  const dragging = useRef(false);

  const applyPosition = useCallback((pct) => {
    // Use percentage-based clipPath — no pixel computation needed
    if (clipDivRef.current) {
      clipDivRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${pct}%`;
    }
  }, []);

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.max(0, Math.min((clientX - rect.left) / rect.width, 1)) * 100;
    applyPosition(pct);
  }, [applyPosition]);

  useEffect(() => {
    // Init at 50%
    applyPosition(50);

    const container = containerRef.current;
    if (!container) return;

    const onMouseDown = (e) => { dragging.current = true; getPercent(e.clientX); };
    const onMouseMove = (e) => { if (dragging.current) getPercent(e.clientX); };
    const onMouseUp = () => { dragging.current = false; };

    const onTouchStart = (e) => { e.preventDefault(); dragging.current = true; getPercent(e.touches[0].clientX); };
    const onTouchMove = (e) => { e.preventDefault(); if (dragging.current) getPercent(e.touches[0].clientX); };
    const onTouchEnd = () => { dragging.current = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [applyPosition, getPercent]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square overflow-hidden rounded-2xl cursor-col-resize select-none"
      style={{ touchAction: 'none' }}
    >
      {/* Photo APRÈS — fond */}
      <img src={apres} alt="après" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* Photo AVANT — clippée à gauche */}
      <div
        ref={clipDivRef}
        className="absolute inset-0"
        style={{ clipPath: 'inset(0 50% 0 0)', willChange: 'clip-path' }}
      >
        <img src={avant} alt="avant" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      </div>

      {/* Handle vertical */}
      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 w-0 pointer-events-none"
        style={{ left: '50%', willChange: 'left' }}
      >
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg -translate-x-1/2" />
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d1117" strokeWidth="2.5">
            <path d="M8 9l-5 3 5 3M16 9l5 3-5 3" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs font-bold px-2.5 py-1 rounded-lg pointer-events-none">Avant</div>
      <div className="absolute bottom-3 right-3 bg-cyan/80 text-[#0d1117] text-xs font-bold px-2.5 py-1 rounded-lg pointer-events-none">Après</div>

      {label && (
        <div className="absolute top-3 left-3 right-3 bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none text-center truncate">
          {label}
        </div>
      )}
    </div>
  );
}