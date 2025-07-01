import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const trailPositions = useRef(Array(8).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
    };

    const animateTrail = () => {
      trailPositions.current = trailPositions.current.map((pos, index) => {
        const targetPos = index === 0 ? mousePosition.current : trailPositions.current[index - 1];
        return {
          x: pos.x + (targetPos.x - pos.x) * 0.3,
          y: pos.y + (targetPos.y - pos.y) * 0.3
        };
      });

      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          const pos = trailPositions.current[index];
          trail.style.left = `${pos.x - 2}px`;
          trail.style.top = `${pos.y - 2}px`;
          trail.style.opacity = `${0.7 - index * 0.1}`;
        }
      });

      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          ref={el => { if (el) trailRefs.current[index] = el; }}
          className="cursor-trail"
        />
      ))}
    </>
  );
};

export default CustomCursor;