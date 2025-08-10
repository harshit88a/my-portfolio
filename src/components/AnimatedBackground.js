import React, { useEffect, useRef } from 'react';

// Particle background with interactivity (previous version)
function AnimatedBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);
  const mouseRef = useRef({ x: null, y: null });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const maxParticles = Math.min(140, Math.floor((width * height) / 18000));

    function createParticles() {
      particlesRef.current = new Array(maxParticles).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25, // reduced speed
        vy: (Math.random() - 0.5) * 0.25, // reduced speed
        r: 1.2 + Math.random() * 1.8,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, 'rgba(20, 24, 40, 0.8)');
      grad.addColorStop(1, 'rgba(16, 20, 32, 0.8)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      ctx.fillStyle = 'rgba(99, 102, 241, 0.8)';
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (mouseRef.current.x !== null) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist2 = dx * dx + dy * dy;
          const minDist = 120;
          if (dist2 < minDist * minDist) {
            const force = (minDist - Math.sqrt(dist2)) / minDist;
            p.vx += (dx / (Math.sqrt(dist2) + 0.001)) * force * 0.15; // reduced force
            p.vy += (dy / (Math.sqrt(dist2) + 0.001)) * force * 0.15; // reduced force
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist2 = dx * dx + dy * dy;
          const maxDist = 120;
          if (dist2 < maxDist * maxDist) {
            const opacity = 1 - Math.sqrt(dist2) / maxDist;
            ctx.strokeStyle = `rgba(96, 165, 250, ${opacity * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    }

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    }

    function handleMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function handleMouseLeave() {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    }

    function handleClick(e) {
      const particles = particlesRef.current;
      for (let i = 0; i < 10; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() - 0.5) * 0.4, // reduced speed for spawned dots
          vy: (Math.random() - 0.5) * 0.4, // reduced speed for spawned dots
          r: 1 + Math.random() * 2,
        });
      }
    }

    createParticles();
    draw();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="animated-bg-canvas"
      style={{ position: 'fixed', inset: 0, zIndex: -2 }}
    />
  );
}

export default AnimatedBackground;


