import React, { useEffect, useRef, useState } from 'react';

// Wrapper that scales and fades content based on scroll position
function ScrollSection({ id, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            const vh = window.innerHeight || 1;
            const p = Math.min(1, Math.max(0, 1 - rect.top / vh));
            setProgress(p);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    observer.observe(el);

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = Math.min(1, Math.max(0, 1 - rect.top / vh));
      setProgress(p);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scale = 0.95 + progress * 0.05;
  const alpha = 0.5 + progress * 0.5;
  const translateY = 20 - progress * 20;

  return (
    <section
      id={id}
      ref={ref}
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: visible ? alpha : 0,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
      }}
      className="section-card"
    >
      {children}
    </section>
  );
}

export default ScrollSection;




