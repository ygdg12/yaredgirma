import { useState, useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);
  const cursorTrail = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animRef = useRef(null);
  const trailPoints = useRef([]);
  const trailElements = useRef([]);

  useEffect(() => {
    const TRAIL_LENGTH = 8;

    // Create trail elements
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      const el = document.createElement('div');
      el.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 99997;
        width: ${4 - i * 0.3}px;
        height: ${4 - i * 0.3}px;
        border-radius: 50%;
        background: rgba(255, 107, 53, ${0.6 - i * 0.07});
        transform: translate(-50%, -50%);
        top: -100px;
        left: -100px;
        mix-blend-mode: screen;
      `;
      document.body.appendChild(el);
      trailElements.current.push(el);
    }
    trailPoints.current = Array(TRAIL_LENGTH).fill({ x: -100, y: -100 });

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const addHoverListeners = () => {
      const hoverEls = document.querySelectorAll('a, button, [data-cursor]');
      hoverEls.forEach(el => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          const text = el.getAttribute('data-cursor');
          if (text) setCursorText(text);
        });
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorText('');
        });
      });
    };

    // Re-run on DOM changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    const animate = () => {
      // Dot - snappy
      if (cursorDot.current) {
        cursorDot.current.style.left = pos.current.x + 'px';
        cursorDot.current.style.top = pos.current.y + 'px';
      }

      // Ring - lerp
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;

      if (cursorRing.current) {
        cursorRing.current.style.left = ringPos.current.x + 'px';
        cursorRing.current.style.top = ringPos.current.y + 'px';
      }

      // Trail
      trailPoints.current = [{ x: pos.current.x, y: pos.current.y }, ...trailPoints.current.slice(0, TRAIL_LENGTH - 1)];
      trailElements.current.forEach((el, i) => {
        const p = trailPoints.current[i];
        if (p) {
          el.style.left = p.x + 'px';
          el.style.top = p.y + 'px';
        }
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animRef.current);
      observer.disconnect();
      trailElements.current.forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorDot}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99999,
          width: isClicking ? '6px' : '8px',
          height: isClicking ? '6px' : '8px',
          borderRadius: '50%',
          background: '#FF6B35',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.1s, height 0.1s',
          mixBlendMode: 'screen',
          boxShadow: '0 0 12px rgba(255,107,53,0.8)',
        }}
      />

      {/* Outer ring */}
      <div
        ref={cursorRing}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 99998,
          width: isHovering ? '56px' : isClicking ? '28px' : '36px',
          height: isHovering ? '56px' : isClicking ? '28px' : '36px',
          borderRadius: '50%',
          border: isHovering ? '1.5px solid rgba(255,107,53,0.9)' : '1.5px solid rgba(255,107,53,0.4)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1), border-color 0.2s',
          background: isHovering ? 'rgba(255,107,53,0.08)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {cursorText && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            color: '#FF6B35',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '110%',
          }}>
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
